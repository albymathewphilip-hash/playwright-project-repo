/*encapsulation javascript is the process ofrapping data and methods inside a class and restricting direct acess to the data
it helps to achieve data hiding and control access
advantages:-
encapsulation provide data security,data hiding,control access,validation,better organistion and easier maintanense
disavdantages:-
encapsulation can increase code size and complexity because addition method such as getters and setters may be required*/
class Encapsulation
{
    #name="Arun"
    getName()
    {
        return this.#name
    }
}
let obj=new Encapsulation()
console.log(obj.getName())
console.log("******getter method*******")
class Get 
{
    #name
    #age
    getdetails()
    {
       console.log("name:",this.#name)
       console.log("age",this.#age)
    }
    constructor(name,age)
    {
        this.#name=name
        this.#age=age
    }
}
let obj1=new Get("shiril",22)
obj1.getdetails()
console.log("*****salary*****")
class Salary
{
    #salary
    getEmployee()
    {
        return this.#salary
    }
    constructor(salary)
    {
        this.#salary=salary
    }
}
let obj2=new Salary(25000)
console.log(obj2.getEmployee())