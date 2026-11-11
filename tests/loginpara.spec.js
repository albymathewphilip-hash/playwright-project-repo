import {test,expect} from '@playwright/test'
import {LoginPage} from '../pages/loginpage'
//import validlogindata from '../utils/parameterisedtestdata.json'
const dataset=require('../utils/parameterisedtestdata.json')

for(const data of dataset){

test(`login using valid credentials ${data.username} ${data.password}`,async({page})=>{
const lp=new LoginPage(page)
await lp.openApplication()
await lp.clickLogin(data.username,data.password)
//await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')

})
}