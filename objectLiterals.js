let circle = {
    radius: 4,
    location: {
        x:1,
        y:2
    },
    draw: function() {
        console.log('draw');
    }
};

circle.draw();
console.log(circle.location['y']);
