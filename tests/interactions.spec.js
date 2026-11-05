import { test, expect } from '@playwright/test'
import { open, button, link, style } from './helpers.js'

// Spec §5 et §6 — S9 à S13

const DARK = 'rgb(48, 59, 90)'

test.beforeEach(async ({ page }) => {
  await open(page, 1440, 1080)
})

test('S9 — survol de Continue : fond en dégradé, puis retour à Dark gray blue', async ({ page }) => {
  expect(await style(button(page), 'backgroundColor')).toBe(DARK)
  expect(await style(button(page), 'backgroundImage')).toBe('none')

  await button(page).hover()
  await expect.poll(() => style(button(page), 'backgroundImage')).toMatch(/^linear-gradient\(/)

  await page.mouse.move(0, 0)
  await expect.poll(() => style(button(page), 'backgroundImage')).toBe('none')
})

test('S10 — Continue ne mène nulle part : ni navigation ni envoi (Q-B2)', async ({ page }) => {
  const url = page.url()
  const requests = []
  page.on('request', (r) => { if (r.isNavigationRequest() || r.method() !== 'GET') requests.push(`${r.method()} ${r.url()}`) })

  await button(page).click()
  await button(page).focus()
  await page.keyboard.press('Enter')
  await page.waitForTimeout(300)

  expect(page.url()).toBe(url)
  expect(requests).toEqual([])
})

test('S11 — Tab : Continue puis les deux liens, chacun avec un contour de 2 px au moins', async ({ page }) => {
  const seen = []
  for (let i = 0; i < 3; i++) {
    await page.keyboard.press('Tab')
    seen.push(await page.evaluate(() => {
      const el = document.activeElement
      const s = getComputedStyle(el)
      return { name: el.textContent.trim(), outline: s.outlineStyle !== 'none' && parseFloat(s.outlineWidth) >= 2 }
    }))
  }
  expect(seen.map((s) => s.name)).toEqual(['Continue', 'Frontend Mentor', 'Koya Esdras'])
  for (const s of seen) expect.soft(s.outline, `contour sur « ${s.name} »`).toBe(true)
})

test('S12 — liens du pied de page : soulignés, sans soulignement au survol ; bonnes adresses', async ({ page }) => {
  await expect(link(page, 'Frontend Mentor')).toHaveAttribute('href', 'https://www.frontendmentor.io?ref=challenge')
  await expect(link(page, 'Koya Esdras')).toHaveAttribute('href', 'https://www.frontendmentor.io/profile/ounokoya')
  for (const name of ['Frontend Mentor', 'Koya Esdras']) {
    expect(await style(link(page, name), 'textDecorationLine'), name).toBe('underline')
    await link(page, name).hover()
    await expect.poll(() => style(link(page, name), 'textDecorationLine'), { message: `${name} survolé` }).toBe('none')
  }
})

test('S13 — prefers-reduced-motion : aucune transition sur Continue', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await button(page).hover()
  const none = await button(page).evaluate((el) => {
    const s = getComputedStyle(el)
    return s.transitionProperty === 'none' || s.transitionDuration.split(',').every((d) => parseFloat(d) === 0)
  })
  expect(none).toBe(true)
})
