let age=15
if(age>=18)
{
    console.log("eligible to vote")
}
//if else
    let candidateage=16
if(candidateage>=18)
{
    console.log("adult")
}
else{
    console.log("minor")
}
//to find positive number
let a=10
if(a>0)
{
    console.log("positive")
}
else{
    console.log("negative")
}
// to find even or odd number
let b=6
if(b%2===0)
{
    console.log("even")
}
else{
    console.log("odd")
}
//to find large
let c=11,d=9
if(c>d)
{
    console.log(c+"large")
}
else{
    console.log(d+"large")
} 
//switch
let day=2
switch(day)
{
    case 1:
        console.log("monday")
        break
    case 2:
        console.log("tuesday")
        break
    case 3:
        console.log("wednesday")
        break
    case 4:
        console.log("thursday")
        break
    case 5:
        console.log("friday")
        break
    default:
        console.log("invalid day")                    
}
let vowel="b"
switch(vowel)
{
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        console.log("vowel")
        break
        default:
            console.log("not a vowel")        
}