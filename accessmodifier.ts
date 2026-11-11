/*public:public numbers can be accesesd anyware
private:private numbers can be accesed only inside the same class
protect:protected numbers can be accesed inside the parent class and in*/
console.log("************public*************")
class Student
{
    public name:string="alby"
    public display():void
    {
        console.log(this.name)
    }
}
let ob=new Student()
ob.display()
console.log(ob.name)

console.log("*******private*******")
class Bank
{
   private balance:number=30000
   public show():void
   {
    console.log(this.balance)
   }
}
let ob1=new Bank()
ob1.show()

console.log("*********protect*********")
class Animal
{
    protected name:string="shiril"
    show1():void
    {
        console.log(this.name)
    }
}
class Bird extends Animal
{
    display():void
    {
        console.log(this.name)
    }
}
let ob2=new Bird()
ob2.show1()
ob2.display()