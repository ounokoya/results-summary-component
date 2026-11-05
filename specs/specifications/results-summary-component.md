# Spec — Results summary component

> SDL-FM 1.5.0 Phase 4 (remise à niveau, lot 1). Sources : analyse validée (G2) `specs/visuel/results-summary-component-analyse.*`, maquette validée (G3) `specs/visuel/penpot/maquette.md`, décisions dans `specs/brainstorming/2026-11-05-results-summary-component.md`.
> Cette spec dit **quoi** et **pourquoi**, jamais **comment**.

## 1. Objectif

Un composant qui résume le résultat d'un test : une note globale sur 100 et son appréciation, puis le détail des 4 catégories (Reaction, Memory, Verbal, Visual) avec leur note. Le bouton « Continue » n'a pas de destination dans le challenge (Q-B2). Le contenu est écrit dans la page, sans JavaScript (Q-B1).

## 2. Composants et contenu

| Composant | Contenu | Élément HTML attendu |
|---|---|---|
| Panneau de résultat | « Your Result » ; note « 76 » et « of 100 » ; « Great » ; « You scored higher than 65% of the people who have taken these tests. » | `section` ; `h1` ; la note et « of 100 » se lisent ensemble (« 76 of 100 ») ; `h2` ; `p` |
| Résumé | titre « Summary » ; 4 lignes : icône, nom, note « N / 100 » | `section` ; `h2` ; `ul` nommée par le titre, un `li` par catégorie ; icônes décoratives |
| Catégories | Reaction 80, Memory 92, Verbal 61, Visual **72** (Q-C1 : valeur du HTML et de `data.json`, cohérente avec la moyenne de 76 ; l'image FM montre 73) | — |
| Continue | « Continue » | `button type="button"` (Q-B2) |
| Pied de page (G3-1) | « Challenge by Frontend Mentor. Coded by Koya Esdras. » ; liens vers `https://www.frontendmentor.io?ref=challenge` et `https://www.frontendmentor.io/profile/ounokoya` | `footer` |

La page a pour titre « Frontend Mentor | Results summary component » et la langue `en`.

## 3. Tokens

Couleurs, typographie et mesures : `specs/reference/tokens.md` (FM) et la bibliothèque Penpot (`specs/visuel/penpot/maquette.md`). Valeurs dérivées retenues (G2) :

| Token | Valeur | Usage |
|---|---|---|
| Reaction texte | `hsl(0, 100%, 44%)` (`#E00000`) | nom « Reaction » (Q-A1) |
| Memory texte | `hsl(39, 100%, 31%)` (`#9E6700`) | nom « Memory » (Q-A1) |
| Verbal texte | `hsl(166, 100%, 25%)` (`#008062`) | nom « Verbal » (Q-A1) |
| « / 100 » | `hsl(224, 10%, 45%)` (`#676D7E`) | fin des notes du résumé (Q-A2) |
| « Your Result » | `hsl(241, 100%, 95%)` (`#E6E5FF`) | titre du panneau (Q-A2) |
| Lien de l'attribution | `hsl(228, 45%, 44%)` (`#3E52A3`) | couleur du starter (G3-1) |

Fonds des lignes : couleur de la catégorie à 5 %. Icônes et nom « Visual » gardent les couleurs FM.

## 4. Responsive

| Largeur | Disposition |
|---|---|
| < 768 px (mobile) | Pas de carte, page blanche. Panneau pleine largeur, 356 px de haut, coins du bas arrondis à 32 ; cercle de 140 px centré. Résumé dessous, à 30 px des bords : 4 lignes de 56 px tous les 72 px, puis Continue. |
| 768 – 1023 px (tablette, Q-B3) | La carte desktop (736 × 512) centrée dans la fenêtre, fond Pale blue. |
| ≥ 1024 px (desktop) | Carte de 736 × 512 centrée dans la fenêtre, rayon 32, ombre ; fond Pale blue. Panneau de 368 px à gauche ; résumé à droite (colonne de 288 px à 40 px du panneau). |

Positions de la maquette, à 1 px près :

| Élément | 1440 × 1080 | 375 × 809 | 768 × 1024 |
|---|---|---|---|
| Carte | (352, 284) 736 × 512 | — | (16, 256) 736 × 512 |
| Panneau | (352, 284) 368 × 512 | (0, 0) 375 × 356 | (16, 256) 368 × 512 |
| Lignes du résumé | x 760, y 381, 453, 525, 597 ; 288 × 56 | x 30, y 426, 498, 570, 642 ; 315 × 56 | — |
| Continue | (760, 694) 288 × 56 | (30, 723) 315 × 56 | — |

Le pied de page ne déplace aucun de ces éléments : centré en bas de la fenêtre dès 768 px, sous la maquette en mobile (sous y = 809).

La page reste utilisable de 320 px aux grands écrans, sans défilement horizontal.

## 5. États et interactions

| Élément | Normal | Survol | Focus clavier |
|---|---|---|---|
| Continue | fond Dark gray blue, texte blanc | fond en dégradé du panneau (Light slate blue → Light royal blue, de haut en bas), ombre bleue (image d'états FM) | contour 2 px Dark gray blue, décalé de 2 px (Q-A3) |
| Liens du pied de page | soulignés, `#3E52A3` | soulignement retiré | contour 2 px Dark gray blue, décalé de 2 px |

| Événement | Effet |
|---|---|
| Clic ou Entrée sur Continue | rien : pas de navigation, pas d'envoi (Q-B2) |

Pas d'animation exigée ; toute transition est supprimée si `prefers-reduced-motion: reduce`.

## 6. Accessibilité

### Contrats

| # | Contrat |
|---|---|
| A1 | Titres dans l'ordre : `h1` « Your Result », puis `h2` « Great » et « Summary ». |
| A2 | La note se lit « 76 of 100 » (dans cet ordre, dans un même paragraphe). |
| A3 | Les icônes de catégorie sont décoratives : ignorées par les lecteurs d'écran ; le nom est écrit. |
| A4 | Contraste AA (4,5:1) pour tous les textes, avec les couleurs dérivées de G2 (§3). |
| A5 | Focus visible sur Continue et sur les liens : contour de 2 px au moins (Q-A3). |
| A6 | Ordre clavier : Continue, puis les deux liens du pied de page. |
| A7 | Pas de transition si `prefers-reduced-motion: reduce`. |

### Noms accessibles utilisés par les tests

| Élément | Rôle | Nom |
|---|---|---|
| Carte (le composant entier) | main | — (en desktop et tablette, il a la taille et la place de la carte : S1, S3) |
| Panneau de résultat | region | « Your Result » |
| Résumé | region | « Summary » |
| Titre du panneau | heading (niveau 1) | « Your Result » |
| Appréciation | heading (niveau 2) | « Great » |
| Titre du résumé | heading (niveau 2) | « Summary » |
| Note globale | paragraphe | texte « 76 of 100 » |
| Liste du résumé | list | « Summary » ; un `listitem` par catégorie, qui contient le nom et « N / 100 » |
| Bouton | button | « Continue » |
| Pied de page | contentinfo | liens « Frontend Mentor » et « Koya Esdras » |

## 7. Critères d'acceptation

```
Mise en page (positions de la maquette, à 1 px près)
S1  Given 1440 × 1080  Then carte (352, 284) 736 × 512 ; panneau 368 × 512 à sa gauche ;
                       lignes 288 × 56 à x 760, y 381, 453, 525, 597 ; Continue (760, 694) 288 × 56
S2  Given 375 × 809    Then panneau (0, 0) 375 × 356, pas de carte ; lignes 315 × 56 à x 30, y 426, 498, 570, 642 ;
                       Continue (30, 723) 315 × 56 ; le pied de page commence sous y = 809
S3  Given 768 × 1024   Then carte (16, 256) 736 × 512
S4  Given 320, 767, 768, 1023, 1024, 1440 px  Then pas de défilement horizontal
S5  Given 1440 × 1080  Then le pied de page est sous la carte, centré, dans la fenêtre

Contenu
S6  Given la page  Then h1 « Your Result », « 76 of 100 », h2 « Great », la phrase « You scored higher than 65% … tests. »
S7  Given la liste « Summary »  Then 4 éléments dans l'ordre : Reaction 80 / 100, Memory 92 / 100, Verbal 61 / 100, Visual 72 / 100
S8  Given la page  Then les noms Reaction, Memory, Verbal s'affichent en #E00000, #9E6700, #008062 ; « / 100 » en #676D7E ;
                   « Your Result » en #E6E5FF (couleurs AA de G2)

Interactions
S9  Given Continue  When je le survole  Then son fond devient un dégradé ; When je le quitte  Then il revient à Dark gray blue
S10 Given Continue  When je clique dessus ou appuie sur Entrée  Then l'adresse ne change pas et rien n'est envoyé
S11 Given la page  When j'appuie sur Tab trois fois  Then Continue, « Frontend Mentor », « Koya Esdras » reçoivent le focus,
                   chacun avec un contour de 2 px au moins
S12 Given un lien du pied de page  When je le survole  Then son soulignement disparaît
S13 Given prefers-reduced-motion: reduce  When je survole Continue  Then aucune transition n'est jouée

Accessibilité et règles FM
S14 Given 375 et 1440 px  Then axe-core : aucune violation sérieuse ou critique
S15 Given le HTML servi  Then validateur W3C Nu : aucune erreur
S16 Given le HTML servi  Then html-validate au réglage de FM : aucune erreur
S17 Given le JavaScript du dépôt (code, tests, configuration)  Then eslint au réglage de FM : aucune erreur

Visuel (seuils calibrés en Phase 3)
S18 1440 × 1080 vs desktop.jpg ≤ 5,0 %
S19 1440 × 1080, Continue survolé vs etats.jpg ≤ 5,0 %
S20 375 × 809 vs mobile.jpg ≤ 5,0 %
```
