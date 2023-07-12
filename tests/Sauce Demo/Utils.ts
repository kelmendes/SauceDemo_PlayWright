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

export async function writeInReport(_reponse) {
    console.info("Response Head: \n")
    console.log(_reponse);
    console.info("\n Response Body: \n")
    try {  
        console.log(await _reponse.json());
    }
    catch (e: unknown) { 
        console.info(" null. \n")
    }

    

}