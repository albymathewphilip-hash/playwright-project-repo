"use strict";
class student {
    name = "alby";
    age = 21;
    display() {
        console.log(this);
    }
}
console.log("*******class with constructor********");
class student {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    display() {
        console.log("this.name,");
    }
}
console.log("*******add and sub*******");
class Show {
    sum(a, b) {
        return a + b;
    }
    sub(x, y) {
        return x - y;
    }
}
let obj2 = new Show();
console.log(obj2.sum(10, 20));
console.log(obj2.sub1(30, 10));
