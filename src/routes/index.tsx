import { createFileRoute } from "@tanstack/react-router";
import { TopBar } from "@/components/site/TopBar";
import { Footer } from "@/components/site/Footer";
import { HeroDocument } from "@/components/site/HeroDocument";
import { LeadForm } from "@/components/site/LeadForm";
import { DocumentFrame } from "@/components/site/DocumentFrame";

const TITRE =
  "NASSFLOW Freight AI — Vos demandes de cotation traitées en continu";
const DESCRIPTION =
  "Un employé IA qui lit vos demandes de cotation par e-mail, en extrait les informations transport, calcule votre offre et prépare la réponse. Vous validez, vous envoyez.";
const OG_IMAGE =
  "https://project--26179091-022c-486d-b87d-ec7f2af14e76.lovable.app/og-nassflow.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITRE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITRE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "fr_FR" },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG_IMAGE },
    ],
  }),
  component: Accueil,
});

const TACHES = [
  ["Lire la demande et la qualifier", "Cotation, relance, litige ou facture ?", "×40/j", "0:30"],
  ["Extraire les informations transport", "Départ, arrivée, colis, poids, mètres plancher, dates", "×40/j", "1:00"],
  ["Réclamer ce qui manque", "Hayon, gerbabilité, adresse exacte, créneau imposé", "×20/j", "1:30"],
  ["Retrouver le bon tarif", "Grille client, historique de la ligne, prix d’achat du moment", "×40/j", "1:30"],
  ["Rédiger et envoyer l’offre", "Au format et au ton attendus par ce client", "×40/j", "1:00"],
  ["Relancer la cotation sans réponse", "Presque jamais fait, faute de temps", "×40/j", "0:45"],
];

const ETAPES = [
  ["01", "Tri", "L’agent distingue une demande de cotation d’une relance, d’un litige ou d’une facture. Le reste ne le concerne pas."],
  ["02", "Lecture", "Corps du message, PDF joint, tableau Excel, signature. Y compris les demandes mal formulées."],
  ["03", "Extraction", "Départ, arrivée, palettes, poids, mètres plancher, dates, contraintes de livraison."],
  ["04", "Complément", "Si une information manque pour coter, l’agent la demande au client immédiatement, sans attendre midi."],
  ["05", "Calcul", "Vos grilles, vos règles de marge, votre historique sur la ligne. Vos prix, pas une moyenne de marché."],
  ["06", "Validation", "Votre affréteur voit le prix proposé, l’ajuste s’il le souhaite, envoie. Chaque correction affine le modèle."],
  ["07", "Envoi et relance", "Réponse au format de votre maison. Relance automatique si le client reste silencieux."],
  ["08", "Gagné / perdu", "L’agent lit la réponse du client et enregistre l’issue. Votre taux de gain par ligne et par client, enfin mesuré."],
];

const LIVRABLES = [
  "Le nombre exact de demandes reçues, et combien sont restées sans réponse",
  "Votre délai de réponse médian, par affréteur et par tranche horaire",
  "Vos lignes les plus demandées, et les écarts de prix entre vos affréteurs sur une même ligne",
  "Le référentiel tarifaire reconstitué à partir de vos cotations passées — y compris s’il n’a jamais été écrit nulle part",
  "La part de vos demandes automatisables dès aujourd’hui, honnêtement estimée",
];

const RAPPORT: Array<[string, string, boolean]> = [
  ["Demandes reçues sur 30 jours", "812", false],
  ["Demandes cotées", "604", false],
  ["Restées sans réponse", "208 · 25,6 %", true],
  ["Délai de réponse médian", "3 h 40", false],
  ["Reçues hors horaires de bureau", "31 %", false],
  ["Écart de prix max, même ligne", "± 18 %", true],
  ["Automatisables sans ambiguïté", "57 %", false],
];

const CONFIDENTIALITE = [
  ["Cloisonnement strict", "Vos tarifs, vos marges et votre historique restent isolés dans votre espace. Ils ne sont jamais mutualisés, jamais agrégés, jamais visibles par un autre client — y compris un confrère de votre groupement."],
  ["Aucun entraînement sur vos données", "Vos e-mails et vos prix ne servent jamais à entraîner un modèle partagé. Ils alimentent uniquement votre propre référentiel."],
  ["Vos données en Europe", "Le site est servi par une infrastructure internationale ; vos données de contact sont stockées et traitées au sein de l’Union européenne, conformité RGPD, suppression complète sous 30 jours sur simple demande écrite."],
];

