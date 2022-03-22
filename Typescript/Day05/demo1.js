// 1 Function without parameter & without return type
// 2 Function with parameter & without return type
// 3 Function without parameter & with return type
// 4 Function with parameter & with return type
// 1 Function without parameter & without return type
function add1() {
    console.log("First type Function is called");
}
// add1();
// 2 Function with parameter & without return type
function add2(a, b) {
    console.log('Addition is ' + (a + b));
}
// add2(4,6);
// 3 Function without parameter & with return type
function add3() {
    return (8 + 8);
}
// let res=add3();
// console.log('Result is '+res);
// 4 Function with parameter & with return type
function add4(a, b) {
    return (a + b);
}
console.log(" Addition is ".concat(add4(2, 3), " "));
