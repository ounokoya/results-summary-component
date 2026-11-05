# ADR-0006 : Carte centrée dans la fenêtre, pied de page en bas sans la décaler

## Statut
Accepté (2026-11-05)

## Contexte
Dès 768 px, la carte est centrée dans la fenêtre (S1 : (352, 284) à 1440 × 1080 ; S3 : (16, 256) à 768 × 1024). L'attribution (G3-1), absente des images FM, doit tenir sous la carte sans la déplacer (S5). En mobile, la page défile : l'attribution vient après le contenu, sous la maquette (S2).

## Options
| Option | Pour | Contre |
|---|---|---|
| **Grille de 3 rangées `1fr auto 1fr` sur toute la hauteur (choisie)** | La carte est exactement au centre ; le pied de page se place en bas de la 3e rangée ; si la fenêtre est trop basse, la page s'allonge au lieu de superposer | — |
| Pied de page en position absolue en bas de la fenêtre | Simple | Passe sur la carte dans une fenêtre basse |
| Pied de page dans le flux, sous la carte | Simple | Décale la carte de la moitié de sa hauteur |

## Décision
- Dès 768 px : `body` en grille `grid-rows-[1fr_auto_1fr]` de hauteur minimale `100dvh`, `main` dans la 2e rangée, `footer` en bas de la 3e.
- En mobile : un flux simple ; le pied de page suit Continue, après la marge du bas de la maquette (30 px).

## Conséquences
- Positions S1, S3 et S5 tenues ensemble ; rien ne se superpose quelle que soit la hauteur de la fenêtre.
