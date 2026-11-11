/*common js(CJS) and ES module(ESM)
in javascript CJS and ESM are two diff module s/m used to organize an share code
module-a module is a javascript file that contains variable ,functions and class that can be exported and imported into another file
CJS and ESM are two module systems in javascript 
CJS uses require()module.exports, while EJS use import and export
ESM are standardised modern js module s/m and are commonly used in modern appln
CJS:is the older module s/m
ESM:modern js module s/m*/

//example=CJS
/*Math.js
function add(a,b)
{
return a+b
}
module.exports=add
//app.js\
const sum=require("./Math")
console.log(add(2,3))

//example=ESM
/*Math1.js
export function add1(a,b)
{
return a+b
}
add1.js
import {add1}from "./Math1.js"
console.log(add1(5,6))*/