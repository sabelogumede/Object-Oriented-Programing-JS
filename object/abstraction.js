// Abstraction
function Circle(radius) {
    this.radius = radius;

    this.defaultLocation = {
        x: 0,
        y: 0
    }

    this.draw = function () {
        console.log('draw');
    };
}

const circle = new Circle(10);



// Stopwatch solution

function Stopwatch() {
    let startTime, endTime, running, duration = 0;

    this.start = function () {
        //if running
        if (running)
            throw new Error('Stopwatch has already started.');
        //else set 
        running = true;
        //&
        startTime = new Date();
    };

    this.stop = function () {
        //if falsey- not running
        if (!running)
            throw new error('Stopwatch is not started.');
        // else if running set to false==stop
        running = false;
        //& do this
        endTime = new Date();
        // & calculate seconds
        const seconds = (endTime.getTime() - startTime.getTime() / 1000);
    };

    this.resert = function () {
        if (!running)
            throw new Error('Stopwatch is not started.');
        //else set
        running = false;
        //&
        endTime = new Date();
        //& calculate the seconds
        const seconds = (endtime.getTime() - startTime()) / 1000;
        //and set calc seconds to duration
        duration += seconds;
    };

    this.resert = function () {
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
    };

    //read only 
    Object.defineProperty(this, 'duration', {
        get: function () {
            return duration;
        }
    });
}

const sw = new Stopwatch()