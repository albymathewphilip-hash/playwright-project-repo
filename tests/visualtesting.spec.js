/*visual testing-in playwright verifies the visuals appearence of a webpage by comparing the current screenshot with a previousily save baseline screenshot
for a ststic page,capture the baseline using toHaveScreenShot(),the run the test again to detect unexpected changes
1.color changes
2.layout issues
3.alignment issues
4.font changes
5.missing or extra elements 
6.space issues etc.

Q.how does visual testing work?
step 1-capture the baseline screenshot
take the first screenshot of the page
this becomes expected appearence,called the baseline screenshot

step 2-run the test again
playwright captures anew screenshot of the same page

step 3-compare screenshots
playwright compares the new screenshot with baseline and reports visuals difference*/

import {test,expect} from '@playwright/test'
test('visual testing',async({page})=>{
 await page.goto('https://www.saucedemo.com/')
 await page.waitForLoadState('networkidle')
 await expect(page).toHaveScreenshot('sourcedemo.png',{threshold:0.2})
})
/*0-strict(no difference allow)
  0.1-very small difference allaow
  0.2-small difference allow
  1-large difference allow
  