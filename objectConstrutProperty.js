// Factory function 
// function createCircle(radius) {
//     return {
//         radius,
//         draw: function() {
//         console.log('draw');
//         }
//     };
// }

// const circle = createCircle(5);
// console.log(circle);
// // console.log(createCircle(3));

// Constructor function

function Circle(radius) {
    this.radius= radius,
    this.draw= function () {
        console.log('draw')
    }
}

console.log(Circle.call({}, 1));
// const another = new Circle(1);
// console.log(another);


// Exection in the browser console

// another.constructor;
// circle.constructor;