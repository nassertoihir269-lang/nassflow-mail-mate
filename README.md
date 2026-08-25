# NASSFLOW | Votre Agent IA

Crée un site vitrine B2B one-page pour NASSFLOW Freight AI, en français.

## CONTEXTE MÉTIER

NASSFLOW vend un "employé IA" aux commissionnaires de transport,

affréteurs et transitaires français. L'agent lit les demandes de

cotation reçues par e-mail, extrait les informations transport, calcule

le prix depuis les grilles tarifaires du client, et prépare la réponse.

Un humain valide avant envoi.

Cible : dirigeants et directeurs d'exploitation de PME de transport

françaises, 40-60 ans, pragmatiques, méfiants vis-à-vis des startups.

Ils lisent souvent sur mobile ou sur un PC de bureau ancien.

Objectif unique : obtenir la soumission du formulaire "Demander le

diagnostic". Ce n'est pas une page de lead-gen à froid, c'est une page

de crédibilité envoyée après un premier contact téléphonique ou

LinkedIn. Elle doit inspirer sérieux et sécurité, jamais hype

technologique.

## STACK

React + Vite + TypeScript + Tailwind + shadcn/ui.

Supabase pour stocker les soumissions.

Framer Motion uniquement si nécessaire. Mobile-first.

Accessible : focus visible, contrastes AA, prefers-reduced-motion

respecté.

Routes : / (page principale), /mentions-legales, /confidentialite.

## DIRECTION ARTISTIQUE — À RESPECTER STRICTEMENT

Univers visuel : le document de transport français. Lettre de voiture,

CMR, grille tarifaire, carnet à souches. Rigueur administrative, pas

science-fiction.

INTERDIT ABSOLU :

- dégradés violet/bleu, glassmorphism, effets néon

- fond noir avec accent vert acide

- illustrations 3D, blobs, particules, mesh gradients

- icônes émoji

- photos stock de camions au coucher du soleil

- les mots "révolutionner", "disruption", "propulsé par l'IA"

- badges "GPT-4" ou logos de modèles

Palette (valeurs exactes) :

--paper    #E9ECEA  fond principal, gris-papier froid

--paper-2  #F5F7F5  cartes et surfaces

--ink      #14181A  texte principal, presque noir

--ink-soft #4A5257  texte secondaire

--rule     #C3C9C6  filets et bordures 1px

--carbon   #2F5FA8  bleu carbone, données extraites et accents

--stamp    #B23B2E  rouge tampon, alertes et tampon de validation

Typographie :

- Titres : Archivo 800, letter-spacing -0.025em, line-height 1.06

- Corps : IBM Plex Sans 400/500, 17px, line-height 1.6

- Données, labels, chiffres : IBM Plex Mono 400/500/600, MAJUSCULES,

  letter-spacing 0.14em pour les petits labels

Le mono n'est pas décoratif : il sert à tout ce qui est donnée, champ,

mesure, référence. Jamais pour du texte courant.

Mise en page :

- border-radius : 2px MAXIMUM partout, sans exception — boutons, inputs,

  selects, textarea, cartes, y compris dans la section sombre. Aucun

  arrondi supérieur nulle part.

- Bordures 1px solides, jamais d'ombres floues. Une seule ombre

  autorisée : box-shadow 6px 6px 0 rgba(20,24,26,.09) sur les blocs

  "document", effet papier posé.

- Largeur max du contenu : 1160px.

- Séparation entre sections : filet 1px --rule.

- Grilles de champs façon formulaire administratif : cases contiguës

  séparées par des filets 1px, numérotées 01, 02, 03…

## STRUCTURE ET CONTENU EXACT

### BARRE SUPÉRIEURE (sticky, fine, filet 1px en bas)

Gauche : "NASSFLOW" en Archivo 800 + "Freight AI" en 600 couleur carbon.

Droite : mention mono discrète

"CONÇU POUR LE TRANSPORT FRANÇAIS · RÉPONDU PAR UN HUMAIN"

(masquée sous 1100px) + bouton "Analyser ma boîte cotation" ancré

sur #diagnostic.

### 1. HERO — deux colonnes 50/50, empilées sous 900px

