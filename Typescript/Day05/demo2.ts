//Annonymous Functions

// Function does not have any name

  let temp=function (){
    console.log('First type of Annonymous Functions is called')
  }

  // temp();

  let temp1=function (a:number,b:number):number{
    return (a+b);
  }

  // let res=temp1(4,3);
  // console.log(`Result is ${res}`)

  // Fat Arrow function/Arrow Function
  // It is advanced version of Annonymous Functions

    let temp2=()=>{
      console.log('First type of Fat Arrow Function')
    }

    // temp2();

    let temp3=(a:number,b:number):number=>{
        return (a+b)
    }

    // console.log(`Result is ${temp3(5,5)}`)

    // Optional Parameter Function

    function add1(a:number,b?:number){

        console.log('Value of a is '+a) // 7
        console.log('Value of b is '+b) // 3
        console.log('Addition  of a+b is '+(a+b)) // 10
    }

    // add1(7)
    // add1(7,3)

    function add2(a:number,b?:number,c?:number){

      console.log('Value of a is '+a) // 
      console.log('Value of b is '+b) // 
      console.log('Value of C is '+c)
      console.log('Addition  of a+b+c is '+(a+b+c)) 
  }

  // add2(10,2)

  //Default parameter Function

  function add3(a:number,b:number=5){

        console.log('Value of a is '+a) // 6
        console.log('Value of b is '+b) // 7
        console.log('Addition  of a+b is '+(a+b)) // 13
    }

    // add3(6)

    //  add3(6,7)

    function add4(a:number=8,b?:number){

      console.log('Value of a is '+a) // 6
      console.log('Value of b is '+b) // 7
      console.log('Addition  of a+b is '+(a+b)) // 13
  }

  // add4(1,2);
  add4();