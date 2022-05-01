"use strict";
var Customer = /** @class */ (function () {
    function Customer(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    Customer.prototype.setfirstname = function (name) {
        this.firstname = name;
    };
    Customer.prototype.getfirstname = function () {
        return this.firstname;
    };
    Object.defineProperty(Customer.prototype, "getlastname", {
        get: function () {
            return this.lastname;
        },
        enumerable: false,
        configurable: true
    });
    return Customer;
}());
var cust = new Customer("rishabh", "rawat");
// cust.firstname = 'Martin';
// cust.lastname = 'luther';
console.log(cust);
cust.setfirstname("rishi");
console.log(cust.getfirstname());
console.log(cust);
console.log(cust.getlastname);
