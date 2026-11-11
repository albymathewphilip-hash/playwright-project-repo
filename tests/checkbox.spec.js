import {test,expect} from '@playwright/test'
test('checkbox',async({page})=>{
await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
const option1=page.locator('//input[@value="option-1"]')
//await option1.check()
await option1.click()
const status=await option1.isChecked()
console.log(status)
await expect(option1).toBeChecked()
})

test('checkbox1',async({page})=>{
 await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')   
 const option2=page.locator('//input[@value="option-2"]')
 //await option2.check()
await option2.click()
//await option2.click()
const status=await option2.isChecked()
console.log(status)
await expect(option2).toBeChecked()
})

test('checkbox2',async({page})=>{
 await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html') 
 const option4=page.locator('//input[@value="option-4"]')
 await option4.check()
 await option4.check()
})

test('checkbox3',async({page})=>{
 await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html') 
 const option3=page.locator('//input[@value="option-3"]')
 await option3.uncheck()
})

test.only('checkbox4',async({page})=>{
  await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
  const option=page.locator('//input[@value="option-2"]')
  await option.isVisible()
  if(await option.isVisible())
  {
    console.log("option checkbox is visible")
    await option.check()
  }
  else{
    console.log("option check is not visible")
  }
  })
