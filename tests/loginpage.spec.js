import {test,expect} from '@playwright/test'
test('login',async({page})=>{  
 await page.goto('https://www.saucedemo.com/')
 await page.locator('//input[@id="user-name"]').fill('standard_user')
 await page.locator('//input[@placeholder="Password"]').fill('secret_sauce')
 await page.locator('//input[@id="login-button"]').click()
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")
})

test('correct username and incorrect password',async({page})=>{
    await page.goto('https://www.saucedemo.com/')
    await page.locator('#user-name').fill('problem_user')
    await page.locator('#password').fill('2244')
    await page.locator('#login-button').click()
})

test('incorrect usernmae and correct password',async({page})=>{
    await page.goto('https://www.saucedemo.com/')
    await page.locator('#user-name').fill('amzon_user')
    await page.locator('#password').fill('secret_sauce')
    await page.locator('#login-button').click()
})

test('incorrect usernmae and incorrect password',async({page})=>{
    await page.goto('https://www.saucedemo.com/')
    await page.locator('#user-name').fill('flipkart_user')
    await page.locator('#password').fill('12321')
    await page.locator('#login-button').click()
})
    
