'use strict';

// console.log(me);
// console.log(job);
// console.log(year);

var me = 'eden';
let job = 'web developer';
const year = 1991;

console.log(addDecl(2, 3));
// console.log(addExpr(4, 5));
// console.log(addArrow(6, 7));

function addDecl(a, b) {
    return a + b;
}
// const addExpr = function(a, b) {
//     return a + b;
// };
var addArrow = (a, b) => {
    a + b;
};

//Example
if (!numProduct) deleteShoppingCart();
var numProduct = 10;

function deleteShoppingCart() {
    console.log('ALL Products deleted');
}
var x = 1;
let y = 2;
const z = 3;
console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);