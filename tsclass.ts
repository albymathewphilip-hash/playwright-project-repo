class student
{
    name:string="alby"
    age:number=21
    display():void
    {
        console.log(this)
}
}

console.log("*******class with constructor********")
class student
{
    name:string
    age:number
    constructor(name:string,age:number)
    {
        this.name=name
        this.age=age
    }
        display()
        {
           console.log("this.name,")
        }
}
 
console.log("*******add and sub*******")
class Show
{
    sum(a:number,b:number):number
    {
        return a+b
    }
    sub(x:number,y:number):number
    {
        return x-y
    }
}
let obj2=new Show()
console.log(obj2.sum(10,20))
console.log(obj2.sub1(30,10))