Colonne gauche :

Eyebrow mono : EMPLOYÉ IA · DEMANDES DE COTATION

H1 : "Vos demandes de cotation ne dorment plus dans une boîte mail."

Sous-titre : "L'agent lit chaque demande reçue par e-mail, en extrait

les informations transport, calcule votre prix à partir de vos tarifs,

et prépare la réponse. Votre affréteur valide en quelques secondes et

envoie."

Bouton primaire : "Analyser ma boîte cotation"

Mention mono à côté : "Sans installation. Sans changer de TMS."

Colonne droite — ÉLÉMENT SIGNATURE DE LA PAGE, soigne-le :

Composant réutilisable DocumentFrame (fond --paper-2, bordure 1px

--ink, ombre dure).

En-tête : "DEMANDE ENTRANTE" à gauche, "LUN. 09:12" à droite, sur fond

légèrement plus foncé, filet 1px en dessous.

Corps de l'e-mail client, texte normal :

"Bonjour, besoin d'un transport Paris → Lyon, 5 palettes, 2 000 kg,

enlèvement lundi. Livraison sur quai. Quel est votre tarif ?"

Les segments "Paris", "Lyon", "5 palettes", "2 000 kg", "lundi" sont

surlignés en bleu carbone translucide avec soulignement 1px.

Séparateur en pointillés, puis grille de 3 colonnes de cases bordées

1px, façon formulaire administratif :

01 · DÉPART → 75 PARIS

02 · ARRIVÉE → 69 LYON

03 · ENLÈVEMENT → LUN. 24/08

04 · COLIS → 5 PAL / 80×120

05 · POIDS → 2 000 KG

06 · MÈTRES PLANCHER → 3,0 ML

07 · CONTRAINTES (case pleine largeur) → "Livraison sur quai · Hayon

non requis —" puis en rouge tampon : "créneau de livraison non précisé,

relance envoyée"

CONTRAINTE D'ALIGNEMENT IMPÉRATIVE : les cases 01 à 06 ont toutes la

même hauteur minimale et leurs valeurs sont alignées sur la même ligne

de base, y compris quand le libellé passe sur deux lignes — c'est le cas

de "06 · MÈTRES PLANCHER". Réserve deux lignes de hauteur au libellé

dans toutes les cases. Sur un bloc dont l'argument est la rigueur

administrative, un décalage se voit immédiatement.

Labels en mono 9.5px gris, valeurs en mono 14px bleu carbone.

Pied du document :

Gauche : label mono "PRIX PROPOSÉ — GRILLE INTERNE + MARGE", puis

"348,00 € HT" en Archivo 800 30px.

Droite : un tampon — cadre 2.5px rouge, rotation -7deg, "À VALIDER" en

Archivo 800 avec "affréteur" en mono dessous, opacité 0.9. Il doit

légèrement déborder du cadre du document, comme un tampon posé de

travers.

ANIMATION au chargement, une seule fois, orchestrée : les 7 cases se

