"use client";

import {
  ClipboardEvent,
  FormEvent,
  KeyboardEvent,
  useMemo,
  useRef,
  useState,
} from "react";

const OTP_LENGTH = 6;

export default function LoginPage() {
  const [step, setStep] = useState<"phone" | "otp">("phone");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [otpValues, setOtpValues] = useState<string[]>(
    Array(OTP_LENGTH).fill("")
  );
  const [otpError, setOtpError] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const otpRefs = useRef<Array<HTMLInputElement | null>>([]);

  const digitsOnlyPhone = useMemo(
    () => phoneNumber.replace(/\D/g, ""),
    [phoneNumber]
  );

  const formattedPhone = useMemo(() => {
    const digits = digitsOnlyPhone;
    if (!digits) return "";
    if (digits.length <= 3) return digits;
    if (digits.length <= 6) {
      return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    }
    const area = digits.slice(0, 3);
    const prefix = digits.slice(3, 6);
    const line = digits.slice(6, 10);
    const suffix = digits.slice(10);
    return `(${area}) ${prefix}-${line}${suffix ? ` ${suffix}` : ""}`;
  }, [digitsOnlyPhone]);

  function handlePhoneSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (digitsOnlyPhone.length < 10) {
      setPhoneError("Enter a valid phone number");
      return;
    }
    setPhoneError("");
    setStatusMessage("");
    setStep("otp");
    setTimeout(() => otpRefs.current[0]?.focus(), 0);
  }

  function handleOtpChange(index: number, value: string) {
    if (!/^\d?$/.test(value)) return;
    setOtpValues((prev) => {
      const next = [...prev];
      next[index] = value;
      if (value && index < OTP_LENGTH - 1) {
        otpRefs.current[index + 1]?.focus();
      }
      return next;
    });
  }

  function handleOtpKeyDown(index: number, event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Backspace" && !otpValues[index] && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }
  }

  function handleOtpPaste(event: ClipboardEvent<HTMLInputElement>) {
    event.preventDefault();
    const pasted = event.clipboardData.getData("text").replace(/\D/g, "").slice(0, OTP_LENGTH);
    if (!pasted) return;
    setOtpValues((prev) => {
      const next = [...prev];
      pasted.split("").forEach((digit, idx) => {
        next[idx] = digit;
      });
      const lastIndex = pasted.length - 1;
      otpRefs.current[Math.min(lastIndex, OTP_LENGTH - 1)]?.focus();
      return next;
    });
  }

  function handleOtpSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const code = otpValues.join("");
    if (code.length < OTP_LENGTH) {
      setOtpError("Enter the 6-digit code");
      return;
    }
    setOtpError("");
    setStatusMessage("Phone number verified successfully.");
  }

  function resetFlow() {
    setStep("phone");
    setOtpValues(Array(OTP_LENGTH).fill(""));
    setOtpError("");
    setStatusMessage("");
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto flex min-h-screen max-w-md flex-col px-4 py-8">
        <div className="mb-12 flex flex-col">
          <span className="text-sm font-semibold uppercase tracking-wide text-blue-600">
            Welcome back
          </span>
          <h1 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            Sign in with your phone
          </h1>
          <p className="mt-3 text-base text-gray-600">
            Enter your mobile number to receive a one-time password for secure access.
          </p>
        </div>

        <div className="flex-1">
          {step === "phone" ? (
            <form onSubmit={handlePhoneSubmit} className="rounded-2xl bg-white p-6 shadow-lg">
              <label className="block text-sm font-medium text-gray-700">
                Mobile number
                <input
                  inputMode="tel"
                  aria-label="Mobile number"
                  placeholder="Enter mobile number"
                  value={phoneNumber}
                  onChange={(event) => setPhoneNumber(event.target.value)}
                  className="mt-3 w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-base focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                />
              </label>
              {phoneError && <p className="mt-2 text-sm text-red-600">{phoneError}</p>}
              <button
                type="submit"
                className="mt-6 w-full rounded-xl bg-blue-600 px-4 py-3 text-base font-semibold text-white shadow transition hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
              >
                Send OTP
              </button>
              <p className="mt-4 text-sm text-gray-500">
                Standard SMS rates may apply. Make sure you have access to this device.
              </p>
            </form>
          ) : (
            <form onSubmit={handleOtpSubmit} className="rounded-2xl bg-white p-6 shadow-lg">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-gray-500">Code sent to</p>
                  <p className="mt-1 text-lg font-semibold text-gray-900">
                    {formattedPhone || phoneNumber}
                  </p>
                </div>
                <button
                  type="button"
                  className="text-sm font-medium text-blue-600 hover:text-blue-700"
                  onClick={resetFlow}
                >
                  Change
                </button>
              </div>

              <label className="mt-6 block text-sm font-medium text-gray-700">
                Enter 6-digit code
              </label>
              <div className="mt-3 grid grid-cols-6 gap-2">
                {otpValues.map((digit, index) => (
                  <input
                    key={index}
                    ref={(element) => {
                      otpRefs.current[index] = element;
                    }}
                    value={digit}
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength={1}
                    aria-label={`Digit ${index + 1}`}
                    className="aspect-square w-full rounded-xl border border-gray-300 bg-gray-50 text-center text-lg font-semibold text-gray-900 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                    onChange={(event) => handleOtpChange(index, event.target.value)}
                    onKeyDown={(event) => handleOtpKeyDown(index, event)}
                    onPaste={handleOtpPaste}
                  />
                ))}
              </div>
              {otpError && <p className="mt-2 text-sm text-red-600">{otpError}</p>}

              <button
                type="submit"
                className="mt-6 w-full rounded-xl bg-blue-600 px-4 py-3 text-base font-semibold text-white shadow transition hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
              >
                Verify & Continue
              </button>

              <button
                type="button"
                className="mt-4 w-full rounded-xl border border-transparent bg-gray-100 px-4 py-3 text-base font-medium text-gray-700 transition hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400"
                onClick={() => {
                  setOtpValues(Array(OTP_LENGTH).fill(""));
                  setOtpError("");
                  setStatusMessage("We just sent you a new code.");
                  otpRefs.current[0]?.focus();
                }}
              >
                Resend code
              </button>
            </form>
          )}
        </div>

        <div className="mt-8 space-y-2 text-center text-sm">
          {statusMessage && <p className="font-medium text-blue-600">{statusMessage}</p>}
          <p className="text-gray-500">Protected by enterprise-grade security</p>
        </div>
      </div>
    </div>
  );
}
