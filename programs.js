let a=10,b=15
{
    console.log(a+b)
}
console.log()
// terinary operator
let c=20
let d=10
let result=c>d?"larger":"smaller"
console.log(result)
//print pass or fail
let mark=45
if(mark>=40)
{
    console.log("pass")
}
else{
    console.log("fail")
}
let username="admin"
let password=12345
if(username==="admin"&&password===12345)
{
    console.log("login successful")
}
else{
    console.log("login fail")
}
let number=30
if(number%3==0&&number%5==0)
{
    console.log("divisible by both")
}
else{
    console.log("not divisible")
}
let colour=1
switch(colour)
{
    case 1:
        console.log("go")
        break
    case 2:
        console.log("slow") 
        break
    case 3:
        console.log("stop")
        break   
        default:
    console.log("invalid colour")            
}
let file="chrome"
switch(file)
{
    case "edge" :
        console.log("edge")
        break
    case "chrome" :
        console.log("chrome")
        break
    case "firefox" :
        console.log("firefox")
        break 
        default:
         console.log("invalid file")          
}
//create a function addition that adds 10 and 20 print the result
function add(x,y)
{
 console.log(x+y)
}
add(10,20)
//create a function find even that checks wheather 25 is even or odd
function even()
{
    let a=25
    if(a%2===0)
    {
        console.log("even")
    }
    else{
        console.log("odd")
    }      
}
even()
//create a function dispaly number that print nymbers from 1 to 10
function num()
{
    for(i=1;i<=10;i++)
{
    console.log(i)
}
}
num()
//craete a parameterised function find largest that accept two number and print the largest number
function large(c,d)
{
    if(c>d)
    {
        return c
    }  
    else{
        return d
    }  
}
console.log (large (11,14))
//create a parametrised function sqauare that returns the square of a number
 function square(j)
 {
    let c=(j*j)
    return c
 }
 console.log(square(5))
 //create and arrow function that accept two numbers and returns their sum
 const arrow1=(l,m)=>
 {
    return(l+m)
 }
 console.log(arrow1(15,20))
 //create an arrow function that accept two number and returns the reminder
 const accepttwonum=(e,f)=>
 {
    let w=e%f
    return w
 }
 console.log(accepttwonum(21,23))
 //create an arrow fn that accept a number checks wheather its a prime number
 const prime=(o)=>
 {
    let count=0
       for(let k=2;k<=i;k++)
    {
        
    }
}
console.log(k)
