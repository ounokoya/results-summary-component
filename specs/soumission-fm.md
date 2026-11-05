# Soumission Frontend Mentor

> SDL-FM 1.5.0 Phase 13. Textes préparés pour le formulaire « Submit solution » du challenge. La soumission est publique et faite au nom de Koya : elle n'est envoyée qu'avec son accord, au moment de l'envoi.

## Informations générales

| Champ | Valeur |
|---|---|
| Solution title (70 caractères max) | Results summary with Tailwind v4, WCAG AA colours & Playwright tests (68) |
| Repository URL | https://github.com/ounokoya/results-summary-component |
| Live site URL | https://ounokoya.github.io/results-summary-component/ |
| Tags (5 max, hors HTML/CSS/JS) | `tailwind-css`, `vite`, `accessibility`, `playwright` |
| Visibilité | Public |

Challenge Newbie : +10 points. Pas de crédit de rapport IA ce mois-ci : les vérifications automatiques gratuites suffisent pour viser 0 remarque.

## What are you most proud of, and what would you do differently next time?

I'm most proud of keeping the card exactly centred while still showing the attribution: a three-row grid (`1fr auto 1fr`) puts the card in the middle row and the footer at the bottom of the last one, so neither moves the other, even in a short window. The 30 Playwright tests were written before the code, check positions to 1 px against my Penpot mockup and pass on the live site; screenshots differ from the design JPGs by 0.7–2.9 % of pixels.

Next time, I'd emulate a dark device theme in my tests from the start: on a phone in dark mode, my page had no background of its own and showed the browser's dark one under the summary. A test now catches it.

## What challenges did you encounter, and how did you overcome them?

- **Contrast**: the Reaction, Memory and Verbal names, the "/ 100" and "Your Result" were below 4.5:1. I kept each hue and only changed the lightness (for example Reaction `hsl(0, 100%, 44%)`, 4.7:1); the icons keep the original colours.
- **Design vs. data**: the design shows "Visual 73", the starter's HTML and `data.json` say 72, which matches the overall 76 (the average of the four scores), so the page shows 72.
- **No destination for Continue**: it is a `button type="button"` with hover (the panel's gradient and a blue shadow) and a 2 px focus outline, and nothing happens on click.

## What specific areas of your project would you like help with?

1. The score is read as "76 of 100" by screen readers (one paragraph). Would you give it more context, for example with a visually hidden "Your score:"?
2. The category list is named by the "Summary" heading (`aria-labelledby`). Is naming the list useful, or is the heading enough?
3. I left the `data.json` bonus aside and wrote the four rows in the HTML. Would you have loaded the data with JavaScript for a component like this?
