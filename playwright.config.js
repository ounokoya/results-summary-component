import { defineConfig, devices } from '@playwright/test'

// Tests dérivés de la spec — ADR-0002 commun
// BASE_URL=https://ounokoya.github.io/results-summary-component/ npm test : vérifie le site en ligne
const LOCAL = 'http://localhost:4185/results-summary-component/'

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  reporter: [['list']],
  use: {
    baseURL: process.env.BASE_URL || LOCAL,
    ...devices['Desktop Chrome'],
  },
  webServer: process.env.BASE_URL ? undefined : {
    command: 'npm run build && npm run preview -- --port 4185 --strictPort',
    url: LOCAL,
    reuseExistingServer: !process.env.CI,
  },
})
