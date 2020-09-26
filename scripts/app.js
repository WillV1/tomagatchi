/*Global variables for DOM manipulation*/

const submit = document.getElementById("submit");
const petName = document.getElementById("pet-name");
const feed = document.getElementById("feed");
const play = document.getElementById("play");
const wake = document.getElementById("wake");
const exercise = document.getElementById("exercise");
const light = document.getElementById("light");
const dayTime = document.querySelector(".day");

const welcomeScreen = document.querySelector(".welcome");
const mainScreen = document.getElementById("main-screen");
const petGreeting = document.querySelector("#main-screen h1");
const pet = document.getElementById("pet-name").value;
// //thank you Stack overflow : https://stackoverflow.com/questions/49956141/how-to-iterate-on-htmlcollection
const images = Array.from(document.getElementsByTagName("img"));
const gameOver = document.createElement("h3");
const timeCount = document.getElementById("time");

let eatProgress = document.getElementById("hunger");
let boreProgress = document.getElementById("boredom");
let sleepProgress = document.getElementById("sleep");
const ageCount = document.getElementById("age");

let time = 0;
let hunger = 0;
let boredom = 0;
let sleepiness = 0;
let age = 0;
let timeChange = 1;

/*Create a Tomagatchi class and instatiate class (hunger, sleepiness, boredom, age);
- hunger increments by 1 every 10 seconds; decrements by one when fed
- sleepiness increments by 2 every 10 seconds with lights off; decrements by 2 when lights on
- boredom increments by 3 every 10 seconds; decrements by 2 when played with
- age increments by 1 every 15 alive and it grows at set intervals
- Tomagatchi dies when hunger, sleepiness, or boredom reaches 10
- Player give the option to restart the game once the tomagatchi dies

- to implement timer => use set interval 
https://stackoverflow.com/questions/21638574/run-a-function-every-30-seconds-javascript/49237391
*/

