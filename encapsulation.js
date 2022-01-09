

/*
Encapsulation is defined as the wrapping up of data under a single unit.
It is the mechanism that binds together code and the data it manipulates.
Another way to think about encapsulation is,
it is a protective shield that prevents the data from being accessed by the code outside this shield.
*/

let employee = {
    basicSalary : 30000,
    overtime : 3,
    rate : 10,
    getwage: function() {
        return this.basicSalary + (this.overtime * this.rate);
    }
};

console.log(employee.getwage());


