//======================================Getting the scores to local storage=============================================//

var users = JSON.parse(localStorage.getItem("users"));
var currentuser = JSON.parse(localStorage.getItem("currentuser"));

function account() {
    for (i = 0; i < users.length; i++) {
        if (currentuser == users[i].username)
            return i
    }
}

if(users[account()] == undefined){
    users[account()] == "Guest"
}

try{
    if(users[account()].highscore == null || users[account()].highscore == undefined){
        users[account()].highscore = 0;
    }
}
catch(err){

}

highscores = JSON.parse(localStorage.getItem("highscores"));
highscores.sort(compare)
localStorage.setItem("highscores", JSON.stringify(highscores));

if(highscores == null || highscores == undefined){
    highscores = []
    localStorage.setItem("highscores", JSON.stringify(highscores));
}

function highscore(nscore){
    if(nscore > users[account()].highscore){
        users[account()].highscore = nscore
        localStorage.setItem("users", JSON.stringify(users));
    }

    var newscore = {}
    newscore.name = users[account()].username
    newscore.score = nscore

    highscores.push(newscore);
    localStorage.setItem("highscores", JSON.stringify(highscores));
}

function compare(a, b) {
    // Use toUpperCase() to ignore character casing
    const aa = a.score
    const bb = b.score
  
    let comparison = 0;
    if (aa > bb) {
      comparison = 1;
    } else if (aa < bb) {
      comparison = -1;
    }
    return comparison * -1;
  }

  
function resetLboard(){
    for(lol = 0; lol < 5; lol++){
        Lname = document.getElementById(`no${lol + 1}name`)
        Lscore = document.getElementById(`no${lol + 1}score`)
    
    
        try {
            highscores[lol]
            Lname.innerHTML = highscores[lol].name
            Lscore.innerHTML = highscores[lol].score
        }
        catch(err){
    
            Lname.innerHTML = "Unknown"
            Lscore.innerHTML = "0"
    
        }
      }
}

resetLboard()
  

  
//===================================================================================================================//

var myGamePiece;
var myObstacles = [];
var myScore;
var myHighScore;
var mySound;
var myBackground;
var currentscore;
var allScores = [0, 0, 0, 0, 0];
var counter = 0;

var gameboard = document.getElementById("game")

//Display menu screen after loading the page or playing the game

function displayGame() {
    var x = document.getElementById("minigame");
    

    if (x.style.display == "none") {
        console.log("hi")
        x.style.display = "block";
        resetLboard()
    } else {
        x.style.display = "block";
        resetLboard()


    }

}

//Return to menu screen from leaderboard screen

function returnMainMenu() {
    document.getElementById("leaderboard").style.display = "none";
    document.getElementById("minigame").style.display = "block";
}

//Go to leaderboard screen from menu screen

function GameLeaderboard() {
    document.getElementById("minigame").style.display = "none";
    document.getElementById("leaderboard").style.display = "block";
}

//Start game with easy settings (speed is slow)

function startGameEasy() {

    document.getElementById("instructionseasy").style.display = "none";
    
    myGamePiece = new component(30, 30, users[account()].picture, 50, 120, "image");
    myBackground = new component(1050, 400, "http://mediad.publicbroadcasting.net/p/idaho/files/styles/medium/public/201610/073016_pioneer_fire_inciweb.jpeg", 0, 0, "image");
    myScore = new component("30px", "Consolas", "black", 750, 40, "text");
    myEnd = new component("30px", "Consolas", "black", 400, 40, "text");
    mySound = new sound("../images/Fire2.mp3");

    myGameArea.start();
    myGameArea.interval = setInterval(updateGameArea, 7);
}

function CountDownEasy() {
    var myTimer = setInterval(myClock, 1000);
    var c = 5;

    function myClock() {
        document.getElementById("easycountdown").innerHTML = --c;

        if (c == 0) {
            clearInterval(myTimer);
            document.getElementById("easycountdown").innerHTML = 5;
        }
    }
}

//Display 3-second intermission when easy difficulty is selected

function GameInstructionsEasy() {
    document.getElementById("minigame").style.display = "none";
    var x = document.getElementById("instructionseasy")
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "block";
    }
    setTimeout(startGameEasy, 5000);
}

//Start game with medium settings (speed is normal)

function startGameMedium() {
    document.getElementById("instructionsmedium").style.display = "none";
    myGamePiece = new component(30, 30, users[account()].picture, 50, 120, "image");
    myBackground = new component(1050, 400, "http://mediad.publicbroadcasting.net/p/idaho/files/styles/medium/public/201610/073016_pioneer_fire_inciweb.jpeg", 0, 0, "image");
    myScore = new component("30px", "Consolas", "black", 750, 40, "text");
    myEnd = new component("30px", "Consolas", "black", 400, 40, "text");
    mySound = new sound("../images/Fire2.mp3");
    myGameArea.start();
    myGameArea.interval = setInterval(updateGameArea, 5);
}

function CountDownMedium() {
    var myTimer = setInterval(myClock, 1000);
    var c = 5;

    function myClock() {
        document.getElementById("mediumcountdown").innerHTML = --c;
        if (c == 0) {
            clearInterval(myTimer);
            document.getElementById("mediumcountdown").innerHTML = 5;
        }
    }
}




//Display 3-second intermission when medium difficulty is selected

function GameInstructionsMedium() {
    document.getElementById("minigame").style.display = "none";
    var x = document.getElementById("instructionsmedium")
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "block";
    }
    setTimeout(startGameMedium, 5000);
}

//Start game with hard settings (speed is fast)

