# ADR-0004 : Hanken Grotesk, fichier du starter

## Statut
Accepté (2026-11-05) — application de l'ADR-0002 commun (« polices : fichiers fournis par FM, hébergés localement »).

## Contexte
Le starter fournit Hanken Grotesk en fichier variable (`assets/fonts/HankenGrotesk-VariableFont_wght.ttf`, 127 Ko) et en statiques (500, 700, 800). La maquette a été calée avec ce fichier variable (Phase 3) ; les tests visuels comparent des pixels (S18 à S20).

## Options
| Option | Pour | Contre |
|---|---|---|
| **Fichier variable du starter (choisie)** | Le fichier exact du calage de la maquette ; un seul fichier pour les 3 graisses ; aucun appel à un tiers ; ADR-0002 | TTF plus lourd qu'un woff2 |
| 3 fichiers statiques du starter | Même dessin | 3 téléchargements au lieu d'un |
| Fontsource ou Google Fonts | woff2 découpés | Autre version du dessin que celle du calage ; dépendance ou appel à un tiers |

## Décision
- Un `@font-face` « Hanken Grotesk » sur le fichier variable, graisses 100 à 900, `font-display: swap`.
- Graisses utilisées : 500 (texte), 700 (titres, notes, bouton), 800 (note globale).

## Conséquences
- Rendu identique entre la maquette, les tests et le site en ligne.
- Fitness function (test « ADR-0004 » de `tests/statique.spec.js`) : rien n'est chargé hors du domaine ; les graisses 500, 700 et 800 se chargent.