function Accueil() {
  return (
    <>
      <TopBar />
      <main>
        {/* HERO */}
        <section className="border-b border-rule">
          <div className="wrap grid gap-12 py-14 min-[900px]:grid-cols-2 min-[900px]:gap-14 min-[900px]:py-20">
            <div>
              <p className="eyebrow">EMPLOYÉ IA · DEMANDES DE COTATION</p>
              <h1 className="mt-5 text-[34px] min-[900px]:text-[46px]">
                Vos demandes de cotation ne dorment plus dans une boîte mail.
              </h1>
              <p className="mt-6 max-w-[36em] text-ink-soft">
                L’agent lit chaque demande reçue par e-mail, en extrait les
                informations transport, calcule votre prix à partir de vos
                tarifs, et prépare la réponse. Votre affréteur valide en
                quelques secondes et envoie.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#diagnostic"
                  className="border border-ink bg-ink px-5 py-3 font-mono text-[12px] font-semibold tracking-[0.12em] text-paper-2 uppercase no-underline transition-colors hover:bg-carbon hover:border-carbon"
                >
                  Analyser ma boîte cotation
                </a>
                <span className="label-mono">
                  Sans installation. Sans changer de TMS.
                </span>
              </div>
            </div>
            <HeroDocument />
          </div>
        </section>

        {/* 01 PROBLÈME */}
        <section className="border-b border-rule">
          <div className="wrap py-14 min-[900px]:py-20">
            <p className="eyebrow">01 — LE PROBLÈME</p>
            <h2 className="mt-5 max-w-[18em] text-[27px] min-[900px]:text-[36px]">
              Une cotation, ce n’est pas un e-mail. C’est six tâches enchaînées.
            </h2>
            <p className="mt-5 max-w-[44em] text-ink-soft">
              Prises séparément, elles paraissent négligeables. Multipliées par
              le nombre de demandes reçues chaque jour, elles occupent
              l’équivalent d’un poste à temps partiel — et ce sont les demandes
              qui restent sans réponse qui coûtent le plus cher.
            </p>

            <div className="mt-10 max-w-[900px] border-t border-rule">
              {TACHES.map(([titre, note, freq, duree]) => (
                <div
                  key={titre}
                  className="flex items-start justify-between gap-6 border-b border-rule py-4"
                >
                  <div className="min-w-0">
                    <p className="font-medium text-ink">{titre}</p>
                    <p className="mt-1 text-[14.5px] leading-[1.55] text-ink-soft">
                      {note}
                    </p>
                  </div>
                  <div className="flex shrink-0 items-baseline gap-6 min-[620px]:gap-10">
                    <span className="hidden font-mono text-[13px] text-ink-soft min-[620px]:inline">
                      {freq}
                    </span>
                    <span className="w-[48px] text-right font-mono text-[14px] font-semibold text-carbon">
                      {duree}
                    </span>
                  </div>
                </div>
              ))}
              <div className="flex items-baseline justify-between gap-6 border-b-2 border-ink py-4">
                <span className="font-display text-[18px] font-extrabold tracking-[-0.02em]">
                  Temps mobilisé chaque jour
                </span>
                <span className="font-display text-[22px] font-extrabold tracking-[-0.02em]">
                  ≈ 4 h
                </span>
              </div>
              <p className="mt-4 max-w-[44em] text-[14.5px] leading-[1.6] text-ink-soft">
                Estimation pour une équipe recevant 40 demandes par jour. Le
                premier livrable de NASSFLOW consiste précisément à remplacer
                cette estimation par vos chiffres réels.
              </p>
            </div>
          </div>
        </section>

        {/* 02 FONCTIONNEMENT */}
        <section className="border-b border-rule">
          <div className="wrap py-14 min-[900px]:py-20">
            <p className="eyebrow">02 — FONCTIONNEMENT</p>
            <h2 className="mt-5 text-[27px] min-[900px]:text-[36px]">
              Huit étapes. Vous gardez la sixième.
            </h2>
            <p className="mt-5 max-w-[44em] text-ink-soft">
              Vous redirigez votre adresse de cotation vers l’agent. Rien à
              installer, aucune connexion à votre TMS pour démarrer.
            </p>

            <div className="mt-10 grid border-t border-l border-rule min-[640px]:grid-cols-2 min-[1000px]:grid-cols-4">
              {ETAPES.map(([num, titre, texte]) => {
                const humain = num === "06";
                return (
                  <div
                    key={num}
                    className={`border-r border-b border-rule px-4 py-5 ${
                      humain
                        ? "bg-[rgba(47,95,168,0.07)] [border-left:3px_solid_var(--carbon)]"
                        : ""
                    }`}
                  >
                    <span
                      className={`font-mono text-[10.5px] font-semibold tracking-[0.14em] uppercase ${
                        humain ? "text-stamp" : "text-carbon"
                      }`}
                    >
                      {humain ? "ÉTAPE 06 · HUMAIN" : `ÉTAPE ${num}`}
                    </span>
                    <h3 className="mt-2 text-[19px]">{titre}</h3>
                    <p className="mt-2 text-[14.5px] leading-[1.6] text-ink-soft">
                      {texte}
                    </p>
                  </div>
                );
              })}
            </div>
            <p className="mt-6 max-w-[46em] text-[14.5px] leading-[1.6] text-ink-soft">
              L’agent ne décide jamais seul d’un prix engageant.
              L’automatisation complète n’est ouverte que ligne par ligne, une
              fois que vos chiffres montrent qu’elle est fiable sur ce
              périmètre.
            </p>
          </div>
        </section>

        {/* 03 DIAGNOSTIC */}
        <section id="diagnostic" className="scroll-mt-16 border-b border-rule">
          <div className="wrap grid gap-12 py-14 min-[900px]:grid-cols-2 min-[900px]:gap-14 min-[900px]:py-20">
            <div>
              <p className="eyebrow">03 — PAR OÙ ON COMMENCE</p>
              <h2 className="mt-5 text-[27px] min-[900px]:text-[36px]">
                Le diagnostic de votre boîte cotation.
              </h2>
              <p className="mt-5 text-ink-soft">
                Avant de vous vendre un agent, on vous montre ce qui se passe
                réellement dans votre boîte mail. Vous nous donnez un accès en
                lecture à votre adresse de cotation. Sous dix jours ouvrés, vous
                recevez un rapport chiffré sur vos douze derniers mois.
              </p>
              <ul className="mt-8 list-none border-t border-rule p-0">
                {LIVRABLES.map((l) => (
                  <li
                    key={l}
                    className="flex gap-3 border-b border-rule py-3 text-[15.5px] leading-[1.6]"
                  >
                    <span aria-hidden="true" className="font-mono text-carbon">
                      →
                    </span>
                    <span>{l}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-[14.5px] leading-[1.6] text-ink-soft">
                Le rapport vous appartient. Si vous décidez de ne pas aller plus
                loin, vous le gardez et nous supprimons vos données. Si vous
                continuez, son montant est déduit de la mise en service.
              </p>
            </div>

            <div>
              <DocumentFrame titre="EXTRAIT DE RAPPORT" reference="30 JOURS">
                <div className="px-4 py-1">
                  {RAPPORT.map(([label, valeur, alerte]) => (
                    <div
                      key={label}
                      className="flex items-baseline justify-between gap-4 border-b border-rule py-3 last:border-b-0"
                    >
                      <span className="text-[14.5px] text-ink-soft">
                        {label}
                      </span>
                      <span
                        className={`shrink-0 font-mono text-[14px] font-semibold ${
                          alerte ? "text-stamp" : "text-ink"
                        }`}
                      >
                        {valeur}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mx-4 flex items-baseline justify-between gap-4 border-t-2 border-ink py-4">
                  <span className="label-mono">DIAGNOSTIC COMPLET</span>
                  <span className="font-display text-[24px] font-extrabold tracking-[-0.025em]">
                    1 500 € HT
                  </span>
                </div>
              </DocumentFrame>
              <p className="mt-4 font-mono text-[11px] leading-[1.8] tracking-[0.06em] text-ink-soft">
                Exemple illustratif. Vos chiffres seront différents — c’est
                précisément l’intérêt de les mesurer.
              </p>
            </div>
          </div>
        </section>

        {/* 04 CONFIDENTIALITÉ */}
        <section className="border-b border-rule">
          <div className="wrap py-14 min-[900px]:py-20">
            <p className="eyebrow">04 — VOS TARIFS</p>
            <h2 className="mt-5 max-w-[20em] text-[27px] min-[900px]:text-[36px]">
              Votre grille de prix est votre avantage concurrentiel. Elle ne
              sort pas de chez vous.
            </h2>
            <div className="mt-10 grid border-t border-l border-rule min-[800px]:grid-cols-3">
              {CONFIDENTIALITE.map(([titre, texte]) => (
                <div key={titre} className="border-r border-b border-rule px-5 py-6">
                  <h3 className="text-[19px]">{titre}</h3>
                  <p className="mt-3 text-[14.5px] leading-[1.6] text-ink-soft">
                    {texte}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 05 FORMULAIRE */}
        <section className="bg-ink">
          <div className="wrap py-14 min-[900px]:py-20">
            <p className="font-mono text-[11px] font-semibold tracking-[0.14em] text-[#93b3e0] uppercase">
              05 — DEMANDE
            </p>
            <h2 className="mt-5 max-w-[20em] text-[27px] text-paper-2 min-[900px]:text-[36px]">
              Voir ce que votre boîte cotation contient réellement.
            </h2>
            <p className="mt-5 max-w-[42em] text-[rgba(245,247,245,0.72)]">
              Réponse sous 24 h ouvrées, par téléphone. Pas de séquence
              d’e-mails automatiques.
            </p>
            <div className="mt-10 max-w-[900px]">
              <LeadForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
