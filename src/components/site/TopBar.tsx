import { Link } from "@tanstack/react-router";

export function TopBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-paper/95 backdrop-blur-[2px]">
      <div className="wrap flex h-14 items-center justify-between gap-4">
        <Link to="/" className="flex items-baseline gap-2 no-underline">
          <span className="font-display text-[19px] font-extrabold tracking-[-0.025em] text-ink">
            NASSFLOW
          </span>
          <span className="font-display text-[13px] font-semibold text-carbon">
            Freight AI
          </span>
        </Link>
        <div className="flex items-center gap-5">
          <span className="label-mono hidden max-[1100px]:hidden min-[1100px]:inline">
            CONÇU POUR LE TRANSPORT FRANÇAIS · RÉPONDU PAR UN HUMAIN
          </span>
          <a
            href="/#diagnostic"
            className="border border-ink bg-ink px-3.5 py-2 font-mono text-[11px] font-semibold tracking-[0.1em] text-paper-2 uppercase no-underline transition-colors hover:bg-carbon hover:border-carbon"
          >
            Analyser ma boîte cotation
          </a>
        </div>
      </div>
    </header>
  );
}
