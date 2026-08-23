import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-rule bg-paper">
      <div className="wrap py-6">
        <p className="font-mono text-[11px] leading-[1.9] tracking-[0.08em] text-ink-soft uppercase">
          NASSFLOW Freight AI · Agents IA pour le transport et l’affrètement ·
          Données hébergées en France ·{" "}
          <Link to="/mentions-legales" className="text-ink underline">
            Mentions légales
          </Link>{" "}
          ·{" "}
          <Link to="/confidentialite" className="text-ink underline">
            Politique de confidentialité
          </Link>
        </p>
      </div>
    </footer>
  );
}
