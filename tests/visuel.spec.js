import { test, expect } from '@playwright/test'
import { open, button, diffRatio } from './helpers.js'

// Spec §7 — S18 à S20 : seuils calibrés en Phase 3 (specs/visuel/penpot/maquette.md)

const screens = [
  { id: 'S18', ref: 'desktop.jpg', w: 1440, h: 1080, max: 0.05 },
  { id: 'S19', ref: 'etats.jpg', w: 1440, h: 1080, max: 0.05, hover: true },
  { id: 'S20', ref: 'mobile.jpg', w: 375, h: 809, max: 0.05 },
]

for (const { id, ref, w, h, max, hover } of screens) {
  test(`${id} — ${ref} (≤ ${(max * 100).toFixed(1)} %)`, async ({ page }, testInfo) => {
    await page.emulateMedia({ reducedMotion: 'reduce' })
    await open(page, w, h)
    await expect(button(page)).toBeVisible()
    if (hover) await button(page).hover()
    else await page.mouse.move(0, 0) // aucun survol pendant la capture

    const shot = await page.screenshot({ caret: 'hide', animations: 'disabled' })
    await testInfo.attach(ref.replace('.jpg', '.png'), { body: shot, contentType: 'image/png' })
    const ratio = diffRatio(shot, ref)
    testInfo.annotations.push({ type: 'pixels différents', description: `${(ratio * 100).toFixed(2)} %` })
    expect(ratio).toBeLessThanOrEqual(max)
  })
}
