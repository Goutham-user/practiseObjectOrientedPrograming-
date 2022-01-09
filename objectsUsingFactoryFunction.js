
// Factory function  has a return key word

function createCircle(radius) {
    return {
        radius,
        draw: function() {
        console.log('draw');
        }
    };
}

// let circle = createCircle(5);
// console.log(circle);
console.log(createCircle(3));