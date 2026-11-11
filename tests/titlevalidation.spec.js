import {test,expect} from '@playwright/test'
test('title validation',async({page})=>{
 await page.goto('https://selenium.qabible.in/index.php')
const title=await page.title()
console.log(title)
await expect(page).toHaveTitle(title)
})

test.only('url validation',async({page})=>{
    await page.goto('https://selenium.qabible.in/index.php')
    const url=page.url()
    console.log(url)
    await expect(page).toHaveURL(url)
})