class Tomagatchi {
  constructor(hunger, sleepiness, boredom, age) {
    this.hunger = hunger;
    this.sleepiness = sleepiness;
    this.boredom = boredom;
    this.age = age;
  }
  timer() {
    /*set up metrics and timer to increment
    array of objects for break points age /size
    */

    const sizes = [
      {
        age: 1,
        height: "50px",
        width: "50px",
      },
      {
        age: 2,
        height: "75px",
        width: "75px",
      },
      {
        age: 5,
        height: "100px",
        width: "100px",
      },
      {
        age: 8,
        height: "125px",
        width: "125px",
      },
      {
        age: 10,
        height: "150px",
        width: "150px",
      },
    ];

    const screenPetName = document.querySelector(".petname");

    gameOver.innerText = `${pet} died! What have you done?! Would you like to try again?`;
    gameOver.classList.add("game-over");

    const timer = setInterval(() => {
      timeCount.textContent = `${(time += 1)} seconds`;

      if (time % 10 === 0) {
        //progress bars to increment metrics https://stackoverflow.com/questions/9727508/dynamic-progress-bar-javascript-and-html
        const hungerProgress = () => {
          eatProgress.value++;
          if (this.hunger >= 10) {
            this.hunger = 10;
          }
          this.hunger = eatProgress.value;
          console.log(`${this.hunger}`);
        };

        const boredomProgress = () => {
          boreProgress.value += 3;
          if (this.boredom >= 10) {
            this.boredom = 10;
          }
          this.boredom = boreProgress.value;
          console.log(`${this.boredom}`);
        };

        const sleepyProgress = () => {
          sleepProgress.value += 2;
          if (this.sleepiness >= 10) {
            this.sleepiness = 10;
          }
          this.sleepiness = sleepProgress.value;
          console.log(`${this.sleepiness}`);
        };

        hungerProgress();
        boredomProgress();
        sleepyProgress();
      }
      if (time % 15 === 0) {
        ageCount.textContent = this.age += 1;
      }

      sizes.forEach((size) => {
        if (this.age === size.age) {
          const images = Array.from(document.getElementsByTagName("img"));
          images.forEach((image) => {
            image.style.height = size.height;
            image.style.width = size.width;
          });
        }
      });
      if (this.hunger >= 10 || this.boredom >= 10 || this.sleepiness >= 10) {
        screenPetName.append(gameOver);
        clearInterval(timer);
        document
          .querySelector(".character-move")
          .setAttribute("class", "character-end");
        petGreeting.classList.add("pet-gameover");
      }
    }, 1000);
  }
  feed() {
    if (eatProgress.value > 0) {
      eatProgress.value--;
      this.hunger = eatProgress.value;
    }
  }
  wake() {
    if (sleepProgress.value > 0) {
      sleepProgress.value -= 2;
      this.sleepiness = sleepProgress.value;
    }
  }
  play() {
    if (boreProgress.value > 0) {
      boreProgress.value -= 2;
      this.boredom = boreProgress.value;
    }
  }
  exercise() {
    //stackoverflow (forgot to post actual link before housing emergency)
    if (
      eatProgress.value > 0 &&
      sleepProgress.value > 0 &&
      boreProgress.value > 0
    ) {
      boreProgress.value -= 2;
      eatProgress.value++;
      sleepProgress.value++;
      this.hunger = eatProgress.value;
      this.sleepiness = sleepProgress.value;
      this.boredom = boreProgress.value;
    }
    document
      .querySelector(".character-move")
      .setAttribute("class", "character-workout");

    setTimeout(() => {
      document
        .querySelector(".character-workout")
        .setAttribute("class", "character-move");
    }, 1000);
  }
  restart() {
    let restartGame = document.getElementById("restart");
    restartGame.addEventListener("click", () => {
      gameOver.remove();
      document
        .querySelector(".character-end")
        .setAttribute("class", "character-move");
      timeCount.textContent = `${0} seconds`;
      hungerCount.textContent = 0;
      boredomCount.textContent = 0;
      sleepCount.textContent = 0;
      ageCount.textContent = 0;

      time = 0;
      this.hunger = 0;
      this.boredom = 0;
      this.sleepiness = 0;
      this.age = 0;

      const images = Array.from(document.getElementsByTagName("img"));
      images.forEach((image) => {
        image.style.height = "25px";
        image.style.width = "25px";
      });

      this.timer();
    });
  }
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
based on figure choice,
display Tomagatchi figure with movement
start timer on main screen
*/

let playScreen = petName.addEventListener("keypress", (e) => {
  console.log(e.key);
  if (e.key === "Enter") {
    const petGreeting = document.querySelector("#main-screen h1");
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
    const figureDisplay = document.querySelector(".container");
    const pandaFigure = document.getElementById("panda");
    const hamsterFigure = document.getElementById("hamster");
    const monkeyFigure = document.getElementById("monkey");

    welcomeScreen.style.display = "none";
    mainScreen.style.display = "flex";
    petGreeting.style.margin = "10px;";
    petGreeting.innerHTML = `${pet}`;

    if (figureChoice === panda) {
      pandaFigure.classList.add("character-move");
      figureDisplay.append(pandaFigure);
    } else if (figureChoice === hamster) {
      hamsterFigure.classList.add("character-move");
      figureDisplay.append(hamsterFigure);
    } else if (figureChoice === monkey) {
      monkeyFigure.classList.add("character-move");
      figureDisplay.append(monkeyFigure);
    }
    const images = Array.from(document.getElementsByTagName("img"));

    images.forEach((image) => {
      image.style.height = "25px";
      image.style.width = "25px";
    });
    figure.timer();
    figure.restart();
  }
});

//Decrease hunger, boredom and sleepiness; exercise

feed.addEventListener("click", () => {
  figure.feed();
});

play.addEventListener("click", () => {
  figure.play();
});

wake.addEventListener("click", () => {
  figure.wake();
});

let workout = exercise.addEventListener("click", () => {
  figure.exercise();
});

/*Change from light to dark and vice versa; consulted code snippet for toggle from 
https://www.w3schools.com/howto/howto_js_toggle_text.asp
TODO: figure out why error message on line 161
*/

light.addEventListener("click", (e) => {
  dayTime.classList.toggle("night");
  let lightId = document.getElementById("light");
  if (lightId.innerHTML === "Turn Off Light!") {
    lightId.innerHTML = "Turn On Light!";
  } else {
    lightId.innerHTML = "Turn Off Light!";
  }
});
