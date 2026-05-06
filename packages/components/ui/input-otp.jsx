'use client';

import * as React from 'react';
import { cn } from '@repo/utils';

// ─── Context ────────

const InputOTPContext = React.createContext(null);

const useInputOTP = () => {
  const ctx = React.useContext(InputOTPContext);
  if (!ctx) throw new Error('InputOTP components must be used inside <InputOTP>');
  return ctx;
};

// ─── InputOTP (root) 

function InputOTP({
  value,
  onChange,
  onEnter,
  maxLength = 6,
  disabled = false,
  pattern = /^[0-9]*$/,
  children,
  className,
  ...props
}) {
  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = React.useState('');
  const otp = isControlled ? value : internalValue;

  const inputRefs = React.useRef([]);

  const handleChange = React.useCallback(
    (index, char) => {
      if (!pattern.test(char) && char !== '') return;
      const arr = otp.split('');
      arr[index] = char;
      const next = arr.join('').slice(0, maxLength);
      if (!isControlled) setInternalValue(next);
      onChange?.(next);
      // move focus forward
      if (char && index < maxLength - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    },
    [otp, isControlled, onChange, maxLength, pattern]
  );

const handleKeyDown = React.useCallback(
  (index, e) => {
    if (e.key === "Backspace") {
      if (otp[index]) {
        handleChange(index, "");
      } else if (index > 0) {
        inputRefs.current[index - 1]?.focus();
        handleChange(index - 1, "");
      }
    } else if (e.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === "ArrowRight" && index < maxLength - 1) {
      inputRefs.current[index + 1]?.focus();
    } else if (e.key === "Enter") {
      onEnter?.(); // ← new
    }
  },
  [otp, handleChange, maxLength, onEnter],
);

  const handlePaste = React.useCallback(
    (e) => {
      e.preventDefault();
      const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, maxLength);
      if (!isControlled) setInternalValue(pasted);
      onChange?.(pasted);
      const focusIndex = Math.min(pasted.length, maxLength - 1);
      inputRefs.current[focusIndex]?.focus();
    },
    [maxLength, isControlled, onChange]
  );

  const ctx = React.useMemo(
    () => ({ otp, maxLength, disabled, inputRefs, handleChange, handleKeyDown, handlePaste, onEnter }),
    [otp, maxLength, disabled, handleChange, handleKeyDown, handlePaste, onEnter]
  );

  return (
    <InputOTPContext.Provider value={ctx}>
      <div
        data-slot="input-otp"
        role="group"
        aria-label="One-time password input"
        className={cn('flex items-center gap-2', className)}
        {...props}
      >
        {children}
      </div>
    </InputOTPContext.Provider>
  );
}

InputOTP.displayName = 'InputOTP';

// ─── InputOTPGroup 

const InputOTPGroup = React.forwardRef(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="input-otp-group"
    className={cn('flex items-center gap-2', className)}
    {...props}
  >
    {children}
  </div>
));

InputOTPGroup.displayName = 'InputOTPGroup';

// ─── InputOTPSlot

const InputOTPSlot = React.forwardRef(({ index, className, ...props }, ref) => {
  const { otp, disabled, inputRefs, handleChange, handleKeyDown, handlePaste } = useInputOTP();
  const char = otp[index] ?? '';
  const isActive = false; // managed by browser focus

  const setRef = (node) => {
    inputRefs.current[index] = node;
    if (typeof ref === 'function') ref(node);
    else if (ref) ref.current = node;
  };

  return (
    <input
      ref={setRef}
      type="text"
      inputMode="numeric"
      maxLength={1}
      value={char}
      disabled={disabled}
      data-slot="input-otp-slot"
      data-index={index}
      onChange={(e) => handleChange(index, e.target.value.slice(-1))}
      onKeyDown={(e) => handleKeyDown(index, e)}
      onPaste={handlePaste}
      onFocus={(e) => e.target.select()}
      aria-label={`Digit ${index + 1}`}
      className={cn(
        'h-10 w-10 rounded-lg border border-input bg-transparent text-center text-base font-medium outline-none transition-all',
        'placeholder:text-muted-foreground',
        'focus:border-ring focus:ring-3 focus:ring-ring/50',
        'disabled:pointer-events-none disabled:opacity-50',
        className
      )}
      {...props}
    />
  );
});

InputOTPSlot.displayName = 'InputOTPSlot';

// ─── InputOTPSeparator 

const InputOTPSeparator = React.forwardRef(({ className, ...props }, ref) => (
  <span
    ref={ref}
    data-slot="input-otp-separator"
    aria-hidden="true"
    className={cn('text-muted-foreground select-none', className)}
    {...props}
  >
    –
  </span>
));

InputOTPSeparator.displayName = 'InputOTPSeparator';

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };
