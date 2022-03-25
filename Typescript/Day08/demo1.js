//array of Object
var arrobj = [
    {
        id: 9,
        fname: 'Sumit',
        lname: 'Raokhande',
        country: {
            cid: 1,
            cname: 'India'
        },
        month: ['Jan', 'Feb', 'March'],
        result: [
            {
                sub: 'M1',
                marks: 40
            },
            {
                sub: 'M2',
                marks: 40
            },
            {
                sub: 'M3',
                marks: 45
            }
        ]
    },
    {
        id: 3,
        fname: 'Spruha',
        lname: 'Raokhande',
        country: {
            cid: 2,
            cname: 'US'
        },
        month: ['Aug', 'Feb', 'Dec'],
        result: [
            {
                sub: 'M1',
                marks: 50
            },
            {
                sub: 'M2',
                marks: 55
            },
            {
                sub: 'M3',
                marks: 65
            }
        ]
    },
    {
        id: 6,
        fname: 'Kiran',
        lname: 'Raokhande',
        country: {
            cid: 3,
            cname: 'Japan'
        },
        month: ['May', 'April', 'March'],
        result: [
            {
                sub: 'M1',
                marks: 42
            },
            {
                sub: 'M2',
                marks: 60
            },
            {
                sub: 'M3',
                marks: 75
            }
        ]
    }
];
for (var i = 0; i < arrobj.length; i++) {
    console.log("\n      Id         ::".concat(arrobj[i].id, "\n      First Name :: ").concat(arrobj[i].fname, "\n      Last Name  :: ").concat(arrobj[i].lname, "\n      country    :: ").concat(arrobj[i].country.cname, "\n      Month      :: ").concat(arrobj[i].month.join(' '), "\n   "));
    for (var j = 0; j < arrobj[i].result.length; j++) {
        console.log("\n      ------------Result---------------\n        Subject :: ".concat(arrobj[i].result[j].sub, "\n        Marks   :: ").concat(arrobj[i].result[j].marks, "\n     "));
    }
}
