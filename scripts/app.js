//Add buttons for functions

/*Create a Tomagatchi class and instatiate class (hunger, sleepiness, boredom, age);
- hunger increments by 1 every 15 seconds; decrements by one when fed
- sleepiness increments by 3 every 15 seconds with lights off; decrements by 1 when lights on
- boredom increments by 2 every 15 seconds; decrements by 1 when played with
- age increments by 1 every minute alive
- Tomagatchi dies when hunger, sleepiness, or boredom reaches 10
- when Tomagatchi age increments by 2, it grows

- to implement timer => use set interval 
https://stackoverflow.com/questions/21638574/run-a-function-every-30-seconds-javascript/49237391
*/

class Tomagatchi {
    constructor(name, hunger, sleepiness, boredom, age){
        this.name = name;
        this.hunger = hunger;
        this.sleepiness = sleepiness;
        this.boredom = boredom;
        this.age = age;
    }
    timer() {
        let time = 0;

        const increaseHunger = () => {
            console.log(`${this.name}'s hunger increased by one`)
        }; 

        const increaseBoredom = () => {
            console.log(`${this.name}'s hunger increased by two`)
        }; 

        const increaseSleepiness = () => {
            console.log(`${this.name}'s hunger increased by three`)
        }; 

        const timer = setInterval(function () {
            increaseHunger();
            increaseBoredom();
            increaseSleepiness()
            console.log(`${time} seconds elasped`)
            time+= 15
        }, 15000)

    }
    feed () {

    }
    // wake(){

    // }
    // play(){

    // }
    // age(){

    // }
};

    let figure = new Tomagatchi('Furball', 0, 0, 0, 0)

    // figure.timer()
//Display metrics for pet


// Form 