/*abstraction means hiding the internal implimentaion and showing only the necessry functionality*/
class AtmSample
{
     withdraw(amount)
     {
        let balance=10000
        if(balance>amount)
        {
            console.log("withdraw successfull")
        }
        else
        {
            console.log("not withdraw")
        }
     }
}
let obj2=new AtmSample()
obj2.withdraw(2000)
class Car
{
    start()
    {
        console.log("car started")
        this.checkEngine()
    }
    checkEngine()
    {
        console.log("check engine")
    }
}
let obj=new Car()
obj.start()
console.log("*****sample******")
class Sample
{
    large()
    {
        console.log("number is")
        this.fireWork()
    }
     fireWork()
     {
        console.log("fruit")
     }
}
let obj1=new Sample()
obj1.large()
console.log("*****loginsystem*****")
class LoginSample
{
    login(username,password)
    {
        this.validateuser(username,password)
    }
    validateuser(username,password)
    {
        if(username==="alby"&&password===123)
        {
            console.log("login")
        }
        else
        {
            console.log("not login")
        }
    }
}
let obj4=new LoginSample()
obj4.login("admin",123)
console.log("****washingmachine****")
class WashingMachine
{
    start()
    {
       this.fillWater()
       this.washCloth()
       console.log("washing completed")
    }
    fillWater()
    {
       console.log("filling water")
    }
    washCloth()
    {
        console.log("washing")
    }
}
let obj5=new WashingMachine()
obj5.start()