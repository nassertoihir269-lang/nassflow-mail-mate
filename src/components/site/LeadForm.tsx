import { useState, type FormEvent } from "react";
import { supabase } from "@/integrations/supabase/client";

const VOLUMES = [
  "Moins de 10",
  "10 à 30",
  "30 à 80",
  "80 à 200",
  "Plus de 200",
  "Je ne sais pas",
];

const TARIFS = [
  "Une grille Excel tenue à jour",
  "Une grille Excel, mais ancienne",
  "Dans le TMS",
  "Surtout dans la tête des affréteurs",
  "Ça dépend des clients",
];

const TMS = [
  "Akanea",
  "Dashdoc",
  "DDS-Generix",
  "LIS WinSped",
  "Winfret-Abacom",
  "Développement interne",
  "Aucun TMS",
  "Autre",
];

const ACTIVITES = [
  "Commissionnaire-affrètement",
  "Transporteur avec flotte propre",
  "Messagerie-groupage",
  "Transitaire overseas",
  "Transport spécialisé (frigo, ADR, exceptionnel)",
  "Chargeur-industriel",
];

type Champs = {
  nom: string;
  societe: string;
  email: string;
  telephone: string;
  volume_jour: string;
  localisation_tarifs: string;
  tms: string;
  activite: string;
  message: string;
};

const VIDE: Champs = {
  nom: "",
  societe: "",
  email: "",
  telephone: "",
  volume_jour: "",
  localisation_tarifs: "",
  tms: "",
  activite: "",
  message: "",
};

const champClass =
  "w-full border border-[rgba(245,247,245,0.28)] bg-[rgba(245,247,245,0.06)] px-3 py-2.5 font-sans text-[16px] text-paper-2 placeholder:text-[rgba(245,247,245,0.45)] focus:border-paper-2 focus:outline-none";

function Label({ htmlFor, children, requis }: { htmlFor: string; children: string; requis?: boolean | undefined }) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-1.5 block font-mono text-[10.5px] font-medium tracking-[0.14em] text-[rgba(245,247,245,0.7)] uppercase"
    >
      {children}
      {requis ? <span className="text-stamp"> *</span> : null}
    </label>
  );
}

function Erreur({ texte }: { texte?: string | undefined }) {
  if (!texte) return null;
  return (
    <p className="mt-1.5 font-mono text-[11px] tracking-[0.06em] text-[#e8897c]">
      {texte}
    </p>
  );
}

