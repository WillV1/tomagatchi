/*Create a Tomagatchi class and instatiate class (hunger, sleepiness, boredom, age);
- hunger increments by 1 every 15 seconds; decrements by one when fed
- sleepiness increments by 2 every 15 seconds with lights off; decrements by 1 when lights on
- boredom increments by 3 every 15 seconds; decrements by 1 when played with
- age increments by 1 every minute alive
- Tomagatchi dies when hunger, sleepiness, or boredom reaches 10
- when Tomagatchi age increments by 2, it grows

- to implement timer => use set interval 
https://stackoverflow.com/questions/21638574/run-a-function-every-30-seconds-javascript/49237391
*/
const submit = document.getElementById("submit");
const petName = document.getElementById("pet-name");
const feed = document.getElementById("feed");
const play = document.getElementById("play");
const sleep = document.getElementById("sleep");
const light = document.getElementById("light");
const dayTime = document.querySelector(".day");
const welcomeScreen = document.querySelector(".welcome");

class Tomagatchi {
  constructor(name, hunger, sleepiness, boredom, age) {
    this.name = name;
    this.hunger = hunger;
    this.sleepiness = sleepiness;
    this.boredom = boredom;
    this.age = age;
  }
  timer() {
    let time = 0;
    let hunger = 0;
    let boredom = 0;
    let sleepiness = 0;
    const timeCount = document.getElementById('time');
    const hungerCount = document.getElementById('hunger');
    const boredomCount = document.getElementById('boredom');
    const sleepCount = document.getElementById('sleep');
    // const increaseHunger = () => {
        
    //     console.log(`${this.name}'s hunger increased by one`);

    // };

    // const increaseBoredom = () => {
    //     console.log(`${this.name}'s hunger increased by three`);
    // };

    // const increaseSleepiness = () => {
    //     console.log(`${this.name}'s hunger increased by two`);
    // };

    const timer = setInterval(function () {
        // increaseHunger();
        // increaseBoredom();
        // increaseSleepiness();
        console.log(`${time} seconds elasped`);
        timeCount.textContent = `${time += 3} seconds`;
        hungerCount.textContent = hunger += 1;
        boredomCount.textContent = boredom += 3;
        sleepCount.textContent = sleepiness += 2;
        // time += 15;
    }, 3000);
  }
  feed() {
    console.log(`${this.name}'s hunger decreased by one`);
  }
  wake() {
    console.log(`${this.name}'s sleepiness decreased by one`);
  }
  play() {
    console.log(`${this.name}'s boredom decreased by one`);
  }
  // age(){

  // }
}

let figure = new Tomagatchi("Furball", 0, 0, 0, 0);

// figure.timer()
//Display metrics for pet

// Form

//Decrease hunger, boredom and sleepiness
//Add buttons for functions


submit.addEventListener("click", (e) => {
  const loginScreen = document.querySelector(".login");
  const welcome = document.querySelector(".welcome h2");
  const userName = document.getElementById("username").value;

  e.preventDefault();
  loginScreen.style.display = "none";
  welcomeScreen.style.display = "block";
  welcome.innerHTML = `<h2>Welcome ${userName}!</h2>`;
});

petName.addEventListener("keypress", (e) => {
    console.log(e.key)
    if(e.key === 'Enter'){
    const mainScreen = document.getElementById('main-screen');
    const petGreeting = document.querySelector('.day h2')
    const pet = document.getElementById('pet-name').value;

  welcomeScreen.style.display = "none";
  mainScreen.style.display = "block";
  petGreeting.innerHTML = `${pet}`
  figure.timer();
    }
});

feed.addEventListener("click", (e) => {
  figure.feed();
});

play.addEventListener("click", (e) => {
  figure.play();
});

sleep.addEventListener("click", (e) => {
  figure.wake();
});

light.addEventListener("click", (e) => {
  dayTime.classList.toggle("night");
});
