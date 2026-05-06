import * as React from "react";

const CORRECT_OTP = "123456"; // added hard coded to check wherter it working or not

export function renderInputOtp({
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
  Button,
}) {
  return (
    <InputOTPDemo
      InputOTP={InputOTP}
      InputOTPGroup={InputOTPGroup}
      InputOTPSlot={InputOTPSlot}
      InputOTPSeparator={InputOTPSeparator}
      Button={Button}
    />
  );
}

function InputOTPDemo({
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
  Button,
}) {
  const [otp, setOtp] = React.useState("");
  const [status, setStatus] = React.useState("idle"); // 'idle' | 'success' | 'error'
  const [countdown, setCountdown] = React.useState(43);
  const [canResend, setCanResend] = React.useState(false);
  const [shake, setShake] = React.useState(false); //shake on invalid otp
  const skipResetRef = React.useRef(false); // ← prevents effect from clearing error

  React.useEffect(() => {
    if (countdown <= 0) {
      setCanResend(true);
      return;
    }
    const id = setTimeout(() => setCountdown((c) => c - 1), 1000);
    return () => clearTimeout(id);
  }, [countdown]);

  // reset error only when user manually types, not when we clear programmatically
  React.useEffect(() => {
    if (skipResetRef.current) {
      skipResetRef.current = false;
      return;
    }
    if (status === "error") setStatus("idle");
  }, [otp]);

  // handle otp validations  
  const handleVerify = () => {
    if (otp === CORRECT_OTP) {
      setStatus("success");
    } else {
      skipResetRef.current = true; // skip the next otp effect
      setStatus("error");
      setShake(true);
      setOtp("");
      setTimeout(() => setShake(false), 500);
    }
  };

    // handle otp resend 
  const handleResend = () => {
    skipResetRef.current = true;
    setOtp("");
    setStatus("idle");
    setCountdown(43);
    setCanResend(false);
  };

  // ── Success state 

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="flex size-14 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-green-600 dark:text-green-400"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
        <div className="space-y-1">
          <h2 className="text-xl font-semibold tracking-tight">
            Phone verified!
          </h2>
          <p className="text-sm text-muted-foreground">
            Your number has been successfully verified.
          </p>
        </div>
        <Button variant="outline" onClick={handleResend} className="mt-1">
          Try again
        </Button>
      </div>
    );
  }

  // ── Default / error state 

  return (
    <div className="flex flex-col items-center gap-5 text-center">
      {/* Icon */}
      <div className="flex size-14 items-center justify-center rounded-full border border-border bg-muted">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="14" height="20" x="5" y="2" rx="2" />
          <path d="M12 18h.01" />
        </svg>
      </div>

      {/* Heading */}
      <div className="space-y-1">
        <h2 className="text-xl font-semibold tracking-tight">
          Verify your phone
        </h2>
        <p className="text-sm text-muted-foreground">
          We sent a code to{" "}
          <span className="font-medium text-foreground">+1 (555) 123-4567</span>
        </p>
        <p className="text-xs text-muted-foreground/70">
          Hint: try{" "}
          <span className="font-mono font-semibold text-foreground">
            {CORRECT_OTP}
          </span>
        </p>
      </div>

      {/* OTP slots with shake on error */}
      <div style={shake ? { animation: "shake 0.4s ease" } : {}}>
        <style>{`
          @keyframes shake {
            0%, 100% { transform: translateX(0); }
            20%       { transform: translateX(-6px); }
            40%       { transform: translateX(6px); }
            60%       { transform: translateX(-4px); }
            80%       { transform: translateX(4px); }
          }
        `}</style>
        <InputOTP
          value={otp}
          onChange={setOtp}
          maxLength={6}
          onEnter={() => {
            if (otp.length === 6) handleVerify();
          }}
        >
          <InputOTPGroup>
            <InputOTPSlot
              index={0}
              className={
                status === "error"
                  ? "border-destructive ring-3 ring-destructive/20"
                  : ""
              }
            />
            <InputOTPSlot
              index={1}
              className={
                status === "error"
                  ? "border-destructive ring-3 ring-destructive/20"
                  : ""
              }
            />
            <InputOTPSlot
              index={2}
              className={
                status === "error"
                  ? "border-destructive ring-3 ring-destructive/20"
                  : ""
              }
            />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot
              index={3}
              className={
                status === "error"
                  ? "border-destructive ring-3 ring-destructive/20"
                  : ""
              }
            />
            <InputOTPSlot
              index={4}
              className={
                status === "error"
                  ? "border-destructive ring-3 ring-destructive/20"
                  : ""
              }
            />
            <InputOTPSlot
              index={5}
              className={
                status === "error"
                  ? "border-destructive ring-3 ring-destructive/20"
                  : ""
              }
            />
          </InputOTPGroup>
        </InputOTP>
      </div>

      {/* Error message */}
      {status === "error" && (
        <p className="text-sm font-medium text-destructive -mt-2">
          Invalid OTP, please try again.
        </p>
      )}

      {/* Verify button */}
      <Button
        className="w-full"
        disabled={otp.length < 6}
        onClick={handleVerify}
      >
        Verify Phone Number
      </Button>

      {/* Resend */}
      <p className="text-sm text-muted-foreground">
        {canResend ? (
          <button
            type="button"
            onClick={handleResend}
            className="font-medium text-foreground underline-offset-4 hover:underline"
          >
            Resend code
          </button>
        ) : (
          <>
            Resend code in{" "}
            <span className="font-medium text-foreground">{countdown}s</span>
          </>
        )}
      </p>
    </div>
  );
}
