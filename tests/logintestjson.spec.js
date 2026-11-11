import {test,expect} from '@playwright/test'
import {LoginPage} from '../pages/loginpage'
import validlogindata from '../utils/testdatacredential.json'
test('login using valid credential',async({page})=>{
    const lp=new LoginPage(page)
    await lp.openApplication()
    const usernamevalue=validlogindata.username
    const passwordvalue=validlogindata.password
    await lp.clickLogin(usernamevalue,passwordvalue)
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
}) 
