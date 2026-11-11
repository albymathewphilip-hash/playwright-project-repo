//inheritance is a oops concept whereone class can acquire or  
//types-single inheritance,multilevel inheritance,hierarchical inheritance,multiple inheritance,hybrid inheritance
//in javascript inheritance is mainly achieve use in the extends keyword
/*syntax-class parent{
}
class child extends parent{
}*/
class Dog
{
    walk()
    {
        console.log("walking")
    }
}
class BabyDog extends Dog
{
    eat()
    {
        console.log("eating")
    }
}
let obj=new BabyDog()
obj.walk()
obj.eat()
console.log("*************vehicle****************")
class Train
{
    run()
    {
    console.log("new")
    }
}
class Bus extends Train
{
    queue()
    {
        console.log("old")
    }
}
let good=new Bus()
good.run()
good.queue()
console.log("************fruit***************")
class Fruit{
     sweet()
     {
        console.log("fresh")
     }
}
class Orange extends Fruit
{
    excelent()
    {
        console.log("sour")
    }
}
let average=new Orange()
average.sweet()
average.excelent()
console.log("**********addition using ingeritance************")
class Addition
{
     root(a,b)
     {
        let sum=a+b
        console.log("sum is",sum)
     }
}
class Great extends Addition
{
    square()
    {
        console.log("hello")
    }
}
let small=new Great()
small.root(7,3)
small.square()
console.log("******add and sub**********")
class Add
{
    print(j,k)
    {
        let x=j+k
        console.log("sum is",x)
    }
}
class Sub extends Add
{
    paste(l,m)
    {
        let y=l-m
        console.log("sum is",y)
    }
}
let manage=new Sub()
manage.print(10,15)
manage.paste(30,20)
console.log("******multilevel inheritance*******")
//multilevel inheritance happends in multiple level
class Grandparent
{
    GrandparentMethod()
    {
        console.log("morning")
    }
}
class Parent extends Grandparent
{
    parentMethod()
    {
        console.log("parent")
    } 
}
class Child extends Parent
{
    childMethod()
    {
        console.log("child")
    }
}
let obj1=new Child()
obj1.GrandparentMethod()
obj1.parentMethod()
obj1.childMethod()
console.log("*****add,Sub,multi*****")
class Add1
{
    addMethod()
    {
        let a=10
        let b=15
        let sum=a+b
        console.log(sum)
    }
}
class Mul extends Add1
{
    mulMethod()
    {
        let c=5
        let d=8
        let x=c*d
        console.log(x)
    }
}
class Sub1 extends Mul
{
    subMethod()
    {
       let e=20 
       let f=15
       let y=e-f
       console.log(y)
    }
}
let obj6=new Sub1()
obj6.addMethod()
obj6.mulMethod()
obj6.subMethod()