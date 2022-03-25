//Json => java script Object Notation
// use => to send/recive a data backend & frontEnd
//json object store a data in Key & value format
var obj = {
    fname: 'Sumit',
    'lname': 'Raokhande',
    id: 9
};
//1 dot operator
//2 Square operator
// console.log(`
//   First Name :: ${obj.fname}
//   Last Name  :: ${obj.lname}
//   ID         :: ${obj.id}
// `)
//2 Square operator
console.log("\n---------Square Operator-------------\n  First Name :: ".concat(obj["fname"], "\n  Last Name  :: ").concat(obj['lname'], "\n  ID         :: ").concat(obj['id'], "\n"));
