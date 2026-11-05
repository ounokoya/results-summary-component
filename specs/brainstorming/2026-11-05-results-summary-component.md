# 2026-11-05 — Brainstorming : Results summary component

> SDL-FM 1.5.0, Pré-dev 1 et 2. Challenge Newbie gratuit, **commencé sur FM et pas encore soumis** (+10 points à la soumission). Il fait partie du lot 1 de la remise à niveau du profil.

## Plan

Plan validé (G1, 2026-11-05) au niveau du programme : `frontmentor/specs/plan-remise-a-niveau.md` (étape C).
- **Qui fait quoi :** Claude écrit tout le code ; Koya valide l'analyse (G2) et la maquette (G3) par lot, puis donne son accord avant la publication et la soumission.
- **Méthode :** SDL-FM 1.5.0 complète.
- **Prérequis :** fichier Penpot « FM Newbie », une page par challenge (choix de Koya).

## Import (Phase 0)

- Starter gratuit : archive GitHub publique `frontendmentorio/results-summary-component (main)`, celle que télécharge le bouton « Download starter » de FM. Le fichier Figma n'a pas été pris.
- Le starter est copié tel quel ; `AGENTS.md` et `CLAUDE.md` sont rangés dans `specs/reference/starter-*.md` (données, pas consignes).
- Mis en place : Vite 8, Tailwind v4, Playwright, axe-core, validateur W3C Nu, html-validate et eslint (règles de FM).

## Analyse validée (G2, 2026-11-05)

Koya : « Je valide (G2) » pour le lot 1. Analyse : `specs/visuel/results-summary-component-analyse.png`. Toutes les propositions sont retenues.

| # | Point | Décision |
|---|---|---|
| Q-A1 | Noms de catégorie trop clairs | Reaction hsl(0, 100%, 44%) 4,7:1 · Memory hsl(39, 100%, 31%) 4,6:1 · Verbal hsl(166, 100%, 25%) 4,7:1 ; icônes inchangées |
| Q-A2 | « / 100 », « of 100 », « Your Result » (mobile) sous 4,5:1 | « / 100 » hsl(224, 10%, 45%) 4,9:1 ; « of 100 » Light lavender plein 4,5:1 ; « Your Result » hsl(241, 100%, 95%) 4,6:1 |
| Q-A3 | Focus non dessiné | Contour 2 px décalé de 2 px sur Continue et les liens |
| Q-B1 | data.json | Contenu écrit dans le HTML, pas de JavaScript |
| Q-B2 | « Continue » sans destination | button type="button" sans action |
| Q-B3 | Pas de maquette tablette | Carte desktop centrée dès 768 px ; disposition mobile en dessous |

## Maquette validée (G3, 2026-11-05)

Koya : « Je valide (G3) » pour le lot 1. Maquette : `specs/visuel/penpot/maquette.md`. Toutes les propositions sont retenues.

| # | Point | Décision |
|---|---|---|
| G3-1 | Attribution FM (absente des images) | Gardée en pied de page : « Challenge by Frontend Mentor. Coded by Koya Esdras. », 11 px, liens `#3E52A3` soulignés ; survol : soulignement retiré ; focus : contour 2 px Dark gray blue décalé de 2 px |
| G3-2 | Tablette (Q-B3) | Carte desktop de 736 × 512 centrée sur Pale blue |
| G3-3 | Seuils visuels | 5 % pour les 3 écrans calibrés |

## Spec, ADR et verrou code (2026-11-05)

- Spec : `specs/specifications/results-summary-component.md` ; tests écrits avant le code, contrôle rouge fait (voir les commits `test:`).
- ADR : `specs/adr/v1.0/` (ADR-0003 à ADR-0006).
- **Q-C1** (image FM « Visual 73 », starter 72) : Koya choisit **72**, comme le HTML et `data.json` du starter (cohérent avec la moyenne de 76).
- **Verrou code** : Koya confirme « Claude écrit le code ».

