/*Create a Tomagatchi class and instatiate class (hunger, sleepiness, boredom, age);
- hunger increments by 1 every 15 seconds; decrements by one when fed
- sleepiness increments by 2 every 15 seconds with lights off; decrements by 2 when lights on
- boredom increments by 3 every 15 seconds; decrements by 2 when played with
- age increments by 1 every minute alive and it grows
- Tomagatchi dies when hunger, sleepiness, or boredom reaches 10

- to implement timer => use set interval 
https://stackoverflow.com/questions/21638574/run-a-function-every-30-seconds-javascript/49237391
*/
const submit = document.getElementById("submit");
const petName = document.getElementById("pet-name");
const feed = document.getElementById("feed");
const play = document.getElementById("play");
const wake = document.getElementById("wake");
const light = document.getElementById("light");
const dayTime = document.querySelector(".day");
const welcomeScreen = document.querySelector(".welcome");

const timeCount = document.getElementById("time");
const hungerCount = document.getElementById("hunger");
const boredomCount = document.getElementById("boredom");
const sleepCount = document.getElementById("sleep");
const ageCount = document.getElementById("age");

let time = 0;
let hunger = 0;
let boredom = 0;
let sleepiness = 0;
let age = 0;
let timeChange = 1;

class Tomagatchi {
  constructor(hunger, sleepiness, boredom, age) {
    this.hunger = hunger;
    this.sleepiness = sleepiness;
    this.boredom = boredom;
    this.age = age;
  }
  // updateHunger() { 
  //   var element = document.getElementById('progress-bar');    
  //   let width = 0; 
  //   let identity = setInterval(scene, 10); 
  //   let scene = () => { 
  //     if (width >= 100) { 
  //       clearInterval(identity); 
  //     } else { 
  //       width++;  
  //       element.style.width = width + '%';  
  //     } 
  //   } 
  // } 
  timer() {
    /*set up metrics and timer to increment
    TODO: how to increment age by 1 on screen
    */
    const metrics = document.querySelector('.metrics');
    const gameOver = document.createElement('h4');
    gameOver.innerText = 'GAME OVER!';
    gameOver.classList.add('game-over');

    const timer = setInterval(() => {
      console.log(`${time} seconds elasped`);
      timeCount.textContent = `${(time += 5)} seconds`;
      
      hungerCount.textContent = this.hunger += 1;
      boredomCount.textContent = this.boredom += 3;
      sleepCount.textContent = this.sleepiness += 2;
      ageCount.textContent = this.age += .50
      if (this.hunger >= 10 || this.boredom >= 10 || this.sleepiness >= 10) {
        metrics.prepend(gameOver);
        clearInterval(timer);
      }  
    }, 5000);
  }
  feed() {
    hungerCount.textContent = this.hunger -= 1;
  }
  wake() {
    sleepCount.textContent = this.sleepiness -= 2;
  }
  play() {
    boredomCount.textContent = this.boredom -= 2;

  }
  age() {}
  //   death() {
  //       if (this.hunger === 10){
  //           console.log('Game Over!')
  //       }
  //   }
}

let figure = new Tomagatchi(hunger, sleepiness, boredom, age);

//transition between login and welcome screens

submit.addEventListener("click", (e) => {
  const loginScreen = document.querySelector(".login");
  const welcome = document.querySelector(".welcome h2");
  const userName = document.getElementById("username").value;

  e.preventDefault();
  loginScreen.style.display = "none";
  welcomeScreen.style.display = "block";
  welcome.innerHTML = `<h2>Welcome ${userName}!</h2>`;
});

/*transition between welcome and main screen;
display Tomagatchi figure
start timer on main screen
*/

let playScreen = petName.addEventListener("keypress", (e) => {
  console.log(e.key);
  if (e.key === "Enter") {
    const mainScreen = document.getElementById("main-screen");
    const petGreeting = document.querySelector(".day h1");
    const buttons = document.querySelector(".buttons");
    const pet = document.getElementById("pet-name").value;
    let figureChoice = document.querySelector("#figure").value;
    let panda = document
      .getElementsByTagName("option")[0]
      .getAttribute("value");
    let hamster = document
      .getElementsByTagName("option")[1]
      .getAttribute("value");
    let monkey = document
      .getElementsByTagName("option")[2]
      .getAttribute("value");
    let figureDisplay = document.createElement("div");

    welcomeScreen.style.display = "none";
    mainScreen.style.display = "block";
    petGreeting.innerHTML = `${pet}`;

    if (figureChoice === panda) {
      figureDisplay.innerHTML = '<img src="images/panda.png">';
      figureDisplay.classList.add('character');
      buttons.prepend(figureDisplay);
    } else if (figureChoice === hamster) {
      figureDisplay.innerHTML = '<img src="images/hamster.png">';
      
      buttons.prepend(figureDisplay);
    } else if (figureChoice === monkey) {
      figureDisplay.innerHTML = '<img src="images/monkey.png">';
      
      buttons.prepend(figureDisplay);
    }
    // figure.timer();
  }
});

//Decrease hunger, boredom and sleepiness

feed.addEventListener("click", (e) => {
  figure.feed();
});

play.addEventListener("click", (playScreen) => {
  figure.play(playScreen);
  let movement = document.querySelector('.character').classList.toggle('character-move')
});

wake.addEventListener("click", (e) => {
  figure.wake();
});

/*Change from light to dark and vice versa; consulted code snippet for toggle from 
https://www.w3schools.com/howto/howto_js_toggle_text.asp
TODO: figure out why error message on line 161
*/

light.addEventListener('click', (e) => {
  let lightId = document.getElementById('night');
  dayTime.classList.toggle('night');
  if (lightId.textContent = "Turn Off Light") {
    lightId.textContent = "Turn On Light";
  } else {
    lightId.textContent = "Turn Off Light";
  }
});
