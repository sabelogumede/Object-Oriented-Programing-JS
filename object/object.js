//Object
// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1
//     },
//     draw: function () {
//         console.log('Draw');
//     }
// }
// circle.draw();

// factory function - patterns
// function createCircle(radius) {
//     return {
//         radius,
//         draw: function () {
//             console.log('Draw');
//         }
//     };
// }
// const circle = createCircle(1);

//Contructor Function - patterns
// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function () {
//         console.log('draw');
//     }
// }
// const another = new Circle(1);

//functions are objects
// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function () {
//         console.log('draw');
//     }
// }
// Circle.call({}, 1);
// Circle.apply({}, [1, 2, 3]);

// const another = new Circle(1);

// 01 Enumerating Properties
// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function () {
//         console.log('draw');
//     }
// }

// const circle = new Circle(10);

//enumerate all members of a Object use a for loop
// for (let key in circle) {
//     if (typeof circle[key] !== 'function')
//         console.log(key, circle[key]);
// }

// to get all object keys
// const keys = Object.keys(circle);
// console.log(keys);

//check for an existence of a prop/method in object
// if ('radius' in circle)
//     console.log('Circle has a radius');


// Abstraction
// function Circle(radius) {
//     this.radius = radius;

//     let defaultLocation = {
//         x: 0,
//         y: 0
//     };

//     this.getDefaultLocation = function () {
//         return defaultLocation;
//     };

//     this.draw = function () {
//         console.log('draw');
//     };

//     Object.defineProperty(this, 'defaultLocation', {
//         get: function () {
//             return defaultLocation;
//         },
//         set: function (value) {
//             if (!value.x || !value.y)
//                 throw new Error('Invalid location.');

//             defaultLocation = value
//         }
//     });
// }

// const circle = new Circle(10);
// circle.defaultLocation = 1;
// circle.draw();