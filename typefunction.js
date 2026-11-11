"use strict";
/*non parameterised*/
function dispaly() {
    console.log("hi");
}
dispaly();
console.log("*******parameterised fn********");
//function with parameter
function add(name) {
    console.log(name);
}
add("arjun");
console.log("*****sum*****");
function sum(x, y) {
    let c = x + y;
    console.log(c);
}
sum(10, 20);
//return
console.log("*************return**************");
function checkVotingAge(age) {
    if (age >= 18) {
        return "eligible to vote";
    }
    else {
        return "not eligible to vote";
    }
}
console.log(checkVotingAge(20));
//find square of anumber
console.log("*******square of a number*******");
function square(b) {
    let s = b * b;
    return s;
}
console.log(square(8));
console.log("*******largest of a number*******");
function large(c, d) {
    if (c > d) {
        return c;
    }
    else {
        return d;
    }
}
console.log(large(60, 30));
console.log("*****odd or even*****");
function work(x) {
    if (x % 2 === 0) {
        return "even";
    }
    else {
        return "odd";
    }
}
console.log(work(20));
console.log("****anonimous function******");
/*an anonimus in a function is a typescript is function without afunction name it is usually assign to a variable*/
let display = function () {
    console.log("hi");
};
display();
