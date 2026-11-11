import {test,expect} from '@playwright/test'
//import {loginpage} from '../pages/loginpage'
import { LoginPage } from '../pages/loginpage'
test('verify login with valid credentials',async({page})=>{
 const loginpage=new LoginPage(page)
//const usernamevalue='standard_user'
const passwordvalue='secret_sauce'
await loginpage.openApplication()
await loginpage.clickLogin(usernamevalue,passwordvalue)
await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
})