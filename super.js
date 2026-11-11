/* super keyword in javascript:super keyword is used in achildclass to access the parent class properties
its mainly used in 2 ways:
1.super()=call the parent calss constructor
2.super.methodname()=call the methods froam the parent calss
syntax-class parent
{
 constructor()//parent constructor
 {
   
 }
}
class child extends parent
{
 cconstructor()//child constructor
 {
  super()
 }
}
 syntax:
 class parent
 {
  function()
  {
   
  }
 }
  class child extends parent
  {
   function()
   {
    super.method
   }
  }*/
 class Parent
 {
    show()
    {
        console.log("hello")
    }
 }
 class Child extends Parent
 {
    display()
    {
      super.show()
      console.log("hi")
    }
 }
 let obj=new Child()
 //obj.show()
 obj.display()
 console.log("*****my details*****")
 class Details
 {
    show1()
    {
        console.log("name:alby")
        console.log("age:22")
    }
 }
 class Show extends Details
 {
    show2()
    {
        super.show1()
        console.log("course:javascript")
    }
 }
 let obj4=new Show()
 obj4.show2()
console.log("*****employee*****")
class Employee
{
    constructor(name)
    {
        this.name=name
    }
}
class Details1 extends Employee
{
    constructor(name,salary)
    {
        super(name)
        this.salary=salary
    }
}
let obj5=new Details1("arun",25000)
console.log(obj5.name+" "+obj5.salary)