remplissent successivement (fondu + translation 3px vers le haut,

260ms d'intervalle), puis le tampon apparaît en scale 1.25 → 1 avec un

ressort. Rien d'autre ne bouge sur la page. Désactivée si

prefers-reduced-motion.

Légende sous le document, en mono, deux lignes :

"Réponse préparée en 40 secondes, à 09:12 un lundi matin —

sans qu'un affréteur ait ouvert le message."

### 2. LE PROBLÈME

Eyebrow : 01 — LE PROBLÈME

H2 : "Une cotation, ce n'est pas un e-mail. C'est six tâches enchaînées."

Chapô : "Prises séparément, elles paraissent négligeables. Multipliées

par le nombre de demandes reçues chaque jour, elles occupent

l'équivalent d'un poste à temps partiel — et ce sont les demandes qui

restent sans réponse qui coûtent le plus cher."

TABLEAU sobre, sans cartes ni icônes, LARGEUR MAXIMALE 900px aligné à

gauche. Trois colonnes : tâche (+ note explicative en dessous,

--ink-soft) / fréquence / durée, ces deux dernières en mono, contiguës

à droite, séparées d'au maximum 80px. Il ne doit rester aucun grand vide

entre le libellé et les chiffres. Colonne fréquence masquée sous 620px.

Vérifie qu'aucune colonne de durée ne se duplique hors du conteneur.

Lire la demande et la qualifier — "Cotation, relance, litige ou facture ?" — ×40/j — 0:30

Extraire les informations transport — "Départ, arrivée, colis, poids, mètres plancher, dates" — ×40/j — 1:00

Réclamer ce qui manque — "Hayon, gerbabilité, adresse exacte, créneau imposé" — ×20/j — 1:30

Retrouver le bon tarif — "Grille client, historique de la ligne, prix d'achat du moment" — ×40/j — 1:30

Rédiger et envoyer l'offre — "Au format et au ton attendus par ce client" — ×40/j — 1:00

Relancer la cotation sans réponse — "Presque jamais fait, faute de temps" — ×40/j — 0:45

Ligne de total, bordure 2px, Archivo 800 :

"Temps mobilisé chaque jour" — "≈ 4 h"

Note : "Estimation pour une équipe recevant 40 demandes par jour. Le

premier livrable de NASSFLOW consiste précisément à remplacer cette

estimation par vos chiffres réels."

### 3. FONCTIONNEMENT

Eyebrow : 02 — FONCTIONNEMENT

H2 : "Huit étapes. Vous gardez la sixième."

Chapô : "Vous redirigez votre adresse de cotation vers l'agent. Rien à

installer, aucune connexion à votre TMS pour démarrer."

Grille de 8 cases contiguës séparées par des filets 1px : 4 colonnes en

desktop, 2 en tablette, 1 en mobile. Chaque case : numéro mono

"ÉTAPE 0X" en bleu carbone, titre Archivo, description 14.5px.

01 Tri — "L'agent distingue une demande de cotation d'une relance, d'un litige ou d'une facture. Le reste ne le concerne pas."

02 Lecture — "Corps du message, PDF joint, tableau Excel, signature. Y compris les demandes mal formulées."

03 Extraction — "Départ, arrivée, palettes, poids, mètres plancher, dates, contraintes de livraison."

04 Complément — "Si une information manque pour coter, l'agent la demande au client immédiatement, sans attendre midi."

05 Calcul — "Vos grilles, vos règles de marge, votre historique sur la ligne. Vos prix, pas une moyenne de marché."

06 Validation — "Votre affréteur voit le prix proposé, l'ajuste s'il le souhaite, envoie. Chaque correction affine le modèle."

07 Envoi et relance — "Réponse au format de votre maison. Relance automatique si le client reste silencieux."

08 Gagné / perdu — "L'agent lit la réponse du client et enregistre l'issue. Votre taux de gain par ligne et par client, enfin mesuré."

TRAITEMENT DE LA CASE 06, IMPORTANT : fond rgba(47,95,168,0.07),

bordure gauche 3px pleine en --carbon, numéro affiché

"ÉTAPE 06 · HUMAIN" en rouge tampon. N'utilise JAMAIS un fond gris pour

cette case : elle doit ressortir comme la case la plus importante de la

page, pas paraître désactivée.

Note finale : "L'agent ne décide jamais seul d'un prix engageant.

L'automatisation complète n'est ouverte que ligne par ligne, une fois

que vos chiffres montrent qu'elle est fiable sur ce périmètre."

### 4. LE DIAGNOSTIC (section ancrée #diagnostic)

Eyebrow : 03 — PAR OÙ ON COMMENCE

H2 : "Le diagnostic de votre boîte cotation."

Deux colonnes.

Gauche — chapô : "Avant de vous vendre un agent, on vous montre ce qui

se passe réellement dans votre boîte mail. Vous nous donnez un accès en

lecture à votre adresse de cotation. Sous dix jours ouvrés, vous recevez

un rapport chiffré sur vos douze derniers mois."

Liste, chaque ligne séparée par un filet, préfixée d'une flèche → bleue :

- Le nombre exact de demandes reçues, et combien sont restées sans réponse

- Votre délai de réponse médian, par affréteur et par tranche horaire

- Vos lignes les plus demandées, et les écarts de prix entre vos affréteurs sur une même ligne

- Le référentiel tarifaire reconstitué à partir de vos cotations passées — y compris s'il n'a jamais été écrit nulle part

- La part de vos demandes automatisables dès aujourd'hui, honnêtement estimée

Note : "Le rapport vous appartient. Si vous décidez de ne pas aller plus

loin, vous le gardez et nous supprimons vos données. Si vous continuez,

son montant est déduit de la mise en service."

Droite — le MÊME composant DocumentFrame que le hero, variante

"rapport", en-tête "EXTRAIT DE RAPPORT" / "30 JOURS". Lignes clé-valeur

séparées par des filets, valeurs en mono 600 :

Demandes reçues sur 30 jours — 812

Demandes cotées — 604

Restées sans réponse — 208 · 25,6 %   [rouge tampon]

Délai de réponse médian — 3 h 40

Reçues hors horaires de bureau — 31 %

Écart de prix max, même ligne — ± 18 %   [rouge tampon]

Automatisables sans ambiguïté — 57 %

Puis bordure 2px et ligne finale : "DIAGNOSTIC COMPLET" — "1 500 € HT"

en Archivo 800 24px.

Légende mono dessous : "Exemple illustratif. Vos chiffres seront

différents — c'est précisément l'intérêt de les mesurer."

### 5. CONFIDENTIALITÉ

Eyebrow : 04 — VOS TARIFS

H2 sur deux lignes, sans espace parasite ni saut forcé :

"Votre grille de prix est votre avantage concurrentiel.

Elle ne sort pas de chez vous."

Trois cartes contiguës séparées par des filets 1px, empilées sous 800px :

"Cloisonnement strict" — "Vos tarifs, vos marges et votre historique

restent isolés dans votre espace. Ils ne sont jamais mutualisés, jamais

agrégés, jamais visibles par un autre client — y compris un confrère de

votre groupement."

"Aucun entraînement sur vos données" — "Vos e-mails et vos prix ne

servent jamais à entraîner un modèle partagé. Ils alimentent uniquement

votre propre référentiel."

"Hébergement en France" — "Données hébergées sur le territoire français,

conformité RGPD, suppression complète sous 30 jours sur simple demande

écrite."

### 6. FONDATEUR

Eyebrow : 05 — QUI VOUS PARLE

H2 : "Un interlocuteur, pas un service client."

Deux colonnes. À gauche, un composant photo carré 88×88 bordé 1px

acceptant une image ; en repli, les initiales en Archivo 800 bleu

carbone. À droite : le nom en Archivo 800, "Fondateur" en mono dessous,

un paragraphe de parcours, puis le paragraphe fixe :

"Le déploiement se fait avec vous, sur vos vrais e-mails et vos vraies

grilles. Pas de configuration à faire seul dans un coin."

Enfin téléphone et e-mail, en mono, cliquables (tel: et mailto:).

Sous les coordonnées, une ligne en mono --ink-soft :

"Un seul interlocuteur, du premier appel jusqu'au déploiement."

RÈGLE STRICTE : aucun crochet, aucune parenthèse, aucun "par exemple"

ne doit apparaître à l'écran. Regroupe les valeurs à remplir dans un

seul fichier de configuration en haut du composant, avec exactement ces

chaînes :

  nom = "NOM À COMPLÉTER"

  initiales = "NF"

  telephone = "TÉLÉPHONE À COMPLÉTER"

  email = "EMAIL À COMPLÉTER"

  parcours = "PARCOURS À COMPLÉTER"

Elles doivent être modifiables en un seul endroit.

### 7. FORMULAIRE

Section à fond --ink, texte clair, en contraste total avec le reste de

la page. C'est le point d'arrivée visuel.

Eyebrow bleu clair : 06 — DEMANDE

H2 : "Voir ce que votre boîte cotation contient réellement."

Chapô : "Réponse sous 24 h ouvrées, par téléphone. Pas de séquence

d'e-mails automatiques."

Champs, grille 2 colonnes (1 sous 680px), labels en mono majuscules :

- Nom et prénom (requis)

- Société (requis)

- E-mail professionnel (requis, validation format)

- Téléphone

- Demandes de cotation reçues par jour (select, requis) :

  Moins de 10 / 10 à 30 / 30 à 80 / 80 à 200 / Plus de 200 / Je ne sais pas

- Où sont vos tarifs aujourd'hui ? (select, requis) :

  Une grille Excel tenue à jour / Une grille Excel, mais ancienne /

  Dans le TMS / Surtout dans la tête des affréteurs / Ça dépend des clients

- TMS utilisé (select) :

  Akanea / Dashdoc / DDS-Generix / LIS WinSped / Winfret-Abacom /

  Développement interne / Aucun TMS / Autre

- Activité principale (select) :

  Commissionnaire-affrètement / Transporteur avec flotte propre /

  Messagerie-groupage / Transitaire overseas /

  Transport spécialisé (frigo, ADR, exceptionnel) / Chargeur-industriel

- Message (textarea, facultatif), placeholder :

  "Ce qui vous coûte le plus de temps aujourd'hui."

Rappel : border-radius 2px maximum sur tous ces champs et selects.

Bouton : "Demander le diagnostic"

Mention à côté : "Accès en lecture seule, révocable à tout moment. Vos

données ne servent qu'à produire votre rapport."

Enregistre dans une table Supabase `leads` (id, created_at, nom,

societe, email, telephone, volume_jour, localisation_tarifs, tms,

activite, message). Validation côté client avec messages d'erreur en

français sous chaque champ. État de chargement sur le bouton. Après

succès, remplace le formulaire par un message sobre : "Demande

enregistrée. Nous vous rappelons sous 24 h ouvrées." Gère l'échec réseau

avec un message explicite, pas une alerte générique.

### PIED DE PAGE

Une ligne en mono :

NASSFLOW Freight AI · Agents IA pour le transport et l'affrètement ·

Données hébergées en France · Mentions légales · Politique de

confidentialité

"Mentions légales" et "Politique de confidentialité" sont de VRAIS liens

vers /mentions-legales et /confidentialite.

### PAGES LÉGALES

Crée les deux pages avec la même direction artistique : même barre

supérieure, fond --paper, titres Archivo, corps IBM Plex Sans, largeur

de texte limitée à 70 caractères, lien de retour à l'accueil.

/mentions-legales : éditeur (raison sociale, forme juridique, capital,

SIREN, adresse du siège), directeur de la publication, contact,

hébergeur avec son adresse, propriété intellectuelle. Valeurs à

compléter écrites en MAJUSCULES du type "RAISON SOCIALE À COMPLÉTER",

sans crochets.

/confidentialite : responsable de traitement, données collectées via le

formulaire, finalité, base légale (intérêt légitime), durée de

conservation, sous-traitants et hébergement, droits RGPD (accès,

rectification, effacement, opposition, portabilité), adresse de contact,

droit de réclamation auprès de la CNIL. Même convention pour les valeurs

à compléter.

## SEO ET PARTAGE

title : "NASSFLOW Freight AI — Vos demandes de cotation traitées en continu"

description : "Un employé IA qui lit vos demandes de cotation par

e-mail, en extrait les informations transport, calcule votre offre et

prépare la réponse. Vous validez, vous envoyez."

lang="fr", Open Graph complet, favicon monogramme NF.

Image Open Graph : génère un fichier statique 1200×630 px servi depuis

les assets du projet — fond --paper, "NASSFLOW Freight AI" en Archivo

800, en dessous "Vos demandes de cotation ne dorment plus dans une boîte

mail." N'utilise JAMAIS une capture automatique de l'URL de

prévisualisation. Mets twitter:card à "summary_large_image".

## EXIGENCES FINALES

- Tout le contenu en français, apostrophes typographiques (') et espaces

  insécables avant : ; ? !

- Aucun texte en anglais visible, aucun "lorem ipsum", aucun crochet

- Teste le rendu à 375px, 768px et 1440px

- Les blocs "document" du hero et du diagnostic partagent exactement le

  même composant DocumentFrame, avec des variantes

- Si tu dois choisir entre "impressionnant" et "crédible", choisis

  toujours crédible

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://nassflow-mail-mate.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/26179091-022c-486d-b87d-ec7f2af14e76).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
