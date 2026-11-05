import { test, expect } from '@playwright/test'
import { open, card, panel, rows, button, footer, box, near, style, cssColor } from './helpers.js'

// Spec §4 — S1 à S5 (positions de la maquette Penpot, à 1 px près)

const ROWS_Y = { desktop: [381, 453, 525, 597], mobile: [426, 498, 570, 642] }

test('S1 — 1440 × 1080 : carte centrée, panneau à gauche, résumé et Continue à droite', async ({ page }) => {
  await open(page, 1440, 1080)

  near(await box(card(page)), { x: 352, y: 284, width: 736, height: 512 }, 'carte')
  near(await box(panel(page)), { x: 352, y: 284, width: 368, height: 512 }, 'panneau')
  await expect(rows(page)).toHaveCount(4)
  for (const [i, y] of ROWS_Y.desktop.entries()) near(await box(rows(page).nth(i)), { x: 760, y, width: 288, height: 56 }, `ligne ${i + 1}`)
  near(await box(button(page)), { x: 760, y: 694, width: 288, height: 56 }, 'Continue')
})

test('S2 — 375 × 809 : panneau pleine largeur, pas de carte, pied de page sous la maquette', async ({ page }) => {
  await open(page, 375, 809)

  near(await box(panel(page)), { x: 0, y: 0, width: 375, height: 356 }, 'panneau')
  expect(await style(card(page), 'boxShadow')).toBe('none')
  await expect(rows(page)).toHaveCount(4)
  for (const [i, y] of ROWS_Y.mobile.entries()) near(await box(rows(page).nth(i)), { x: 30, y, width: 315, height: 56 }, `ligne ${i + 1}`)
  near(await box(button(page)), { x: 30, y: 723, width: 315, height: 56 }, 'Continue')
  expect((await box(footer(page))).y).toBeGreaterThanOrEqual(809)
})

test('S3 — 768 × 1024 : la carte desktop centrée (proposition Q-B3)', async ({ page }) => {
  await open(page, 768, 1024)

  near(await box(card(page)), { x: 16, y: 256, width: 736, height: 512 }, 'carte')
  near(await box(panel(page)), { x: 16, y: 256, width: 368, height: 512 }, 'panneau')
})

for (const width of [320, 767, 768, 1023, 1024, 1440]) {
  test(`S4 — ${width} px : pas de défilement horizontal`, async ({ page }) => {
    await open(page, width, 900)
    // présence d'abord : une page vide n'a jamais de défilement
    await expect(button(page)).toBeVisible()
    expect(await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth)).toBe(0)
  })
}

test('S5 — 1440 × 1080 : pied de page centré sous la carte, dans la fenêtre', async ({ page }) => {
  await open(page, 1440, 1080)
  // boîte sans arrondi : 1031,5 + 48,5 deviendrait 1032 + 49
  const f = await footer(page).boundingBox()
  const text = await footer(page).evaluate((el) => {
    const r = document.createRange(); r.selectNodeContents(el); const b = r.getBoundingClientRect()
    return { left: b.left, right: b.right }
  })

  expect(f.y).toBeGreaterThanOrEqual(284 + 512)
  expect(f.y + f.height).toBeLessThanOrEqual(1080)
  expect(Math.abs((text.left + text.right) / 2 - 720)).toBeLessThanOrEqual(1)
})

// Phase 8, écart E1 : sans fond déclaré, un navigateur en thème sombre peut montrer son propre fond sous la page
test('E1 — 375 px : fond de page blanc déclaré, même si l\'appareil est en thème sombre', async ({ page }) => {
  await page.emulateMedia({ colorScheme: 'dark' })
  await open(page, 375, 800)
  const background = await page.evaluate(() => getComputedStyle(document.body).backgroundColor)
  expect(background).toBe(await cssColor(page, 'hsl(0, 0%, 100%)'))
})
