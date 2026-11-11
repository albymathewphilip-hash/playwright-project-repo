import {test,expect} from '@playwright/test'
test('frames',async({page})=>{
 await page.goto('https://demoqa.com/frames')
 const frameelement=page.frameLocator('#frame1')
console.log(await frameelement.locator('#sampleHeading').textContent())
})
/*what is aframing palywright?
a frame is an html document embeded inside another webpage,usualy through an iframe element
how do you handle frame in playwright?
we can use page.framelocator() to locate elements inside and iframe and perform actions such as clicking,filling text and validating text
what is the difference between page.locator() and page.framelocator()?
page.locator()-locate elements in the main page 
page.framelocator()-locate elements in a inside and iframe*/