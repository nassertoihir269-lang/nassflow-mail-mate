import { Link } from "@tanstack/react-router";

export function TopBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-paper">
      <div className="wrap flex h-14 items-center justify-between gap-3">
        <Link
          to="/"
          className="flex shrink-0 items-baseline gap-1.5 whitespace-nowrap no-underline sm:gap-2"
        >
          <span className="font-display text-[15px] font-extrabold tracking-[-0.025em] text-ink sm:text-[19px]">
            NASSFLOW
          </span>
          <span className="font-display text-[11px] font-semibold text-carbon sm:text-[13px]">
            Freight AI
          </span>
        </Link>
        <div className="flex items-center gap-5">
          <span className="label-mono hidden max-[1100px]:hidden min-[1100px]:inline">
            CONÇU POUR LE TRANSPORT FRANÇAIS · RÉPONDU PAR UN HUMAIN
          </span>
          <a
            href="/#diagnostic"
            className="shrink-0 border border-ink bg-ink px-3 py-2 font-mono text-[10.5px] font-semibold tracking-[0.1em] whitespace-nowrap text-paper-2 uppercase no-underline transition-colors hover:bg-carbon hover:border-carbon sm:px-3.5 sm:text-[11px]"
          >
            <span className="sm:hidden">Diagnostic</span>
            <span className="hidden sm:inline">Analyser ma boîte cotation</span>
          </a>
        </div>
      </div>
    </header>
  );
}
