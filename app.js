// Iteration 1: Make the Play button functional.
// Description: When the Play button is clicked the game page should be displayed.

let playBtn =  document.getElementById("play-button");
playBtn.addEventListener("click",function(){
    window.location.href="./game.html"
});
