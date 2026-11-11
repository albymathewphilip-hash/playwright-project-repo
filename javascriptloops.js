for(let i=1;i<=5;i++)
    {
    console.log(i)
}
// print 1 to 20 even numbers
for(let j=1;j<=20;j++)
{
    if(j%2===0)
    {
        console.log(j)
    }
}
//print 1 to 20 odd numbers
for(let k=1;k<=20;k++)
{
    if(k%2!==0)
    {
        console.log(k)
    }
}
//whileloop
let l=1
while(l<=5){
    console.log(l)
    l++
}
//forin
let employee={
    name:"alby",
    age:21,
    role:"tester"
}
for(let key in employee)
{
    console.log(key)
    console.log(employee[key])
}
//continue
for(let m=1;m<=5;m++)
{
    if(m===3)
    {
        continue
    }
    console.log(m)
}
/*syntax
do 
{
    //statement
    increment/decrement
}
    while(condition)*/
let c=1
do
{
    console.log(c)
    c++
}   
while(c<=10)
