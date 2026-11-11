import {test,expect} from '@playwright/test'
//@playwright/test-official playwright test runner used to write execute and validate
//test-used to create testcase
//expect-used to validate
test('URL launch',async({browser})=>{
const context=await browser.newContext()
const page=await context.newPage()
await page.goto('https://www.flipkart.com/')
})
//async-mark afunction as asynchranous
//await-wait for an asynchronous operations to finish
//browser-playwright fixture-a fixture in playwright is a reusable setup mechanism that provide arequired enviornment to a
//playwright provides building fixtures such as page,browser context and request 
//fixtures improves code reusability,reduse duplicate set up code and make
//browser provides the browser instance 
//context-provides a browser context or vesion(like
// incognito-means aclear browser env from no cookies or history) 
//page-provides a browser page or tab
//request- used for API testing

test('url launch shortcut',async({page})=>{
    await page.goto('https://selenium.qabible.in/')
})

/*playwright is an open source automation testing frame work developed by microsoft
it is mainly used to automate an test web application
playwright can automate:mouse action,keyboard action,forms and i/p,multiple window or tab
video capturing,assertion(using validation),API testing,visual testing
playwright supportes chrome,firefox,webkit(safari)
languagers-js,ts,java,python,.net

playwright.config.js-is the central configuration file in a playwright project
it is used to manage setting such as test directly,browser,time out,screenshot,video*/

/*webelements
webelements are the building block of aweb page,representing individual element such as buttons,links,test,etc.
in playwright automation web elements are used to interact with a web page,enabling actions like clicking button or links,entering text in to input field etc.*/

/*locator
locator is used to playwright to find an interact with the webelememnts*/