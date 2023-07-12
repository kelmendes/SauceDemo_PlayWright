import { test, expect } from '@playwright/test';
import { appendToReport } from '../Utils';

test('Login Com Sucesso', async ({ page }, testInfo) => {
    await page.goto('https://www.saucedemo.com/');
    
    await page.getByPlaceholder('Username').fill('standard_user');
    await appendToReport(page, testInfo);

    await page.getByPlaceholder('Password').fill('secret_sauce');
    await appendToReport(page, testInfo);

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Swag Labs/);
});


test('Login Inválido', async ({ page }, testInfo) => {
    await page.goto('https://www.saucedemo.com/');

    await page.getByPlaceholder('Username').fill('standard_user');
    await appendToReport(page, testInfo);

    await page.getByPlaceholder('Password').fill('standard_user');
    await appendToReport(page, testInfo);
    
    await page.locator('#login-button').click();
    await appendToReport(page, testInfo);
    
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Swag Labs/);

});