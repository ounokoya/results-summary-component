# Tokens fournis par Frontend Mentor — results-summary-component

> SDL-FM 1.5.0 Phase 1 (remise à niveau, lot 1). Source : `style-guide.md`, `README.md` et images du starter. Seulement ce que FM fournit ; les valeurs mesurées viendront de l'analyse de la Phase 2 (`specs/visuel/`).

## Largeurs de maquette

Mobile 375 px, desktop 1440 px (images à l'échelle 1). FM demande une page correcte et conforme WCAG de 320 px aux grands écrans. Pas de maquette tablette.

## Couleurs

| Nom FM | Rôle observé | Valeur FM | Hex |
|---|---|---|---|
| Light red | Catégorie « Reaction » | `hsl(0, 100%, 67%)` | `#FF5757` |
| Orangey yellow | Catégorie « Memory » | `hsl(39, 100%, 56%)` | `#FFB01F` |
| Green teal | Catégorie « Verbal » | `hsl(166, 100%, 37%)` | `#00BD91` |
| Cobalt blue | Catégorie « Visual » | `hsl(234, 85%, 45%)` | `#1125D4` |
| Light slate blue (background) | Dégradé du panneau de résultat (haut) | `hsl(252, 100%, 67%)` | `#7857FF` |
| Light royal blue (background) | Dégradé du panneau (bas) | `hsl(241, 81%, 54%)` | `#2E2BE9` |
| Violet blue (circle) | Dégradé du cercle (haut) | `hsla(256, 72%, 46%, 1)` | `#4E21CA` |
| Persian blue (circle) | Dégradé du cercle (bas, transparent) | `hsla(241, 72%, 46%, 0)` | `#2421CA` |
| White | Carte, texte sur le panneau | `hsl(0, 0%, 100%)` | `#FFFFFF` |
| Pale blue | Fond de page | `hsl(221, 100%, 96%)` | `#EBF1FF` |
| Light lavender | « Your Result », paragraphe du panneau | `hsl(241, 100%, 89%)` | `#C8C7FF` |
| Dark gray blue | Titres, notes, bouton | `hsl(224, 30%, 27%)` | `#303B5A` |

| Contraste | Rapport | Remarque |
|---|---|---|
| Light red sur White | **3,11:1** | texte de catégorie (fond teinté encore plus clair) — < 4,5 : repris en Phase 2 |
| Orangey yellow sur White | **1,83:1** | idem — < 4,5 : repris en Phase 2 |
| Green teal sur White | **2,42:1** | idem — < 4,5 : repris en Phase 2 |
| Cobalt blue sur White | 9,38:1 | idem |
| Light lavender sur Light royal blue (background) | 4,95:1 | « Your Result » et paragraphe sur le bas du panneau |
| Light lavender sur Light slate blue (background) | **2,84:1** | idem, haut du panneau — < 4,5 : repris en Phase 2 |
| White sur Dark gray blue | 11,06:1 | « Continue » |

Les contrastes du texte, des composants et de chaque icône sont vérifiés dans l'inventaire de la Phase 2, sur les couleurs mesurées dans les images.

## Typographie

| Élément | Valeur FM |
|---|---|
| Police | Hanken Grotesk (fichier variable + statiques fournis dans `assets/fonts/`), graisses 500, 700, 800 |
| Texte courant | 18 px |

## Images et icônes

4 icônes SVG de catégorie (`icon-reaction`, `icon-memory`, `icon-verbal`, `icon-visual`), favicon ; `data.json` (4 catégories et leurs scores, pour qui veut du JS)

## Contenu (images FM)

Panneau « Your Result » : 76 « of 100 », « Great », « You scored higher than 65% of the people who have taken these tests. » ; « Summary » : Reaction 80 / 100, Memory 92 / 100, Verbal 61 / 100, Visual 73 / 100 ; bouton « Continue ». Image d'états : survol de « Continue » (dégradé du panneau).

## Images de référence

| Fichier | Original | Taille |
|---|---|---|
| `desktop.jpg` | `design/desktop-design.jpg` | 1440 × 1080 |
| `mobile.jpg` | `design/mobile-design.jpg` | 375 × 809 |
| `etats.jpg` | `design/active-states.jpg` | 1440 × 1080 |
| `apercu.jpg` | aperçu du starter | — |
