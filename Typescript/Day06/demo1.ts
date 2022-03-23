//array

// array is growable & shrinkable
// without mentioning size of array u can create it
// u can create homogenous as well as heterogenous array
// u can create blank array as well 

// keyword var let const

let a:number[]=[7,8,9,4];
const b:any[]=[];
// b[0]=''
let c=[4,8,9];
let d=['Sumit',2.5,true,9,'Raokhande'];

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

function display(...item:number[]){
    console.log("value is "+item);
}

// display(4,55,86,10);
// display(77);

function display1(b:string,...item:number[]){
  console.log("B value is "+b)
  console.log("value is "+item);
}

// display1('Sumit',4,78,99);

// u can add value dynamically in array for that 2 methods available in it
// 1 using push & pop Method
// 2 Splice Method

// 1 using push & pop Method
// It works on LIFO Principle => Last in First Out
// we can called on array

let a1:number[]=[];

a1.push(10);
console.log(a1);
a1.push(45,20,31,25);
console.log(a1);
let res=a1.pop();
console.log(a1);
console.log('Poped Value is '+res);


