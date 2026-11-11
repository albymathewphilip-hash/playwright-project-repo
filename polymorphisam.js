//method overriding
class Animal
{
    sound()
    {
        console.log("welcome")
    }
}
class Dog extends Animal
{
    sound()
    {
        console.log("bow")
    }
}
let obj=new Dog()
obj.sound()
console.log("****string*****")
class Person
{
    Fresh(name)
    {
        console.log("my name is:",name)
    }
}
class Man extends Person
{
    fresh(name)
    {
        console.log("my name is:",name)
    }
}
let obj1=new Man()
obj1.fresh("alby")
console.log("***********")
class Flower
{
    sound()
    {
        console.log("colour")
    }
}
class Rose extends Flower
{
    sound()
    {
        super.sound()
        console.log("smell")
    }
}
let obj2=new Rose()
obj2.sound()