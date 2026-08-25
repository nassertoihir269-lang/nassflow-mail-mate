import { createFileRoute, Link } from "@tanstack/react-router";
import { TopBar } from "@/components/site/TopBar";
import { Footer } from "@/components/site/Footer";

const TITRE = "Politique de confidentialité — NASSFLOW Freight AI";
const DESCRIPTION =
  "Traitement des données collectées par le formulaire de diagnostic NASSFLOW : finalité, base légale, conservation, hébergement et droits RGPD.";

export const Route = createFileRoute("/confidentialite")({
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
  component: Confidentialite,
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

function Confidentialite() {
  return (
    <>
      <TopBar />
      <main className="wrap py-14">
        <div className="max-w-[70ch]">
          <p className="eyebrow">DONNÉES PERSONNELLES</p>
          <h1 className="mt-5 text-[32px]">Politique de confidentialité</h1>

          <Bloc
            titre="Responsable de traitement"
            lignes={[
              "Responsable de traitement : Nasser Aboudou",
              "Adresse : 70 avenue Rhin et Danube, 86000 Poitiers, France",
              "Contact : contact@nassflow.com",
            ]}
          />
          <Bloc
            titre="Données collectées"
            lignes={[
              "Le formulaire de demande de diagnostic collecte : nom et prénom, société, adresse e-mail professionnelle, numéro de téléphone, volume de demandes de cotation reçues par jour, localisation actuelle de vos tarifs, TMS utilisé, activité principale et message libre.",
              "Aucune donnée n’est collectée à votre insu et aucun traceur publicitaire n’est déposé.",
            ]}
          />
          <Bloc
            titre="Finalité"
            lignes={[
              "Les données servent uniquement à vous recontacter au sujet de votre demande de diagnostic et à préparer la proposition correspondante.",
            ]}
          />
          <Bloc
            titre="Base légale"
            lignes={[
              "Le traitement repose sur l’intérêt légitime du responsable de traitement à répondre à une demande professionnelle émanant d’un prospect ayant volontairement transmis ses coordonnées.",
            ]}
          />
          <Bloc
            titre="Durée de conservation"
            lignes={[
              "Les données sont conservées trois ans à compter du dernier contact, puis supprimées. Elles sont supprimées plus tôt sur simple demande écrite.",
            ]}
          />
          <Bloc
            titre="Sous-traitants et hébergement"
            lignes={[
              "Les données du formulaire sont hébergées sur le territoire français chez : Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.",
              "Aucune donnée n’est cédée, revendue ou mutualisée avec un tiers à des fins commerciales.",
            ]}
          />
          <Bloc
            titre="Vos droits"
            lignes={[
              "Vous disposez d’un droit d’accès, de rectification, d’effacement, d’opposition, de limitation et de portabilité de vos données.",
              "Ces droits s’exercent par écrit à l’adresse : contact@nassflow.com.",
            ]}
          />
          <Bloc
            titre="Réclamation"
            lignes={[
              "Si vous estimez, après nous avoir contactés, que vos droits ne sont pas respectés, vous pouvez adresser une réclamation à la Commission nationale de l’informatique et des libertés, 3 place de Fontenoy, TSA 80715, 75334 Paris Cedex 07.",
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
