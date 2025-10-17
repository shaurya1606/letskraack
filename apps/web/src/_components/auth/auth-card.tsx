import { useEffect, useState, type ReactNode } from "react";

import IconBadge, { type IconBadgeVariant } from "./icon-badge";

export type AuthCardProps = {
	icon: IconBadgeVariant;
	title: string;
	subtitle: string;
	children: ReactNode;
	footer?: ReactNode;
	message?: ReactNode;
};

export function AuthCard({ icon, title, subtitle, children, footer, message }: AuthCardProps) {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		const frame = requestAnimationFrame(() => setMounted(true));
		return () => cancelAnimationFrame(frame);
	}, []);

	return (
		<section
			className={`relative w-full max-w-[420px] rounded-[1.75rem] border border-white/12 bg-[rgba(17,24,39,0.78)] px-7 py-8 shadow-[0_24px_80px_rgba(8,15,25,0.55)] backdrop-blur-2xl transition-all duration-[280ms] ease-[cubic-bezier(.22,.9,.35,1)] ${
				mounted ? "translate-y-0 scale-100 opacity-100" : "translate-y-5 scale-[0.96] opacity-0"
			}`}
		>
			<div className="flex flex-col gap-6">
				<div className="flex flex-col gap-3 text-center">
					<div className="flex justify-center">
						<IconBadge variant={icon} />
					</div>
					<div className="space-y-1.5">
						<h1 className="text-[1.65rem] font-semibold text-white md:text-[1.85rem]">{title}</h1>
						<p className="text-sm text-white/65 md:text-[0.95rem]">{subtitle}</p>
					</div>
				</div>

				{message && <div className="text-sm text-white/80">{message}</div>}

				<div className="flex flex-col gap-5">{children}</div>

				{footer && <div className="mt-1 text-xs text-white/45">{footer}</div>}
			</div>
		</section>
	);
}





