// function greet(hie, hello){
//     console.log(hie);
    
//     console.log(hello);
// }


// // greet('Hello world', 'hello hey');
// 



// add = (a,b) => {
//     return a+b;
// }

// add(1,2);
// console.log(add(1,8));
// 


// class Car{
//     constructor(name,color){
//         this.name =name;
//         this.color=color;
//     }
// }

// let myCar1 = new Car('Ford', 'red');
// let myCar2 = new Car('sports', 'blue');
// console.log(myCar2)
// console.log(myCar1.color)
// 



// let basicSalary = 30000;
// let overTime = 3;
// let rate = 10;

function getWage(basicSalary, overTime, rate ){
    return basicSalary + (overTime * rate)
}

console.log(getWage(30000, 3, 10));