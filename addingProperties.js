function Circle(radius) {
    this.radius= radius;
    this.draw = function() {
        console.log('draw');
    }
}

// adding a new property using dot notation
const circlenewobj = new Circle(10);
circlenewobj.location = {x: 1};

// new obj using bracket notation / addding a new property
const circleObj_2 = new Circle(40);
const propertyName = 'anything';
circleObj_2[propertyName] = { y: 1};

// deleting properties 
/*
delete obj.propertyname;

or 

delete obj['propertyname]
*/