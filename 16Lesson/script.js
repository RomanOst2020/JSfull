"use strict";

let num = 20;
function snowFirstMessage (text, arg) {
    console.log(text, arg );
    // let num = 10;
    console.log(num);

}

snowFirstMessage("Hello World", 43);
console.log(num);

console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 6));
function calc (a, b) {
    return (a + b);
    
}




function ret() {
    let num = 50;
    //
    return num;

}

const anotherNum = ret();
console.log(anotherNum);

const logger = function() {
        console.log("Hello");
};
logger();

const calc = (a, b) => {
return a + b;
};
calc (1, 5);

let summa = calc (5, 6);
console.log(calc);


const str = "test";
const arr = [1, 2, 3, 4, 5]
console.log(str.length);
console.log(arr.length);













