"use strict";
console.log("****anonimous function******");
/*an anonimus in a function is a typescript is function without afunction name it is usually assign to a variable*/
let display = function () {
    console.log("hi");
};
display();
console.log("*******anonymous fn with parameter*******");
let show = function (a) {
    console.log(a);
};
show("alby");
console.log("*******anonymous with return type *******");
let add = function (a, b) {
    let s = a + b;
    return s;
};
console.log(add(5, 4));
