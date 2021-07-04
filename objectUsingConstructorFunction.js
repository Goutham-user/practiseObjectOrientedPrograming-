// Creating object using Construtor function has this key word inside the function and new key word while calling it and function name should start with Capital letter


function Circle(radius) {
    this.radius= radius,
    this.draw= function () {
        console.log('draw')
    }
}

const another = new Circle(1);
console.log(another);
