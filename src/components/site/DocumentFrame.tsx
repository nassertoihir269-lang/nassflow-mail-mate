import type { ReactNode } from "react";

export function DocumentFrame({
  titre,
  reference,
  children,
  className = "",
}: {
  titre: string;
  reference: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative border border-ink bg-paper-2 doc-shadow ${className}`}
    >
      <div className="flex items-center justify-between gap-3 border-b border-ink bg-paper px-4 py-2.5">
        <span className="label-mono text-ink">{titre}</span>
        <span className="label-mono">{reference}</span>
      </div>
      {children}
    </div>
  );
}

export function DocumentField({
  index,
  label,
  children,
  fullWidth = false,
  delay,
  animate,
}: {
  index: string;
  label: string;
  children: ReactNode;
  fullWidth?: boolean;
  delay: number;
  animate: boolean;
}) {
  return (
    <div
      className={`flex min-h-[74px] flex-col justify-between border-b border-r border-rule px-3 py-2.5 ${
        fullWidth ? "col-span-3" : ""
      } ${animate ? "anim-field" : ""}`}
      style={animate ? { animationDelay: `${delay}ms` } : undefined}
    >
      <span className="label-mono block min-h-[26px] text-[9.5px] leading-[1.35]">
        {index} · {label}
      </span>
      <span className="font-mono text-[14px] font-medium text-carbon">
        {children}
      </span>
    </div>
  );
}
