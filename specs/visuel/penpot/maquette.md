# Maquette Penpot — Results summary component

> SDL-FM 1.5.0 Phase 3 (remise à niveau, lot 1). Fichier Penpot : « FM Newbie » (créé par Koya ; nom vérifié avant chaque écriture), page « Results summary ». **En attente de validation (G3).**
> Décisions G2 appliquées : textes de catégorie en couleurs AA (Q-A1), « / 100 », « of 100 » et « Your Result » éclaircis ou foncés (Q-A2), contour de focus 2 px décalé de 2 px (Q-A3), contenu dans le HTML (Q-B1), Continue en `button type="button"` (Q-B2), tablette proposée (Q-B3).

## Rendu des exports

L'exportateur PNG de Penpot n'a pas les polices (M16). Chaque écran est exporté en **SVG**, ses `<style>` sont retirés, puis il est rendu dans Chromium avec **Hanken Grotesk** (fichier variable du starter). Dans le fichier Penpot, les textes sont en Hanken Grotesk (police Google de Penpot).

## Bibliothèque

### Couleurs (groupe « Results summary »)

| Groupe | Nom | Valeur |
|---|---|---|
| FM | Light red, Orangey yellow, Green teal, Cobalt blue | `#FF5757`, `#FFB01F`, `#00BD91`, `#1125D4` |
| FM | Light slate blue, Light royal blue (dégradé du panneau) | `#7857FF` → `#2E2BE9` |
| FM | Violet blue, Persian blue (dégradé du cercle, bas transparent) | `#4E21CA` → `#2421CA` à 0 % |
| FM | White, Pale blue (fond de page), Light lavender, Dark gray blue | `#FFFFFF`, `#EBF1FF`, `#C8C7FF`, `#303B5A` |
| Dérivées G2 (Q-A1) | Reaction, Memory, Verbal (texte) | `#E00000` 4,7:1 · `#9E6700` 4,6:1 · `#008062` 4,7:1 ; Visual garde Cobalt blue |
| Dérivées G2 (Q-A2) | « / 100 » · « Your Result » | `#676D7E` 4,9:1 · `#E6E5FF` 4,6:1 ; « of 100 » en Light lavender plein |

Les dégradés sont posés sur les formes : l'API du plugin les refuse dans la bibliothèque.

### Typographie (Hanken Grotesk, interligne 1,303 sauf mention)

| Usage | Desktop | Mobile |
|---|---|---|
| « Your Result » (h1) | 700, 24 px | 700, 18 px |
| Note « 76 » | 800, 72 px | 800, 56 px |
| « of 100 » | 500, 18 px | 500, 16 px |
| « Great » (h2) | 700, 32 px | 700, 24 px |
| Paragraphe du panneau | 500, 18 px, interligne 1,278, largeur 252 | 500, 16 px, interligne 1,375, largeur 261 |
| « Summary » (h2) | 700, 24 px | 700, 18 px |
| Lignes du résumé | nom 500 et note 700, 18 px | 16 px |
| Continue | 700, 18 px | 700, 18 px |
| Attribution | 500, 11 px | idem |

### Mesures (px)

| Élément | Desktop 1440 × 1080 | Mobile 375 × 809 |
|---|---|---|
| Carte | 736 × 512 à (352, 284), rayon 32, ombre 0 30 60 `#3D6CEC` 15 % | pas de carte : page blanche |
| Panneau de résultat | 368 × 512, rayon 32 | 375 × 356, coins du bas arrondis à 32 |
| Cercle | 200 px à (84, 104) dans le panneau | 140 px à (118, 70) |
| Lignes du résumé | 288 × 56, une tous les 72 à partir de y 97 dans la colonne (x 408) ; icône 20 px à 16 du bord, nom à 48, note alignée à 16 du bord droit ; fond = couleur de la catégorie à 5 %, rayon 12 | 315 × 56 à x 30, à partir de y 426 |
| Continue | 288 × 56 à y 410 dans la colonne, rayon 128 | 315 × 56 à (30, 723) |

Tablette 768 × 1024 (proposition Q-B3) : la carte desktop centrée à (16, 256), fond Pale blue.

## Icônes

Les 4 icônes de catégorie du starter (`icon-reaction.svg`, `icon-memory.svg`, `icon-verbal.svg`, `icon-visual.svg`), décoratives (`aria-hidden`) : le nom de la catégorie est écrit à côté.

## Composants (`composants.png`)

| Composant | États |
|---|---|
| Continue | Normal (Dark gray blue) · Survol (dégradé du panneau + ombre 0 15 30 `#4A3BF5` 25 %, image d'états FM) · Focus clavier (contour 2 px Dark gray blue, décalé de 2 px, Q-A3) |
| Ligne | Reaction · Memory · Verbal · Visual |
| Attribution (pied de page, absente des images FM) | Normal (11 px, liens `#3E52A3` soulignés) · Survol (soulignement retiré) · Focus clavier (contour 2 px Dark gray blue décalé de 2 px) |

Liens de l'attribution : `#3E52A3` (couleur du starter), 6,3:1 sur Pale blue ; texte Dark gray blue, 9,8:1.

## Écrans et seuils visuels (calibrage 1.1.0)

Écart = part des pixels dont un canal diffère de plus de 40 sur 255. Seuil de l'écran pour la Phase 7 = **max(5 %, écart + 1 point)**.

| Écran Penpot | Image FM | Écart | Seuil Phase 7 |
|---|---|---|---|
| Desktop · Résultat | `desktop.jpg` | 0,45 % | 5,0 % |
| Desktop · Continue survolé | `etats.jpg` | 0,47 % | 5,0 % |
| Mobile · Résultat | `mobile.jpg` | 2,37 % | 5,0 % |

Notes :
- Les textes de catégorie, « / 100 », « of 100 » et « Your Result » prennent les couleurs AA (Q-A1, Q-A2) : ce sont les seuls écarts voulus avec l'image.
- Écran sans image FM : **Tablette · Résultat (proposition Q-B3)**.

## Prototype

| Parcours | Enchaînement |
|---|---|
| **Desktop · survol de Continue** | pointeur sur Continue → écran « Continue survolé » ; pointeur qui sort → retour (fondu 200 ms) |

Continue n'a pas de destination (Q-B2) : le prototype ne montre que son survol.

## Fichiers

- `desktop.png`, `desktop-survol.png`, `mobile.png`, `tablette.png` : rendus des 4 écrans.
- `comparaison-*.png` : image FM | maquette | écarts en rouge (moitié de la taille), pour les 3 écrans calibrés.
- `composants.png` : les composants et leurs états (échelle 2).
