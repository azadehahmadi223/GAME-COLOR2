let numClick = -1;
let userPattern = [];
let correctPattern =  [];
let possiblecolors = ["red", "blue", "yellow", "green"];

let level = 0;
let highscore = 0;
document.querySelector('body').style.backgroundColor="#19376D"


$(".button").click(function(buttonClicked){
    numClick++;
    let color =buttonClicked.target.id;
    clickAnimation("#" + color);
    playAudio(color);
    checkAnswer(color);
});

function checkAnswer(color){
    userPattern.push(color);
    if(color == correctPattern[numClick]){
    if(userPattern.length == correctPattern.length){
        setTimeout(function(){
            userPattern = [];
            numClick = -1;
            nextSequence();
        }, 1000);
    } 
}else{
     $("h2").text("Game over! Hit another key to try again! ");
     userPattern = [];
        correctPattern = [];

        if(level > highscore){
            highscore = level;
            $("#higherscore").text(level);
            document.querySelector('body').style.backgroundColor="red";


        }
        level = 0;
        numClick = -1;
    }
}



function nextSequence(){
    level++;
    $("#level").text(level);
    let rand = Math.floor(Math.random() * 4);
    let color = possiblecolors[rand];
    correctPattern.push(color);
    playAudio(color);
    clickAnimation("#" + color)
}

function playAudio(color){
    let relPath = `sounds/${color}.mp3`;
    let audio = new Audio(relPath);
    audio.play();
}

function clickAnimation(id){
    $(id).fadeOut(100).fadeIn(100);
}

$(document).keydown(function(){
    if(level <= 0){
        $("h2").text("The game begins!")
        nextSequence();
    }
});