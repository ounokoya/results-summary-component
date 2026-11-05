# ADR-0003 : Tokens Penpot → thème Tailwind (`@theme`)

## Statut
Accepté (2026-11-05) — même décision que les challenges précédents.

## Contexte
La bibliothèque Penpot (validée G3, `specs/visuel/penpot/maquette.md`) fixe les 12 couleurs FM, les 5 couleurs dérivées de G2 (Q-A1, Q-A2), la couleur des liens de l'attribution (G3-1), les dégradés, les rayons et les ombres. Décisions communes : ADR-0001, ADR-0002 (`frontmentor/specs/adr/`).

## Décision
- `src/style.css` déclare les tokens dans un seul bloc `@theme` et vide la palette par défaut (`--color-*: initial`).
- Correspondance :

| Penpot | `@theme` |
|---|---|
| Couleurs FM | `--color-light-red`, `--color-orangey-yellow`, `--color-green-teal`, `--color-cobalt-blue`, `--color-light-slate-blue`, `--color-light-royal-blue`, `--color-violet-blue`, `--color-persian-blue`, `--color-white`, `--color-pale-blue`, `--color-light-lavender`, `--color-dark-gray-blue` (valeurs `hsl()` du style-guide ; Persian blue à opacité 0 comme le guide) |
| Dérivées G2 | `--color-reaction-text`, `--color-memory-text`, `--color-verbal-text` (Q-A1), `--color-out-of` (« / 100 ») et `--color-your-result` (Q-A2) |
| Attribution (G3-1) | `--color-link` (`hsl(228, 45%, 44%)`, couleur du starter) |
| Hanken Grotesk | `--font-sans` (chargement : ADR-0004) |
| Rayons | `--radius-card` (32), `--radius-row` (12) ; bouton : `rounded-full` |
| Ombres | `--shadow-card` (0 30 60, `#3D6CEC` 15 %), `--shadow-button` (0 15 30, `#4A3BF5` 25 %) |
| Tailles de texte | une par usage de la maquette (`--text-score` 72/56, `--text-title` 32/24…) |

- Dégradés du panneau, du cercle et du bouton survolé : utilitaires `bg-linear-to-b` avec les couleurs du thème ; fond des lignes : couleur de la catégorie à 5 % (`bg-light-red/5`…).

## Conséquences
- Changer une couleur du design = changer une ligne de `@theme`.
- Fitness function (test « ADR-0003 » de `tests/statique.spec.js`) : aucune couleur (`#…`, `rgb(`, `hsl(`) dans `index.html`, ni dans `src/style.css` hors des valeurs de tokens.