function startGameHard() {
    document.getElementById("instructionshard").style.display = "none";
    myGamePiece = new component(30, 30, users[account()].picture, 50, 120, "image");
    myBackground = new component(1050, 400, "http://mediad.publicbroadcasting.net/p/idaho/files/styles/medium/public/201610/073016_pioneer_fire_inciweb.jpeg", 0, 0, "image");
    myScore = new component("30px", "Consolas", "black", 750, 40, "text");
    myEnd = new component("30px", "Consolas", "black", 400, 40, "text");
    mySound = new sound("../images/Fire2.mp3");
    myGameArea.start();
    myGameArea.interval = setInterval(updateGameArea, 1);
}

//Display 3-second intermission when hard difficulty is selected

function CountDownHard() {
    var myTimer = setInterval(myClock, 1000);
    var c = 5;

    function myClock() {
        document.getElementById("hardcountdown").innerHTML = --c;
        if (c == 0) {
            clearInterval(myTimer);
            document.getElementById("hardcountdown").innerHTML = 5;
        }
    }
}

function GameInstructionsHard() {
    document.getElementById("minigame").style.display = "none";
    var x = document.getElementById("instructionshard")
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "block";
    }
    setTimeout(startGameHard, 5000);
}

//Variable of game in canvas

var myGameArea = {

    canvas: document.createElement("canvas"),

    start: function () {

        this.canvas.width = 1050; 
        this.canvas.height = 400; 

        this.canvas.id = "canvasgame";
        this.context = this.canvas.getContext("2d");


        gameboard.appendChild(this.canvas)
        // document.body.insertBefore(this.canvas, gameboard);


        this.frameNo = 0;

        //Movement settings (up and down)
        window.addEventListener('keydown', function (e) {
            myGameArea.key = e.keyCode;
        })

        window.addEventListener('keyup', function (e) {
            myGameArea.key = false;
        })
        //Disable scrolling
        window.addEventListener("keydown", function (e) {
            if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
                e.preventDefault();
            }
        }, false);
    },

    clear: function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },

    stop: function () {
        clearInterval(this.interval);
    }
}

function component(width, height, color, x, y, type) {
    this.type = type;
    if (type == "image" || type == "background") {
        this.image = new Image();
        this.image.src = color;
    }
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;

    this.update = function () {
        ctx = myGameArea.context;
        if (this.type == "text") {
            ctx.font = this.width + " " + this.height;
            ctx.font = "30px Comic Sans MS";
            ctx.fillStyle = "black";
            ctx.fillText(this.text, this.x, this.y);
        } else if (type == "image") {
            ctx.drawImage(this.image,
                this.x,
                this.y,
                this.width, this.height);
            if (type == "background") {
                ctx.drawImage(this.image,
                    this.x + this.width, this.y, this.width, this.height);
            }
        } else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }

    this.newPos = function () {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.type == "background") {
            if (this.x == -(this.width)) {
                this.x = 0;
            }
        }
        this.hitBottom();
        this.hitTop();
    }

    this.hitBottom = function () {
        var rockbottom = myGameArea.canvas.height - myGamePiece.height;
        if (myGamePiece.y > rockbottom) {
            myGamePiece.y = rockbottom;
        }
    }

    this.hitTop = function () {
        var rocktop = 0;
        if (myGamePiece.y < rocktop) {
            myGamePiece.y = rocktop;
        }
    }

    this.crashWith = function (otherobj) {
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);
        var crash = true;
        if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
            crash = false;
        }
        return crash;
    }
}

//Ends the game

function gameOver() {
    var a = confirm("Game over, your score is " + myGameArea.frameNo + "!\nWould you like to return to the main menu?");
    var b = document.getElementById("canvasgame");
    if (a == true) {
        b.parentElement.removeChild(b);
        myObstacles = [];
        mySound.stop();

        highscore(currentscore);
        resetLboard()
        displayGame();
        location.reload()

    } 
    else {
        alert("Goodbye!");
        window.location.href = "index.html" 
    }
}

function updateGameArea() {

    var x, height, gap, minHeight, maxHeight, minGap, maxGap;

    for (i = 0; i < myObstacles.length; i += 1) {
        if (myGamePiece.crashWith(myObstacles[i])) {
            mySound.play();
            myGameArea.stop();
            setTimeout(gameOver, 1000);
            counter = counter + 1;
        }
    }

    myGameArea.clear();
    myBackground.newPos();
    myBackground.update();
    myGameArea.frameNo += 1;
    myGamePiece.speedX = 0;
    myGamePiece.speedY = 0;

    if (myGameArea.key && myGameArea.key == 38) { myGamePiece.speedY = -2; }

    if (myGameArea.key && myGameArea.key == 40) { myGamePiece.speedY = 2; }

    if (myGameArea.frameNo == 1 || everyinterval(150)) {
        x = myGameArea.canvas.width;
        minHeight = 20;
        maxHeight = 200;
        height = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight);
        minGap = 80;
        maxGap = 200;
        gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
        myObstacles.push(new component(10, height, "green", x, 0));
        myObstacles.push(new component(10, x - height - gap, "green", x, height + gap));
    }

    for (i = 0; i < myObstacles.length; i += 1) {
        myObstacles[i].speedX = -1;
        myObstacles[i].newPos();
        myObstacles[i].update();
    }

    currentscore = myGameArea.frameNo;

    myScore.text = "SCORE: " + currentscore; //Display current score
    myEnd.text = "RUN!";
    myScore.update();
    myEnd.update();
    myGamePiece.newPos();
    myGamePiece.update();
}

//For sound effect when the game ends

function sound(src) {

    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function () {
        this.sound.play();
    }
    this.stop = function () {
        this.sound.pause();
    }
}

function everyinterval(n) {
    if ((myGameArea.frameNo / n) % 1 == 0) { return true; }
    return false;
}




