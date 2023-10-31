// Iteration 2: Generate 2 random number and display it on the screen
let number1= Math.round(Math.random()*100);
let number2= Math.round(Math.random()*100)

let numberBox1 = document.getElementById("number1");
let numberBox2 = document.getElementById("number2");

numberBox1.innerText=number1;
numberBox1.innetText=number2;
// Iteration 3: Make the options button functional
let greaterThan=document.getElementById("greater-than");
let smallerThan=document.getElementById("lesser-than");
let equalTo=document.getElementById("equal-to");
let score=0;

greaterThan.onclick=()=>{
    if(number1>number2){
        score++;
        resetTime(timerId);
    }else{
        location.href="./gameover.html"
    }

    number1= Math.round(Math.random()*100);
    number2= Math.round(Math.random()*100);
    numberBox1.innerText=number1;
    numberBox2.innetText=number2;

}

smallerThan.onclick=()=>{
    if(number1<number2){
        score++;
        resetTime(timerId);
    }else{
        location.href="./gameover.html"
    }

    number1= Math.round(Math.random()*100);
    number2= Math.round(Math.random()*100);
    numberBox1.innerText=number1;
    numberBox2.innetText=number2;}



    equalTo.onclick=()=>{
        if(number1==number2){
            score++;
            resetTime(timerId);
        }else{
            location.href="./gameover.html"
        }
    
        number1= Math.round(Math.random()*100);
        number2= Math.round(Math.random()*100);
        numberBox1.innerText=number1;
        numberBox2.innetText=number2;}


// Iteration 4: Build a timer for the game

let time=5;
let timer=document.getElementById("timer");
let timerId;


function startTimer(){
    time=5;
    timer.innerText=time;
    timerId=setInterval(()=>{
        time--;
    if(time==0){
        location.href="./gameover.html"
    }
        timer.innerText=time;
        localStorage.setItem("gameScore",score)
    },1000);
}   

    startTimer();


    function resetTime(timerId){
        clearInterval(timerId);
        startTimer();
    }