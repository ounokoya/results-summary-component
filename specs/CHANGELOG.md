# Changelog

Format : [Keep a Changelog](https://keepachangelog.com/fr/1.1.0/) · Versions : [SemVer](https://semver.org/lang/fr/).

## [1.0.0] — 2026-11-05

Première version (SDL-FM 1.5.0, remise à niveau du profil, lot 1).

### Added
- Panneau « Your Result » : note 76 sur 100, « Great » et la phrase ; résumé des 4 catégories (Reaction 80, Memory 92, Verbal 61, Visual 72 — Q-C1) ; bouton « Continue » sans destination (Q-B2).
- Disposition mobile (< 768 px) et carte de 736 × 512 centrée dès 768 px (tablette : proposition Q-B3), pied de page en bas sans décaler la carte (ADR-0006).
- États : Continue survolé en dégradé avec ombre, contour de focus de 2 px décalé de 2 px (Q-A3) ; liens de l'attribution soulignés sauf au survol (G3-1).
- Couleurs AA pour les noms de catégorie, « / 100 », « of 100 » et « Your Result » (Q-A1, Q-A2).
- Tests : 20 scénarios de la spec, axe-core, validateur W3C Nu, html-validate et eslint réglés comme FM, fitness functions des ADR-0003 et ADR-0004, comparaisons visuelles (0,74 %, 0,76 %, 2,85 % ; seuil 5 %).

### Fixed
- Fond de page blanc déclaré : en thème sombre, le navigateur ne montre plus son propre fond sous la page mobile (E1, Phase 8).
