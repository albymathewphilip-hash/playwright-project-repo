/*special locators in playwright are build in locator methods such as getbyroll,getbytest,getbylabel and getbypalceholder that help as locate elements
using user facing properties and accessability information.they make scripts more readable and maintainable*/
//getbyroll-is a special locator in playwright used to locate awebelement based on its accessable role
//syntax-page.getByRole('role')
//       page.getByRole('role',{name:'accessiblename'})

import {test,expect} from '@playwright/test'
test('speciallocators',async({page})=>{
const showmessage=page.getByRole('button',{name:'Show Message'})
})

//getByText is aspecial locator in playwright used to locate an element based on the visible text display on text page
//syntax-page.getByTest('test')
test('getByText',async({page})=>{
const gettotal=page.getByText('Get Total')
})


//getByLabel-getbylabel is aspecial locator used to locate form elements such as inputfield,chechbox and radiobutton using their associated label text
//syntax-page.getByLable('label text')
test('getByLabel',async({page})=>{
    const entermessage=page.getByLable('Enter Message')
})


//getByPlaceholder-is a special locator in playwright used to locate an element input element using its placeholder text
//syntax-getByPlaceholder('palceholder text')
test('getByPlaceholder',async({page})=>{
const message=page.getByPlaceholder('Message')
})


//getByAltText-is a special locatoer used to locate an element using its alt attribute 
//syntax-page.getByAltText('alt text')
test('getByAltText',async({page})=>{
const logo=page.getByAltText('logo')
})


//getByTitle-is a special locator in playwright used to locate an element using its title attribute
//syntax-page.getByTitle('title text')
test('getByTitle',async({page})=>{
const button=page.getByTitle('close')
})

//getByTestId-is a special locator in playwright used to locate an element using a test id
//syntax-page.getByTestId('test-id')
test(getByTextId,async({page})=>{
const button1=page.getByTextId('login-button')    
})

