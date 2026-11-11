import {test,expect} from '@playwright/test'
test ('general locators',async({page})=>{
await page.goto('https://selenium.qabible.in/simple-form-demo.php')   
 //const webelementname=page.locator('locatorvalue')
 const message=page.locator('#single-input-field')  
 await message.fill("hello")
 const showmessage=page.locator('#button-one')
 await showmessage.click()
})
/*playwright provide several built-in locators such as:
1.getByRole()
2.getByText()
3.getBYLabel()
4.getByPlaceholder()
5.getByAltText()
6.getByTitle()
7.getByTestId()

we can also use page.locator()with css selectors or xpathto identify elements
syntax general locator
const webelementname=page.locator('locatorvalue')*/

test('css selectors',async({page})=>{
    //id=#id
const message=page.locator('#single-input-field')  
const showmessage=page.locator('#button-one')
const value=page.locator("#value-a")
const showdate=page.locator('#button-one')

//class=.class
const daterange=page.locator('form-control')
const draganddrop=page.locator('card-body')

//tag and attribute=tagname[attribute='value']
const message1=page.locator('input[placeholder="Message"]')
const value1=page.locator("input[id='value-a']")

})

test('xpath',async({page})=>{
    //attributes
    //tagname[@attribute='value']
    const message=page.locator('//input[@id="value-a"]')
    const message4=page.locator('//input[@id="value-a"]')

    //text()
    //tagname[test()='value']
    const showmessage1=page.locator("//button[test()='Show Message']")
    const gettotal=page.locator("//button[test()='Get Total']")

    //contains-attributes
    //tagname[contains(@attribute,'value')]
    const message3=page.locator("//input[contains(@id,'single-i')]")
    const message5=page.locator("//input[contains(@id,'value-b')]")

    //contains-text()
    //tagname[contains(test(),'value')]
    const showmessage3=page.locator("//button[contains(test(),'Show Message')]")
    const gettotal1=page.locator("//button[contains(text(),'Get Total')]")

    //syntax-starts-with
    //tagname[starts-with(@attribute,'value')]
    const message7=page.locator("//input[starts-with(@id,'single-i')]")
    const message8=page.locator("//input[starts-with(@id,'single-i2')]")

    //text()-starts-with
    //tagname[starts-with(text(),'value')]
    const showmessage4=page.locator("//button[starts-with(text(),'Show Message')]")

    //syntax-and
    //tagname[@attribute='value' and @attribute='value']
    const message9=page.locator("//input[@class='form-control' and @placeholder='message']")

    //text()-and
    //tagname[@attribute='value' and text()='value']
    const gettotal3=page.locator("//button[@id='button-two' and text()='Get Total']")
})
/*two types of xpath - absolute xpath and relative xpath
absolute:eg:/html/body/section/div/div/div[2]/div[1]/div/div[2]/form/button-start from the root node(not recommented as it may break easily)
relative xpath:start from anywhere in the DOM
attribute-syntax
//tagname[@attribute='value']
text()-syntax
tagname[text()='value']

contains-syntax
//tagname[contains(@attribute,'value')]
text-syntax
//tagname[contains(text(),'value'))]