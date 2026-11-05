# 2026-11-05 — Rapport d'exécution : Results summary component

> SDL-FM 1.5.0, Phases 7 et 8. Tests sur le build de production (`vite build` + `vite preview`) ; parcours réel dans le navigateur intégré (configuration `rs-preview`, `http://localhost:4195/results-summary-component/`), page affichée (`document.visibilityState` = `visible`).

## 1. Tests automatiques (Phase 7)

`npm test` : **30 réussis sur 30** (23 s).

| Groupe | Scénarios | Résultat |
|---|---|---|
| Mise en page | S1 à S5 (1440, 375, 768 ; 320 à 1440 sans défilement horizontal ; pied de page) ; E1 (fond déclaré) | ✅ 11 / 11 |
| Contenu | S6 à S8 (panneau, 4 catégories, couleurs AA de G2) | ✅ 3 / 3 |
| Interactions | S9 à S13 (survol de Continue, Continue sans destination, ordre et contour au clavier, liens, mouvements réduits) | ✅ 5 / 5 |
| Accessibilité | S14 : axe-core à 375 et 1440 px, aucune violation sérieuse ou critique | ✅ 2 / 2 |
| HTML, JavaScript, règles FM | S15 (W3C Nu), S16 (html-validate au réglage de FM), S17 (eslint), longueurs en rem ; fitness ADR-0003 et ADR-0004 | ✅ 6 / 6 |
| Visuel | S18 à S20 | ✅ 3 / 3 |

### Comparaison visuelle

| Écran | Image FM | Pixels différents | Seuil | Penpot (Phase 3) |
|---|---|---|---|---|
| Desktop 1440 × 1080 | `desktop.jpg` | 0,74 % | 5,0 % | 0,45 % |
| Desktop, Continue survolé | `etats.jpg` | 0,76 % | 5,0 % | 0,47 % |
| Mobile 375 × 809 | `mobile.jpg` | 2,85 % | 5,0 % | 2,37 % |

Contrôle rouge fait avant le code (Phase 4) : 24 échecs pour la bonne raison sur le starter, 2 tests de garde (W3C, eslint) ; fitness functions : 2 échecs attendus.

## 2. Parcours réel (Phase 8)

| Étape | 375 px | 768 px | 1440 px |
|---|---|---|---|
| Disposition | ✅ panneau (0, 0) 375 × 356, Continue (30, 723), pied de page sous y = 809 | ✅ carte (16, 256) 736 × 512 | ✅ carte (352, 284) 736 × 512 |
| Police, icônes | ✅ Hanken Grotesk chargée ; 4 icônes affichées | — | ✅ |
| Survol de Continue | — | — | ✅ dégradé du panneau et ombre bleue |
| Clavier | — | — | ✅ Tab : Continue, Frontend Mentor, Koya Esdras, contour 2 px Dark gray blue décalé de 2 px ; Entrée sur Continue : rien ne se passe (Q-B2) |
| 320 px | ✅ pas de défilement horizontal | — | — |

Comparé au prototype Penpot (« Desktop · survol de Continue ») : même survol, sans transition.

## 3. Écarts relevés et suites

| # | Écart | Suite |
|---|---|---|
| E1 | En mobile, dans le navigateur intégré en thème sombre, le fond sous le panneau était noir : la page ne déclarait aucun fond et le navigateur montrait le sien ; « Summary » devenait illisible — **invisible aux tests**, qui tournent en thème clair | Corrigé : fond blanc déclaré sur `body` ; test E1 (thème sombre émulé), rouge avant le correctif |

Constats de la construction (Phase 6), sans écart restant :
- Chromium sous Linux lisse le texte en LCD (franges colorées) : les comparaisons visuelles tournent avec `--disable-lcd-text`, comme les images FM et les rendus de la maquette, lissés en gris.
- S5 : la boîte du pied de page est lue sans arrondi (1031,5 + 48,5 = 1080, mais 1032 + 49 = 1081).

## 4. En ligne (Phase 12)

`BASE_URL=https://ounokoya.github.io/results-summary-component/ npx playwright test --workers=2` : **30 réussis sur 30**, sur la v1.0.0 déployée depuis la branche `gh-pages` (dépôt public créé avec l'accord de Koya).

## 5. Verdict

Conforme à la spec et à la maquette validée (G3). Prêt pour la Phase 9 (README).
