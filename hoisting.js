/*hoisting is a javascript behaviour where declaration are processed before execution of there scope
var is initialised to undefined,let and const remain in accesable in the temporal dead zone and fn declaration can be call
before they appear in the code*/
//var
console.log(name)
var name="alby"
console.log(name)
//let
/*console.log(a)
let a=10//temporal dead zone(tdz)the period between entering this scope and reaching the declaration is called temporal dead zone
console.log(a)*/
//const
/*console.log(b)
const b=15*/
//function
display()
function display()
{
    console.log("hi")
}