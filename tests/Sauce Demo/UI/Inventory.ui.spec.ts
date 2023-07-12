import { test, expect } from '@playwright/test';
import { appendToReport } from '../Utils';

test('Adicionar Item ao Carrinho com Sucesso', async ({ page }, testInfo) => {
    await page.goto('https://www.saucedemo.com/');
    await appendToReport(page, testInfo);
    
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');

    await page.locator('#login-button').click();
    await appendToReport(page, testInfo);

    await page.locator('(//*[contains(@class, \'btn_inventory\')])[1]').click();
    await page.locator('(//*[contains(@class, \'btn_inventory\')])[2]').click();
    await appendToReport(page, testInfo);

    await page.locator('span.shopping_cart_badge').click();
    
    const content = await page.innerText("span.shopping_cart_badge")
    await appendToReport(page, testInfo);
    expect(content).toEqual("2");
});