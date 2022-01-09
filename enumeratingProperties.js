function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw')
    }
}

const circleobj = new Circle(10);

for(let key in circleobj){
    if (typeof circleobj[key] !== 'function')
    console.log(key, circleobj[key]);
}


//  2nd approach of getting all the properties in object

const keys = Object.keys(circleobj);

console.log(keys);


// in - check the property is existing or not using in

if ('radius' in circleobj){
    console.log('Circle has radius. property ')
}