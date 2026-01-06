let choices = document.querySelectorAll(".choice");
let para = document.querySelector("#msg");
let contain = document.querySelector(".msg-container");

let userS = document.querySelector("#user-score");
let compS = document.querySelector("#comp-score");

let userScore = 0;
let compScore = 0;

function genCompChoice() {
  const options = ["rock", "paper", "scissors"];
  let randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
}

function playGame(userChoice) {
  console.log("user choice = ", userChoice);
  const compChoice = genCompChoice();
  console.log("comp choice = ", compChoice);

  if (userChoice === compChoice) {
    para.innerHTML = "It was draw.";
    contain.style.backgroundColor = "#081b31";
  } else {
    if (userChoice === "rock") {
      
      // comp - paper, scissors
      if (compChoice === "paper") {
        para.innerHTML = "You lost. paper beats rock";
        contain.style.backgroundColor = "red";
        compScore++;
        compS.innerHTML = compScore;
      } 
      
      else {
        para.innerHTML = "You Won!. rock beats scissors";
        contain.style.backgroundColor = "green";
        userScore++;
        userS.innerHTML = userScore;
      }

    } else if (userChoice === "paper") {

      // comp - rock, scissors
      if (compChoice === "rock") {
        para.innerHTML = "You Won!. paper beats rock";
        contain.style.backgroundColor = "green";
        userScore++;
        userS.innerHTML = userScore;
      } 
      else {
        para.innerHTML = "You lost. scissors beats paper";
        contain.style.backgroundColor = "red";
        compScore++;
        compS.innerHTML = compScore;
      }
    } else {

      // comp - rock paper
      if (compChoice === "rock") {

        para.innerHTML = "You lost. rock beats scissors";
        contain.style.backgroundColor = "red";
        compScore++;
        compS.innerHTML = compScore;

      } else {
        para.innerHTML = "You Won!. scissors beats paper";
        contain.style.backgroundColor = "green";
        userScore++;
        userS.innerHTML = userScore;
      }
    }
  }
}

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    let userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
