export class LoginPage
{
    constructor(page)
    {
        this.page=page
        this.usernamefield=page.locator('//input[@id="user-name"]')
        this.passwordfield=page.locator('//input[@id="password"]')
        this.login=page.locator('//input[@id="login-button"]')
      //  this.errormessage=page.locator('.data-test="error"')
    }
    async openApplication()
    {
        await this.page.goto('https://www.saucedemo.com/')
    }
    async clickLogin(username1,password1)
    {
        await this.usernamefield.fill(username1)
        await this.passwordfield.fill(password1)
        await this.login.click()
    }
}