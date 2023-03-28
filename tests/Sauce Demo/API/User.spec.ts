import { test, expect } from '@playwright/test';

test('[GET] SINGLE USER - SUCCESSFUL', async ({ request }) => {
    // Request
    const _reponse = await request.get(`https://reqres.in/api/users/2`);
    // Expect Results
    expect(_reponse.status()).toBe(200);
    expect(_reponse.ok).toBeTruthy();
    // Write Result in Console&Report
    writeInReport(_reponse);
});

test('[GET] LIST USERS - SUCCESSFUL', async ({ request }) => {
    // Request
    const _reponse = await request.get(`https://reqres.in/api/users?page=2`);
    // Expect Results
    expect(_reponse.status()).toBe(200);
    expect(_reponse.ok).toBeTruthy();
    // Write Result in Console&Report
    writeInReport(_reponse);
});

test('[GET] DELAYED RESPONSE - SUCCESSFUL', async ({ request }) => {
    // Request
    const _reponse = await request.get(`https://reqres.in/api/users?delay=4`);
    // Expect Results
    expect(_reponse.status()).toBe(200);
    expect(_reponse.ok).toBeTruthy();
    // Write Result in Console&Report
    writeInReport(_reponse);

});

test('[GET] SINGLE USER - NOT FOUND', async ({ request }) => {
    // Request
    const _reponse = await request.get(`https://reqres.in/api/users/23`);
    // Expect Results
    expect(_reponse.status()).toBe(404);
    // Write Result in Console&Report
    writeInReport(_reponse);
});


test('[POST] CREATE - SUCCESSFUL', async ({ request }) => {
    // Request
    const _reponse = await request.post(`https://reqres.in/api/users`, {
        data: {
            "name": "ASDASDASD",
            "job": "leader"
        }
    });
    // Expect Results
    expect(_reponse.status()).toBe(201);
    // Write Result in Console&Report
    writeInReport(_reponse);
});

test('[PUT] UPDATE - SUCCESSFUL', async ({ request }) => {
    // Request
    const _reponse = await request.put(`https://reqres.in/api/users/2`, {
        data: {
            "name": "morpheus",
            "job": "zion resident"
        }
    });
    // Expect Results
    expect(_reponse.status()).toBe(200);
    expect(_reponse.ok).toBeTruthy();
    // Write Result in Console&Report
    writeInReport(_reponse);
});

test('[PATCH] UPDATE - SUCCESSFUL', async ({ request }) => {
    // Request
    const _reponse = await request.patch(`https://reqres.in/api/users/2`, {
        data: {
            "name": "morpheus",
            "job": "zion resident"
        }
    });
    // Expect Results
    expect(_reponse.status()).toBe(200);
    expect(_reponse.ok).toBeTruthy();
    // Write Result in Console&Report
    writeInReport(_reponse);
});


test('[PATCH] DELETE - SUCCESSFUL', async ({ request }) => {
    // Request
    const _reponse = await request.delete(`https://reqres.in/api/users/2`, {
        data: {
            "name": "morpheus",
            "job": "zion resident"
        }
    });
    // Expect Results
    expect(_reponse.status()).toBe(204);
    // Write Result in Console&Report
    writeInReport(_reponse);
});




async function writeInReport(_reponse) {
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
