import { test, expect } from '@playwright/test';

test('Login Com Sucesso', async ({ page }, testInfo) => {
    await page.goto('https://www.saucedemo.com/');
    
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');

    await page.locator('#login-button').click();
    
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Swag Labs/);
});


test('Login Inválido', async ({ page }, testInfo) => {
    await page.goto('https://www.saucedemo.com/');

    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('standard_user');
    
    await page.locator('#login-button').click();
    
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Swag Labs/);
});