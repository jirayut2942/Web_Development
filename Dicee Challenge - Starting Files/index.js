// var random dice1-6 player 1
var randomNumber1  =  Math.floor(Math.random() * 6) + 1;randomNumber1;

var randomNumber2  =  Math.floor(Math.random() * 6) + 1;randomNumber2;

document.querySelector(".img1").setAttribute("src", "images/" + "dice" + randomNumber1 +".png");

document.querySelector(".img2").setAttribute("src", "images/" + "dice" + randomNumber2 +".png");

if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw!";
}

else if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 win!";
}

else {
    document.querySelector("h1").innerHTML = "Player 2 win! 🚩";
}

