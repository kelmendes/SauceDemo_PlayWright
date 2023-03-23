export async function append( page, testInfo){
    //await page.screenshot({path: 'screenshot.png', fullPage: true });
    //await testInfo.attach('screenshot.png', { path: 'screenshot.png' });
    // Get a unique place for the screenshot.
    const screenshotPath = testInfo.outputPath(`failure.png`);
    // Add it to the report.
    testInfo.attachments.push({ name: 'screenshot', path: screenshotPath, contentType: 'image/png' });
    // Take the screenshot itself.
    await page.screenshot({ path: screenshotPath, timeout: 5000 });
}