"use strict";
exports.__esModule = true;
exports.EMPDetails = void 0;
var department_1 = require("./department");
var EMPDetails = /** @class */ (function () {
    function EMPDetails(f, l, sal, role) {
        this.fname = f;
        this.lname = l;
        this.sal = sal;
        this.dept = new department_1.Department(role);
    }
    EMPDetails.prototype.Display = function () {
        console.log("\n        ------------Employee Details-----------\n        First Name   ::".concat(this.fname, "\n        Last Name    ::").concat(this.lname, "\n        Salary       ::").concat(this.sal, "\n        Department   ::").concat(this.dept.getRole(), "\n        "));
    };
    return EMPDetails;
}());
exports.EMPDetails = EMPDetails;
