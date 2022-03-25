//Json => java script Object Notation
// use => to send/recive a data backend & frontEnd
//json object store a data in Key & value format


let obj={
    fname:'Sumit',
    'lname':'Raokhande',
    id:9
}

//1 dot operator
//2 Square operator

// console.log(`
//   First Name :: ${obj.fname}
//   Last Name  :: ${obj.lname}
//   ID         :: ${obj.id}
// `)


//2 Square operator

console.log(`
---------Square Operator-------------
  First Name :: ${obj["fname"]}
  Last Name  :: ${obj['lname']}
  ID         :: ${obj['id']}
`)