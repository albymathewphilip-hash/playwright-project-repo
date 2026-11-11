/*a callback function is funvtion passed into another function as an argument,*/
function green()//callback function
{
     console.log("this is green colour")
}
function display(callback)
{
    console.log("tanks")
    callback()
}
display(green)
console.log("**************")
function cook(food,callback)
{
    console.log("cooking " + food)
    callback()
}
function serve()//call back function
{
     console.log("food is ready to serve")
}
cook("egg",serve)
console.log("******addition*******")
function add(a,b,callback)
{
     let result=a+b
     callback(result)
}
function display(result)
{
    console.log("addition "+ result) 
}
add(10,20,display)
console.log("*******welcome program********")
function getstudent(name,callback)
{
    console.log("student name "+ name)
    callback(name)
}
function welcome()
{
    console.log("welcomevto everyone")
}
getstudent("alby",welcome)
/*callback hell-it happens when we have many callbacks nested inside other callback
it is also callepyramid of doom because the code starts