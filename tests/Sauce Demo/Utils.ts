export async function appendToReport( page, testInfo){
    await testInfo.attach("screenshot_"+Date.now(), {
        body: await page.screenshot(),
        contentType: "image/png",
    })
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