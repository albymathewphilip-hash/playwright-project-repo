function sample()
{
    console.log("hello")
}
sample()
//sum
let a=10
let b=5
function sum()
{
    console.log(a+b)
}
function sub()
{
    console.log(a-b)
}
sum()
sub()
//even
function even()
{
    let i=2
    if(i%2===0)
    {
    console.log("even")
    }
    else
    {
    
    console.log("not")
}
}
even()

//print large number
function large()
{
 let x=6
let y=8  
if(x<y)
    {
        console.log("large")
    }
    else{
        console.log("small")
    }
}
large()
// parameter function
// function message
function message(yourmessage)
{
    console.log(yourmessage)
}
message("bye")
//find the sum use parameter
function add(m,n)
{
    console.log(m+n)
    }
    add(12,16)
//parameter
function work(f,g)
{
     return f+g
}
console.log(work(6,8))
//find large number
function large(h,i)
{
    if(h>i)
    {
        return h
    }
    else{
         return i
     }
    return h>i
}
console.log(large(25,20))
// create function
const samplemessage=()=>
{
    console.log("hello")
}
samplemessage()
//parametrised arrow function
const addtwonumbers=(m,n)=>
{
    console.log(m+n)
}
addtwonumbers(12,15)
//function with return type
const arrow1=(x,y)=>
{
    return x+y
}
console.log(arrow1(11,14))
//default
function defaultparameterexample(name="sherin")
{
    console.log(name)
}
 defaultparameterexample("shiril")
 defaultparameterexample()