//generating dice1 random number
var randomNumber1 = Math.floor(((Math.random() * 6) + 1));
//"changing" the 1st dice
document.querySelector(".dice1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
//generating dice2 random number
var randomNumber2 = Math.floor(((Math.random() * 6) + 1));
//"changing" the 2nd dice
document.querySelector(".dice2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

//changing <h1> according the results

if (randomNumber1 == randomNumber2) {
  document.querySelector("h1").innerHTML = "Draw";
} else if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
}