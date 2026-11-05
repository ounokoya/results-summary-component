import { test, expect } from '@playwright/test'
import { open, panel, summary, rows, row, style, cssColor } from './helpers.js'

// Spec §2 et §3 — S6 à S8

const CATEGORIES = [['Reaction', '80'], ['Memory', '92'], ['Verbal', '61'], ['Visual', '72']]

test.beforeEach(async ({ page }) => {
  await open(page, 1440, 1080)
})

test('S6 — panneau : « Your Result », « 76 of 100 », « Great » et la phrase', async ({ page }) => {
  const p = panel(page)
  await expect(p.getByRole('heading', { level: 1, name: 'Your Result' })).toBeVisible()
  // A2 : la note se lit dans l'ordre, dans un même paragraphe
  await expect(p.getByText(/^\s*76\s+of 100\s*$/)).toBeVisible()
  await expect(p.getByRole('heading', { level: 2, name: 'Great' })).toBeVisible()
  await expect(p.getByText('You scored higher than 65% of the people who have taken these tests.', { exact: true })).toBeVisible()
  await expect(page.getByRole('heading', { level: 1 })).toHaveCount(1)
})

test('S7 — résumé : 4 catégories dans l\'ordre, avec leur note sur 100', async ({ page }) => {
  await expect(page.getByRole('heading', { level: 2, name: 'Summary' })).toBeVisible()
  await expect(rows(page)).toHaveCount(4)
  for (const [i, [name, score]] of CATEGORIES.entries()) {
    await expect(rows(page).nth(i)).toHaveText(new RegExp(`^\\s*${name}\\s+${score}\\s*/\\s*100\\s*$`))
  }
  // A3 : icônes décoratives, absentes de l'arbre d'accessibilité
  await expect(summary(page).getByRole('img')).toHaveCount(0)
  expect(await summary(page).locator('img, svg').count()).toBe(4)
})

test('S8 — couleurs AA de G2 : noms de catégorie, « / 100 », « Your Result »', async ({ page }) => {
  const expected = { Reaction: 'hsl(0, 100%, 44%)', Memory: 'hsl(39, 100%, 31%)', Verbal: 'hsl(166, 100%, 25%)' }
  for (const [name, color] of Object.entries(expected)) {
    expect(await style(row(page, name).getByText(name, { exact: true }), 'color'), name).toBe(await cssColor(page, color))
  }
  for (const [name] of CATEGORIES) {
    expect(await style(row(page, name).getByText('/ 100', { exact: true }), 'color'), `${name} « / 100 »`).toBe(await cssColor(page, 'hsl(224, 10%, 45%)'))
  }
  expect(await style(panel(page).getByRole('heading', { level: 1 }), 'color')).toBe(await cssColor(page, 'hsl(241, 100%, 95%)'))
})
