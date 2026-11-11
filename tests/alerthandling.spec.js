import {test,expect} from '@playwright/test'
test('javascript simple alert',async({page})=>{
 await page.goto('https://selenium.qabible.in/javascript-alert.php')
 page.on('dialog',async dialog=>{
    expect(dialog.message()).toBe('I am a Javascript alert box!')
    console.log(dialog.message())
    console.log(dialog.type())
    await dialog.accept()
 })
const onclick=page.locator('//button[@onclick="jsAlert()"]')
await onclick.click()
})

test('javascript confirm alert',async({page})=>{
 await page.goto('https://selenium.qabible.in/javascript-alert.php')
 page.on('dialog',async dialog=>{
    expect(dialog.message()).toBe('Press a button!')
    console.log(dialog.message())
    console.log(dialog.type())
    await dialog.accept()
    //await dialog.dismiss()
 })
const onclick1=page.locator('//button[@onclick="jsConfirm()"]')
await onclick1.click()
 })

 test.only('javascript prompt alert',async({page})=>{
 await page.goto('https://selenium.qabible.in/javascript-alert.php')
 page.on('dialog',async dialog=>{
 expect(dialog.message()).toBe('Please enter your name')
 console.log(dialog.message())
 console.log(dialog.type())
 await dialog.accept("alby")
 //await dialog.dismiss()
 })
const onclick2=page.locator('//button[@onclick="jsPrompt()"]')
await onclick2.click()
})

/*on()-on is used to listen for events.when an alerts appears,run this function
1.dialog(event)-used to detect on listen when an alert appers
2.dialog(object)-used to handleor control the alert
3.toBe()-toBe is used to check wheather two values are exactly equal
4.dialog.message()-is used to get the text inside the alert popup*/
