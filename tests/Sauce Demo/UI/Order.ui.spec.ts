import { test, expect } from '@playwright/test';

test('Finalizando ordem com sucesso', async ({ page }, testInfo) => {
    await page.goto('https://www.saucedemo.com/');
    
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');

    await page.locator('#login-button').click();

    await page.locator('(//*[contains(@class, \'btn_inventory\')])[1]').click();
    await page.locator('(//*[contains(@class, \'btn_inventory\')])[2]').click();

    await page.locator('span.shopping_cart_badge').click();
    // Your Cart
    const content = await page.innerText("span.shopping_cart_badge")
    expect(content).toEqual("2");

    await page.getByRole("button",{name: 'checkout'}).click();

    // Checkout: Your Information
    await page.getByPlaceholder('First Name').fill('standard_user');
    await page.getByPlaceholder('Last Name').fill('standard_user');
    await page.getByPlaceholder('Zip/Postal Code').fill('55550000');

    await page.getByRole("button",{name: 'continue'}).click();

    // Checkout: Overview
    await page.getByRole("button",{name: 'finish'}).click();
    
    // Checkout: Complete!
    await page.getByRole("button",{name: 'back-to-products'});

});