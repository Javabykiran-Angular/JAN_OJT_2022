//Type Assertion

var a:any;

//1 Angle Bracket
//2 as syntax

//1 Angle bracket 

var temp=(<string> a);
// temp.

//2 as syntax
var temp2=(a as string);
// temp2.

// Operators
// Airthematic => +,-,*,/,%
// Logical => &&,||
// Conditional => !=,>=,<=,==(its only checks value),===(Strongly equality it checks its data type as well as its value e.g a===b)
// Bitwise=> &,|,^,!,~,<<,>>
// Relational => <,>,==
// Assignment => =.+=,-=,/=,*=
// ternary => condition ? Expression1 : expression2
// unary => post/pre dec/inc ++,--,++a,a--

// Control statement

// if,if-else,nested if-else,break,continue,switch

// if(2<4){
//   console.log("Condition is true");
// }

var a1:number=21
// if(a1<4){
//   console.log("Condition is true");
// }else{
//   console.log("Condition is False");
// }


var choice:number=2;
// switch(choice){
//   case 1 : console.log("U r in case 1");
//           break;
//   case 2 : console.log("U r in case 2");
//           break;
//   default:console.log("U r in default case");
//            break;
// }


// Loop Statement
//for,while,do-while,foreach

// while
var count=5;
// 
// while(count!=0){
//   console.log("Count is "+count)
//   count--;
// }

//do-while

// do{
//   console.log("---- Count--- "+count);
//   count--;
// }while(count!=0)

// for(int a=0;a<4;a++){}

// for(var a2=0;a2<4;a2++){
//   console.log("A2 value is "+a2)
// }
// console.log("After for loop "+a2)

for (let i=0;i<4;i++){
  console.log("i value is "+i)
  // const pi=3.14;
}
// console.log('After for loop '+i)

//let has scope => within nearest block
// var scope => It has global scope

// const 
// const has scope is local as well as global 
const pi=3.14;
// pi=8;
