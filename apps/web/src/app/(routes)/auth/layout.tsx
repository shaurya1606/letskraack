import type { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex min-h-dvh items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.16),transparent_55%),linear-gradient(160deg,#0b1224,#0e172f_55%,#111827)] px-4 py-12 text-white">
      <div className="absolute inset-x-10 top-[-30vh] h-[45vh] rounded-full bg-[rgba(59,130,246,0.18)] blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-[-25vh] left-[12%] h-[50vh] w-[50vh] rounded-full bg-[rgba(15,97,255,0.12)] blur-[120px]" aria-hidden="true" />
      <div className="absolute right-[8%] top-1/2 h-[32vh] w-[32vh] -translate-y-1/2 rounded-full bg-[rgba(12,26,56,0.55)] blur-[90px]" aria-hidden="true" />

      <div className="relative z-10 flex w-full max-w-6xl flex-col items-center gap-10">
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.55em] text-white/45">Secure Access</p>
          <h2 className="mt-3 text-lg font-semibold text-white/80">LetsKraack Placement OS</h2>
        </div>
        {children}
      </div>
    </div>
  );
}
