import {test,expect} from '@playwright/test'
test('calender validation',async({page})=>{
 await page.goto('https://selenium.qabible.in/date-picker.php')
 await page.locator('//input[@id="single-input-field"]').click()
 const targetyear=1997
 await expect(page.locator('.datepicker-dropdown')).toBeVisible()
 /*wait until the calender popup element is visible on the page,and verify that it is displayed
 we do not immediatly interact with calender because,UI may time to load*/
 const clickbutton=page.locator('.datepicker-switch:visible')//visible is used to filter and select only visible element
 await clickbutton.click()
 await clickbutton.click()
 let attempt=10//avoid infinite loop
 while(attempt--)
 {
    const decades=await clickbutton.innerText()//innertext()-gets the text is visible on the screen
    //reads the current calender header text(2022-2029)
    const startyear=parseInt(decades.split('-')[0].trim())
    /*decades="2020-2029"
    decades.spit('-')=[" 2020 "," 2029 "]
    [0]=take 2020
    trim()=["2020","2029"]//removes extra space from the begining and end of a space
    paeseInt()-to convert the string into integer*/
 /*1997>=2020
 2010-2019
 1997>=2010

 2000-2009
 1997>=2000

 1990-1999
 1997>=1990 && 1997<=1990+9*/

    if(targetyear>=startyear && targetyear<=startyear+9)
    {
        break
    }
    await page.locator('.prev:visible').click()
 }
 await page.locator('.year:visible').filter({hasText:"1997"}).click()//if used to filter element based on the filter text
 await page.locator('.month:visible').filter({hasText:"May"}).click()
 await page.locator('.day:not(.old):not(.new)').filter({ hasText: /^8$/ }).click()
await page.locator('#button-one').click()
})