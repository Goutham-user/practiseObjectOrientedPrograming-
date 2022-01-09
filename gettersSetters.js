function Circle(radius) {
    this.radius = radius;
    // defining hidden properties
    let defaultLocation = {X: 1, y: 2};
    this.getDefaultLocaation =function () {
        return defaultLocation;
    };

    this.draw = function() {
        console.log('draw');
    };

    Object.defineProperty(this, 'defaultLocation', {
        get: function (){
            return defaultLocation;
        },
        set: function(value){
         if(!value.x || !value.y){
             throw new Error('Invalid location.');
             defaultLocation =value;
         }   
        } 
    });
}

const circleobj = new Circle(10);

circleobj.draw();

// calling using set

circleobj.defaultLocation = 1;