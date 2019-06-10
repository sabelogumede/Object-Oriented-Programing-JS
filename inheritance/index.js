// function Circle(radius) {
//     // Circle = Instance memebers
//     this.radius = radius;

//     this.move = function () {
//         this.draw();
//         console.log('move');
//     }

//     // this.draw = function () {
//     //     console.log('draw');
//     // }
// }
// // Circle = Prototype memebers
// Circle.prototype.draw = function () {
//     // this.move();
//     console.log(this.radius + ' draw');
// }

// //instances of a  Circle class!
// const c1 = new Circle(1);
// const c2 = new Circle(2);

// Circle.prototype.toString = function () {
//     return 'Circle with radius ' + this.radius;
// }

//c1.toString()


// ----------------Iterating instance and Prototype members-----------------


// function Circle(radius) {
//     //Instance memebers
//     this.radius = radius;

//     this.move = function () {
//         // this.draw();
//         console.log('move');
//     }
// }

// //Circle class instance
// const c1 = new Circle(1);

// //Prototype member
// Circle.prototype.draw = function () {
//     console.log('draw');
// }

// //Object keys Only "Returns instance mebmers"
// console.log(Object.keys(c1));

// //For in loop "Return all members (instance + prototype)"
// for (let key in c1) console.log(key)

// ---------------Don't modify objects you don't own!-------------------

Array.prototype.shuffle = function () {
    // ...
};

const array = [];
array.shuffle();