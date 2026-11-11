/*using Array<type>*/
let num:Array<number>=[1,2,3]
console.log(num)
console.log("*******string*******")
let fruits:Array<string>=["apple","orange","grape"]
console.log(fruits)
/*using type[] (most coomon)*/
let a:number[]=[4,5,6]
console.log(a)
console.log("******string1*******")
let name1:string[]=["alby","stalin","shiril"]
console.log(name1)
console.log("*****boolean*******")
let large:boolean[]=[true,false]
console.log(large)

//array with multiple types(union types)
let value:(string|number)[]=["sherin",8,"ashik",6]
console.log(value)
console.log("******string boolean********")
let value1:(string|boolean|number)[]=[6,7,8,true,false,"amal","vishak"]
console.log(value1)

//push=add at the end
let fruits1:string[]=["apple","banana"]
fruits1.push("grape")
console.log(fruits1)

//pop=remove from the end
let num1:number[]=[1,2,3]
num1.pop()
console.log(num1)

console.log("********unshift********")
let num2:number[]=[10,20,30]
num2.unshift(50)
console.log(num2)

console.log("*******shift*******")
let num3:number[]=[89,35,70]
num3.shift()
console.log(num3)

console.log("****array lemgth*****")
let num4:number[]=[13,15,18]
console.log(num4.length)

console.log("*****includes*****")
let num5:number[]=[27,46,36]
console.log(num5.includes(36))

console.log("******indexof********")
let num6:number[]=[11,12,13]
console.log(num6.indexOf(12))

console.log("******slice*******")
//get part of an array
let num7:number[]=[16,27,28,78,90]
let result=num7.slice(1,3)
console.log(result)


