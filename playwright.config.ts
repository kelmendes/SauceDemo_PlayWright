import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    testDir: './tests',
    timeout: 30 * 1000,
    expect: {
        timeout: 5000
    },
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    workers: process.env.CI ? 2 : undefined,
    reporter: [
        ['line'],
        ['junit', { outputFile: 'output/junit/result.xml' }],
        ['json', {  outputFile: 'output/test-results.json' }],
        ['html', { outputFolder: 'output/playwright-report', open: 'never'} ],
        ['allure-playwright', {outputFolder: 'output/allure-results'}],
        ['monocart-reporter', {  
            name: "My Test Report",
            outputFile: './output/monocart/report.html'
        }]
    ],
    use: {
        actionTimeout: 0,
        trace: 'on-first-retry',
        screenshot: 'on',
    },

    projects: [
        {
            name : 'BackEnd',
            testMatch: /.*.api.spec.ts/,
            retries: 0,
        },
        {
            name: 'EndToEnd',
            testMatch: /.*.ui.spec.ts/,
            use: { ...devices['Desktop Chrome'] },
        }

       
    ],
});
