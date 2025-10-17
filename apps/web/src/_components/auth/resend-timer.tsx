import { useEffect, useState } from "react";

type ResendTimerProps = {
  seconds: number;
  onResend: () => void;
};

export function ResendTimer({ seconds, onResend }: ResendTimerProps) {
  const [remaining, setRemaining] = useState(seconds);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    if (canResend) {
      return;
    }

    const interval = window.setInterval(() => {
      setRemaining((prev) => {
        if (prev <= 1) {
          window.clearInterval(interval);
          setCanResend(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => window.clearInterval(interval);
  }, [canResend]);

  return (
    <div className="flex items-center justify-between text-xs text-white/50">
      <span>{canResend ? "Didn’t get it?" : `Resend available in ${remaining}s`}</span>
      <button
        type="button"
        onClick={() => {
          if (!canResend) {
            return;
          }
          setRemaining(seconds);
          setCanResend(false);
          onResend();
        }}
        disabled={!canResend}
        className={`rounded-full px-3 py-1 font-medium transition ${
          canResend
            ? "text-white hover:bg-white/10"
            : "cursor-not-allowed text-white/30"
        }`}
      >
        Resend
      </button>
    </div>
  );
}
