/*constructor is a special method in javascript at automatically exicutes when we create and object using the new keyword
syntax-class ClassName{
 constructor()//nonparameterised constructor
 {
 }
}
 let objectname=new ClassName()//object creation
 class ClassName{
  constructor(parameter)//parameterised
  {
  }
 }
  let objectname=ClassName(arguments)*/
  console.log("******nonparameterised********")
  class Student
  {
    constructor()
    {
        console.log("hello")
    }
  }
  let obj=new Student()
  console.log("********parameterised************")
  class Student1
  {
    constructor(name)
    {
      this.name=name
    }
  }
let obj1=new Student1("alby")
console.log(obj1.name)
console.log("******name and age*******")
class Student2
{
  constructor(name,age)
  {
    this.name=name
    this.age=age
  }
}
let obj2=new Student2("sara",22)
let obj3=new Student2("devan",25)
console.log(obj2.name+" "+obj2.age)
console.log(obj3.name+" "+obj3.age)
console.log("*******function*********")
class Queue
{
   constructor(salary) 
   {
this.value=salary
   }
   start()
   {
    console.log(this.value)
   }
}
let obj4=new Queue(30000)
obj4.start()