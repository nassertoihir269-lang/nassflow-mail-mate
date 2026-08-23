import { createFileRoute, Link } from "@tanstack/react-router";
import { TopBar } from "@/components/site/TopBar";
import { Footer } from "@/components/site/Footer";

const TITRE = "Mentions légales — NASSFLOW Freight AI";
const DESCRIPTION =
  "Éditeur, directeur de la publication, hébergement et propriété intellectuelle du site NASSFLOW Freight AI.";

export const Route = createFileRoute("/mentions-legales")({
  head: () => ({
    meta: [
      { title: TITRE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITRE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MentionsLegales,
});

function Bloc({ titre, lignes }: { titre: string; lignes: string[] }) {
  return (
    <section className="border-t border-rule py-7">
      <h2 className="text-[20px]">{titre}</h2>
      {lignes.map((l) => (
        <p key={l} className="mt-3 text-[16px] leading-[1.65] text-ink-soft">
          {l}
        </p>
      ))}
    </section>
  );
}

function MentionsLegales() {
  return (
    <>
      <TopBar />
      <main className="wrap py-14">
        <div className="max-w-[70ch]">
          <p className="eyebrow">INFORMATIONS LÉGALES</p>
          <h1 className="mt-5 text-[32px]">Mentions légales</h1>

          <Bloc
            titre="Éditeur du site"
            lignes={[
              "Raison sociale : RAISON SOCIALE À COMPLÉTER",
              "Forme juridique : FORME JURIDIQUE À COMPLÉTER",
              "Capital social : CAPITAL SOCIAL À COMPLÉTER",
              "SIREN : SIREN À COMPLÉTER",
              "Adresse du siège : ADRESSE DU SIÈGE À COMPLÉTER",
            ]}
          />
          <Bloc
            titre="Directeur de la publication"
            lignes={["DIRECTEUR DE LA PUBLICATION À COMPLÉTER"]}
          />
          <Bloc
            titre="Contact"
            lignes={[
              "E-mail : EMAIL À COMPLÉTER",
              "Téléphone : TÉLÉPHONE À COMPLÉTER",
            ]}
          />
          <Bloc
            titre="Hébergeur"
            lignes={[
              "Hébergeur : HÉBERGEUR À COMPLÉTER",
              "Adresse de l’hébergeur : ADRESSE DE L’HÉBERGEUR À COMPLÉTER",
            ]}
          />
          <Bloc
            titre="Propriété intellectuelle"
            lignes={[
              "L’ensemble des contenus présents sur ce site — textes, structures, éléments graphiques, marques et logotypes — est protégé par le droit de la propriété intellectuelle et demeure la propriété exclusive de l’éditeur.",
              "Toute reproduction, représentation, adaptation ou exploitation, totale ou partielle, sans autorisation écrite préalable, est interdite.",
            ]}
          />

          <p className="border-t border-rule pt-7">
            <Link to="/" className="font-mono text-[12px] tracking-[0.1em] text-carbon uppercase underline">
              Retour à l’accueil
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
