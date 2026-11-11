import {test,expect} from '@playwright/test'
test('radiobuttonhandling',async({page})=>{
await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
const green=page.locator('//input[@value="green"]') 
//await green.check()
await green.click()
})

test('radiobuttonhandlig2',async({page})=>{
    await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
   // const blue=page.getByText('blue')
   const blue=page.locator('//input[@value="blue"]')
    //await blue.check()
    await blue.click()
    const status=await blue.isChecked()
    console.log(status)
})

test('radiobuttonvalidaton',async({page})=>{
  await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
  const blue=page.locator('//input[@value="blue"]') 
  await blue.click()
  await expect(blue).toBeChecked()
})

//checkbox
test('form submit',async({page})=>{
  await page.goto('https://selenium.qabible.in/form-submit.php')
  const firstname=page.locator('//input[@id="validationCustom01"]')
  await firstname.fill("alby")
  const lastname=page.locator('//input[@id="validationCustom02"]')
  await lastname.fill("shiril")
  const username=page.locator('//input[@id="validationCustomUsername"]')
  await username.fill("sherin")
  const city=page.locator('//input[@id="validationCustom03"]')
  await city.fill("thiruvalla")
  const state=page.locator('//input[@id="validationCustom04"]')
  await state.fill("kerala")
  const zip=page.locator('//input[@id="validationCustom05"]')
  await zip.fill("223")
  const agree=page.locator('//input[@id="invalidCheck"]')
  await agree.check()
  const submitform=page.locator('//button[text()="Submit form"]')
  await submitform.click()
})

/*check-select radiobutton
 click-seleck radiobutton
 ischeck()-returns true or false
 tobecheck-validation
 isvisible()-check the radiobutton is visible or not
 isenabled()-verify the radiobutton is enabled or not
 isdisabled()-verify the radiobutton is disabled or not*/

 test.only('radiobuttondemo2',async({page})=>{
  await page.goto('https://selenium.qabible.in/radio-button-demo.php')
  const male=page.locator('//input[@id="inlineRadio1"]')
  await male.isVisible()
  if(await male.isVisible())
  {
    console.log("male radiobutton is visible")
    await male.check()
  }
  else{
    console.log("male radiobutton is not visible")
  }

  const male1=page.locator('//input[@id="inlineRadio11"]')
 // await male1.isVisible()
  if(await male1.isVisible() && await male1.isEnabled())
  {
    console.log("male1 pateints genderis visible")
    await male1.check()
  }
  else{
    console.log("male1 pateints gender is not visible")
  }

  const age=page.locator('//input[@id="inlineRadio22"]')
  await age.isVisible()
  if(await age.isVisible() && await age.isEnabled())
  {
    console.log("pateints age group is visible")
    await age.check()
  }
  else{
    console.log("pateints age group is not visible")
  }
  const getresult=page.locator('//button[text()="Get Results"]')
  await getresult.click()
 })

