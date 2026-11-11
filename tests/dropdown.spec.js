import {test,expect} from '@playwright/test'
test('dropdown',async({page})=>{
    await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    const java=page.locator('//select[@id="dropdowm-menu-1"]')
    //index
    //syntax-await webelementname.selectOption({index:'value'})
    await java.selectOption({index:2})
})


    test('dropdown-byvalue',async({page})=>{
    await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    const eclipse=page.locator('//select[@id="dropdowm-menu-2"]')
    //value
    //syntax-await webelementname.selectOption({index:'attribute value'})
    await eclipse.selectOption({value:'maven'})
})


test('dropdown-test',async({page})=>{
    await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    const html=page.locator('//select[@id="dropdowm-menu-3"]')
    //text
    //syntax-await webelementname.selectOption({label:'text value'})
    await html.selectOption({label:'CSS'})
})


test('customdropdown-test',async({page})=>{
    await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    const java=page.locator('//div[@id="dropdowm-menu-1"]')
    await java.click()
    const python=page.locator('//option[@value="python"]')
    await python.click()
})
