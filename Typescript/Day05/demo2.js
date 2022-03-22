//Annonymous Functions
// Function does not have any name
var temp = function () {
    console.log('First type of Annonymous Functions is called');
};
// temp();
var temp1 = function (a, b) {
    return (a + b);
};
// let res=temp1(4,3);
// console.log(`Result is ${res}`)
// Fat Arrow function/Arrow Function
// It is advanced version of Annonymous Functions
var temp2 = function () {
    console.log('First type of Fat Arrow Function');
};
// temp2();
var temp3 = function (a, b) {
    return (a + b);
};
// console.log(`Result is ${temp3(5,5)}`)
// Optional Parameter Function
function add1(a, b) {
    console.log('Value of a is ' + a); // 7
    console.log('Value of b is ' + b); // 3
    console.log('Addition  of a+b is ' + (a + b)); // 10
}
// add1(7)
// add1(7,3)
function add2(a, b, c) {
    console.log('Value of a is ' + a); // 
    console.log('Value of b is ' + b); // 
    console.log('Value of C is ' + c);
    console.log('Addition  of a+b+c is ' + (a + b + c));
}
// add2(10,2)
//Default parameter Function
function add3(a, b) {
    if (b === void 0) { b = 5; }
    console.log('Value of a is ' + a); // 6
    console.log('Value of b is ' + b); // 7
    console.log('Addition  of a+b is ' + (a + b)); // 13
}
// add3(6)
//  add3(6,7)
function add4(a, b) {
    if (a === void 0) { a = 8; }
    console.log('Value of a is ' + a); // 6
    console.log('Value of b is ' + b); // 7
    console.log('Addition  of a+b is ' + (a + b)); // 13
}
// add4(1,2);
add4();
