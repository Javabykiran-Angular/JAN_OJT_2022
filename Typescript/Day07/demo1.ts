
let a:number[]=[];
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
let b=[10,21,33,4,2,8,78,99,9,3,6,45,50];
let temp=b.slice(2,b.length-2);
// console.log(temp);

//map
// element by element operation perform

let c=[2,3,4,5,6];
let temp1=c.map((myvalue)=>{
  return (myvalue*myvalue)
})

// console.log('Original Array is '+c);
// console.log('Resulatant Array is '+temp1)

//derefence of array

let d=[44,21,9,8,3,6];

let [t1,t2,t3]=d;
// console.log(d)
// console.log(`
//   t1 :: ${t1}
//   t2 :: ${t2}
//   t3 :: ${t3}
// `)

let [,,n3]=d;
// console.log(n3)

let [,,a3,...arr]=d;
// console.log(arr)


// Interview for JS 

let a1=[4,5,6,7,8];
let b1:number[]=[];

b1=a1;

console.log('a1 value is '+a1)
console.log('B1 value is '+b1)
a1.push(10);
console.log('-------------------')
console.log('a1 value is '+a1)
console.log('B1 value is '+b1)

