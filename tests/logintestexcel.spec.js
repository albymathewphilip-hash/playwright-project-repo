import {test,expect} from '@playwright/test'
import {LoginPage} from '../pages/loginpage'
import { getData } from '../utils/excelreader'

const credential=getData()
test('login using valid credential',async({page})=>{
    for(const data of credential)
    {

    
    const lp=new LoginPage(page)
    await lp.openApplication()
    //const usernamevalue=validlogindata.username
    //const passwordvalue=validlogindata.password
    await lp.clickLogin(data.username,data.password)
   // await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
    }
}) 
