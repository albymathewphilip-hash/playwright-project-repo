/*scope chain is the mechanism used by javascript the resolve variable when javascriptcannot find a variable in the innerscope,
it success the outer scope and continues towards the global scope until the variable is found*/
let a="alvin"
function outer()
{
    let age=10
    function inner()
    {
        let key=6
        console.log(a)
        console.log(age)
        console.log(key)
    }
    inner()
}
outer()

