# ADR-0005 : Page statique, sans JavaScript d'interface

## Statut
Accepté (2026-11-05) — décision G2 (Q-B1, Q-B2).

## Contexte
Le starter fournit un `data.json` (les 4 catégories et leurs notes) pour qui veut générer les lignes en JavaScript. Le contenu ne change pas et « Continue » n'a pas de destination (Q-B2).

## Options
| Option | Pour | Contre |
|---|---|---|
| **Contenu écrit dans le HTML (choisie, Q-B1)** | Affiché sans attendre de script ; lisible par les lecteurs d'écran et les validateurs tel quel ; rien à tester côté données | `data.json` inutilisé |
| Lignes générées depuis `data.json` | Montre un chargement de données | Une requête et un script pour 4 lignes fixes ; HTML servi vide pour les vérifications automatiques de FM |

## Décision
- Les 4 lignes sont écrites dans `index.html` ; `src/main.js` n'importe que la feuille de style.
- Icônes de catégorie : `img` des fichiers du starter, `alt=""` (décoratives, A3).
- « Continue » : `button type="button"`, sans gestionnaire.
- Note « Visual » : 72, la valeur du HTML et de `data.json` du starter (Q-C1, voir la spec).

## Conséquences
- Aucune erreur JavaScript possible à l'exécution : le seul script de la page importe la feuille de style.
- `data.json` reste dans le dépôt (fichier du starter), non servi par la page.
