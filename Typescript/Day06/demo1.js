//array
// array is growable & shrinkable
// without mentioning size of array u can create it
// u can create homogenous as well as heterogenous array
// u can create blank array as well 
// keyword var let const
var a = [7, 8, 9, 4];
var b = [];
// b[0]=''
var c = [4, 8, 9];
var d = ['Sumit', 2.5, true, 9, 'Raokhande'];
// for(let i=0;i<a.length;i++){
//   console.log('Array value is '+a[i])
// }
// console.log("Array Value is "+a)
// console.log("Using Join Method "+a.join(' # '));
// console.log("Using Join Method "+a.join());
//for each loop
// a.forEach((myvalue,i)=>{
//   console.log(`Value is ${myvalue} and Index is ${i}`)
// })
//rest parameter function
// ... spread operator
function display() {
    var item = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        item[_i] = arguments[_i];
    }
    console.log("value is " + item);
}
// display(4,55,86,10);
// display(77);
function display1(b) {
    var item = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        item[_i - 1] = arguments[_i];
    }
    console.log("B value is " + b);
    console.log("value is " + item);
}
// display1('Sumit',4,78,99);
// u can add value dynamically in array for that 2 methods available in it
// 1 using push & pop Method
// 2 Splice Method
// 1 using push & pop Method
// It works on LIFO Principle => Last in First Out
// we can called on array
var a1 = [];
a1.push(10);
console.log(a1);
a1.push(45, 20, 31, 25);
console.log(a1);
var res = a1.pop();
console.log(a1);
console.log('Poped Value is ' + res);
