// Iteration 5: Store the player score and display it on the game over screen

let score=localStorage.getItem("gameScore");

document.getElementById("score-board").innerText=score;

document.getElementById("play-again-button").onclick=()=>{
    location.href="./game.html";
}
//console.log(score);