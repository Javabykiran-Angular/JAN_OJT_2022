var a = [];
//1 Push & pop
//2 Splice method
// a.splice(0,0,80);
// console.log(a);
// a.splice(1,0,70,2,21,36,24);
// console.log(a)
// a.splice(3,0,66);
// console.log(a)
// a.splice(2,1);
// console.log(a)
// a.splice(1,2)
// console.log(a);
// a.splice(1,1,44)
// console.log(a)
// slice
// It is used to copy a section data 
var b = [10, 21, 33, 4, 2, 8, 78, 99, 9, 3, 6, 45, 50];
var temp = b.slice(2, b.length - 2);
// console.log(temp);
//map
// element by element operation perform
var c = [2, 3, 4, 5, 6];
var temp1 = c.map(function (myvalue) {
    return (myvalue * myvalue);
});
// console.log('Original Array is '+c);
// console.log('Resulatant Array is '+temp1)
//derefence of array
var d = [44, 21, 9, 8, 3, 6];
var t1 = d[0], t2 = d[1], t3 = d[2];
// console.log(d)
// console.log(`
//   t1 :: ${t1}
//   t2 :: ${t2}
//   t3 :: ${t3}
// `)
var n3 = d[2];
// console.log(n3)
var a3 = d[2], arr = d.slice(3);
// console.log(arr)
// Interview for JS 
var a1 = [4, 5, 6, 7, 8];
var b1 = [];
b1 = a1;
console.log('a1 value is ' + a1);
console.log('B1 value is ' + b1);
a1.push(10);
console.log('-------------------');
console.log('a1 value is ' + a1);
console.log('B1 value is ' + b1);