export function LeadForm() {
  const [valeurs, setValeurs] = useState<Champs>(VIDE);
  const [erreurs, setErreurs] = useState<Partial<Record<keyof Champs, string>>>({});
  const [envoi, setEnvoi] = useState(false);
  const [erreurGlobale, setErreurGlobale] = useState("");
  const [succes, setSucces] = useState(false);

  const set = (k: keyof Champs) => (e: { target: { value: string } }) =>
    setValeurs((v) => ({ ...v, [k]: e.target.value }));

  function valider(): boolean {
    const e: Partial<Record<keyof Champs, string>> = {};
    if (!valeurs.nom.trim()) e.nom = "Merci d’indiquer votre nom et prénom.";
    if (!valeurs.societe.trim()) e.societe = "Merci d’indiquer votre société.";
    if (!valeurs.email.trim()) e.email = "Merci d’indiquer votre e-mail professionnel.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(valeurs.email.trim()))
      e.email = "Le format de l’adresse e-mail n’est pas valide.";
    if (!valeurs.volume_jour) e.volume_jour = "Merci de choisir un volume quotidien.";
    if (!valeurs.localisation_tarifs)
      e.localisation_tarifs = "Merci d’indiquer où sont vos tarifs aujourd’hui.";
    setErreurs(e);
    return Object.keys(e).length === 0;
  }

  async function onSubmit(ev: FormEvent) {
    ev.preventDefault();
    setErreurGlobale("");
    if (!valider()) return;
    setEnvoi(true);
    try {
      const { error } = await supabase.from("leads").insert({
        nom: valeurs.nom.trim(),
        societe: valeurs.societe.trim(),
        email: valeurs.email.trim(),
        telephone: valeurs.telephone.trim() || null,
        volume_jour: valeurs.volume_jour,
        localisation_tarifs: valeurs.localisation_tarifs,
        tms: valeurs.tms || null,
        activite: valeurs.activite || null,
        message: valeurs.message.trim() || null,
      });
      if (error) throw error;
      setSucces(true);
    } catch {
      setErreurGlobale(
        "L’enregistrement n’a pas abouti. Vérifiez votre connexion et réessayez ; si le problème persiste, écrivez-nous directement.",
      );
    } finally {
      setEnvoi(false);
    }
  }

  if (succes) {
    return (
      <div className="border border-[rgba(245,247,245,0.28)] px-6 py-10">
        <p className="font-display text-[24px] font-extrabold tracking-[-0.025em] text-paper-2">
          Demande enregistrée. Nous vous rappelons sous 24 h ouvrées.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5 min-[680px]:grid-cols-2">
      <div>
        <Label htmlFor="nom" requis>Nom et prénom</Label>
        <input id="nom" className={champClass} value={valeurs.nom} onChange={set("nom")} autoComplete="name" />
        <Erreur texte={erreurs.nom} />
      </div>
      <div>
        <Label htmlFor="societe" requis>Société</Label>
        <input id="societe" className={champClass} value={valeurs.societe} onChange={set("societe")} autoComplete="organization" />
        <Erreur texte={erreurs.societe} />
      </div>
      <div>
        <Label htmlFor="email" requis>E-mail professionnel</Label>
        <input id="email" type="email" className={champClass} value={valeurs.email} onChange={set("email")} autoComplete="email" />
        <Erreur texte={erreurs.email} />
      </div>
      <div>
        <Label htmlFor="telephone">Téléphone</Label>
        <input id="telephone" type="tel" className={champClass} value={valeurs.telephone} onChange={set("telephone")} autoComplete="tel" />
      </div>
      <div>
        <Label htmlFor="volume_jour" requis>Demandes de cotation reçues par jour</Label>
        <select id="volume_jour" className={champClass} value={valeurs.volume_jour} onChange={set("volume_jour")}>
          <option value="">Choisir</option>
          {VOLUMES.map((v) => (
            <option key={v} value={v} className="text-ink">{v}</option>
          ))}
        </select>
        <Erreur texte={erreurs.volume_jour} />
      </div>
      <div>
        <Label htmlFor="localisation_tarifs" requis>Où sont vos tarifs aujourd’hui ?</Label>
        <select id="localisation_tarifs" className={champClass} value={valeurs.localisation_tarifs} onChange={set("localisation_tarifs")}>
          <option value="">Choisir</option>
          {TARIFS.map((v) => (
            <option key={v} value={v} className="text-ink">{v}</option>
          ))}
        </select>
        <Erreur texte={erreurs.localisation_tarifs} />
      </div>
      <div>
        <Label htmlFor="tms">TMS utilisé</Label>
        <select id="tms" className={champClass} value={valeurs.tms} onChange={set("tms")}>
          <option value="">Choisir</option>
          {TMS.map((v) => (
            <option key={v} value={v} className="text-ink">{v}</option>
          ))}
        </select>
      </div>
      <div>
        <Label htmlFor="activite">Activité principale</Label>
        <select id="activite" className={champClass} value={valeurs.activite} onChange={set("activite")}>
          <option value="">Choisir</option>
          {ACTIVITES.map((v) => (
            <option key={v} value={v} className="text-ink">{v}</option>
          ))}
        </select>
      </div>
      <div className="min-[680px]:col-span-2">
        <Label htmlFor="message">Message</Label>
        <textarea
          id="message"
          rows={4}
          className={champClass}
          placeholder="Ce qui vous coûte le plus de temps aujourd’hui."
          value={valeurs.message}
          onChange={set("message")}
        />
      </div>

      {erreurGlobale ? (
        <p className="min-[680px]:col-span-2 border border-[#e8897c] px-3 py-2.5 font-mono text-[12px] leading-[1.7] text-[#e8897c]">
          {erreurGlobale}
        </p>
      ) : null}

      <div className="flex flex-wrap items-center gap-4 min-[680px]:col-span-2">
        <button
          type="submit"
          disabled={envoi}
          className="border border-paper-2 bg-paper-2 px-5 py-3 font-mono text-[12px] font-semibold tracking-[0.12em] text-ink uppercase transition-colors hover:bg-transparent hover:text-paper-2 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {envoi ? "Envoi en cours…" : "Demander le diagnostic"}
        </button>
        <span className="max-w-[420px] font-mono text-[10.5px] leading-[1.8] tracking-[0.06em] text-[rgba(245,247,245,0.6)]">
          Accès en lecture seule, révocable à tout moment. Vos données ne
          servent qu’à produire votre rapport.
        </span>
      </div>
    </form>
  );
}
