import * as React from "react";
import { cn } from "@repo/utils";

const InputOTP = React.forwardRef(({ length = 6, className, onChange, ...props }, ref) => {
  const [values, setValues] = React.useState(Array(length).fill(""));
  const inputsRef = React.useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value.replace(/[^0-9]/g, "");

    if (!value) return;

    const newValues = [...values];
    newValues[index] = value[0];
    setValues(newValues);

    if (index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }

    onChange?.(newValues.join(""));
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      const newValues = [...values];

      if (values[index]) {
        newValues[index] = "";
      } else if (index > 0) {
        inputsRef.current[index - 1]?.focus();
      }

      setValues(newValues);
      onChange?.(newValues.join(""));
    }
  };

  return (
    <div ref={ref} className={cn("flex gap-2", className)} {...props}>
      {values.map((val, index) => (
        <input
          key={index}
          ref={(el) => (inputsRef.current[index] = el)}
          value={val}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          maxLength={1}
          className="h-10 w-10 text-center text-lg border rounded-md outline-none focus:ring-2 focus:ring-ring"
        />
      ))}
    </div>
  );
});

InputOTP.displayName = "InputOTP";

export { InputOTP };
