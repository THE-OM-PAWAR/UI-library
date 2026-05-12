export function renderInputOTP({ InputOTP, Label }, customClassName) {
  return (
    <div className={`flex flex-col gap-4 ${customClassName || ""}`}>
      <Label>Enter OTP</Label>
      <InputOTP length={6} />
    </div>
  );
}
