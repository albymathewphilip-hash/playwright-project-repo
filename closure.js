/*the clouser is created when an inner function remembers an can access variables from its outer function,even after the outer function as finish execute*/
function outer()
{
    let name="alby"
    function inner()
    {
        console.log(name)
    }
    return inner
}
const x=outer()
x()