import { useEffect, useState } from "react";
import { DocumentFrame, DocumentField } from "./DocumentFrame";

const CHAMPS = [
  { i: "01", l: "DÉPART", v: "75 PARIS" },
  { i: "02", l: "ARRIVÉE", v: "69 LYON" },
  { i: "03", l: "ENLÈVEMENT", v: "LUN. 24/08" },
  { i: "04", l: "COLIS", v: "5 PAL / 80×120" },
  { i: "05", l: "POIDS", v: "2 000 KG" },
  { i: "06", l: "MÈTRES PLANCHER", v: "3,0 ML" },
];

function Surligne({ children }: { children: string }) {
  return (
    <mark className="bg-[rgba(47,95,168,0.16)] text-ink [border-bottom:1px_solid_var(--carbon)]">
      {children}
    </mark>
  );
}

export function HeroDocument() {
  const [anime, setAnime] = useState(false);

  useEffect(() => {
    const reduit = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setAnime(!reduit);
  }, []);

  return (
    <div>
      <DocumentFrame titre="DEMANDE ENTRANTE" reference="LUN. 09:12">
        <div className="px-4 py-4">
          <p className="text-[15.5px] leading-[1.65] text-ink">
            Bonjour, besoin d’un transport <Surligne>Paris</Surligne> →{" "}
            <Surligne>Lyon</Surligne>, <Surligne>5 palettes</Surligne>,{" "}
            <Surligne>2 000 kg</Surligne>, enlèvement{" "}
            <Surligne>lundi</Surligne>. Livraison sur quai. Quel est votre
            tarif ?
          </p>
        </div>

        <div className="mx-4 [border-top:1px_dashed_var(--rule)]" />

        <div className="mt-4 grid grid-cols-3 border-t border-l border-rule">
          {CHAMPS.map((c, n) => (
            <DocumentField
              key={c.i}
              index={c.i}
              label={c.l}
              delay={n * 260}
              animate={anime}
            >
              {c.v}
            </DocumentField>
          ))}
          <DocumentField
            index="07"
            label="CONTRAINTES"
            fullWidth
            delay={6 * 260}
            animate={anime}
          >
            <span className="text-carbon">
              Livraison sur quai · Hayon non requis —{" "}
            </span>
            <span className="text-stamp">
              créneau de livraison non précisé, relance envoyée
            </span>
          </DocumentField>
        </div>

        <div className="flex flex-nowrap items-end justify-between gap-3 px-4 pt-4 pb-6">
          <div className="min-w-0">
            <span className="label-mono block text-[9.5px]">
              PRIX PROPOSÉ — GRILLE INTERNE + MARGE
            </span>
            <span className="mt-1 block font-display text-[22px] font-extrabold tracking-[-0.025em] whitespace-nowrap text-ink sm:text-[30px]">
              348,00 € HT
            </span>
          </div>
          <div
            className={`relative -right-3 -bottom-4 shrink-0 border-[2.5px] border-stamp px-3 py-1.5 text-center ${
              anime ? "anim-stamp" : ""
            }`}
            style={{
              transform: "rotate(-7deg)",
              opacity: anime ? undefined : 0.9,
              animationDelay: anime ? "1900ms" : undefined,
            }}
          >
            <span className="block font-display text-[20px] font-extrabold tracking-[-0.02em] text-stamp">
              À VALIDER
            </span>
            <span className="block font-mono text-[9.5px] tracking-[0.14em] text-stamp uppercase">
              affréteur
            </span>
          </div>
        </div>
      </DocumentFrame>

      <p className="mt-4 font-mono text-[11px] leading-[1.8] tracking-[0.06em] text-ink-soft">
        Réponse préparée en 40 secondes, à 09:12 un lundi matin —
        <br />
        sans qu’un affréteur ait ouvert le message.
      </p>
    </div>
  );
}
