/*An abstraction is a way of hiding the implementation details and showing only the functionality to the users.
 In other words, it ignores the irrelevant details and shows only the required one.

 hide all the complexity and show only the essentials
 for this example radius and draw method are essentials 
 defaultLocation and computeOptimumLocation are complexity which will be hidden
*/


function Circle(radius) {
    this.radius = radius;
    // defining hidden properties
    let defaultLocation = {X: 1, y: 2};
    let computeOptimumLocation= function(factor) {
        // here we pass logic
      
    }

    this.draw = function() {
        console.log('draw');
    }
}

const circleobj = new Circle(10);

circleobj.draw();