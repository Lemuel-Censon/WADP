
function nextmth() {
    window.location.replace("../pages/StudyPlannerAugMthWADP.html");
}

function showhide() {
    var legen = document.getElementById("legend");
    if (legen.style.display === "none") {
        legen.style.display = "block";
    }
    else {
        legen.style.display = "none";
    }
}

var today = new Date();
document.getElementById("displayDate").innerHTML = today.toDateString();

var today = new Date();
document.getElementById("dispDate").innerHTML = today.toDateString();

var today = new Date();
document.getElementById("today").innerHTML = today.toDateString();

var today = new Date();
document.getElementById("now").innerHTML = today.toDateString();

var today = new Date();
document.getElementById("currentDate").innerHTML = today.toDateString();

var today = new Date();
document.getElementById("date").innerHTML = today.toDateString();

$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});


//==========================================================For quotes============================================================//

var keyquotes = [
    "Time is a great healer, but a poor beautician.<br>– Lucille S. Harper",
    "I am definitely going to take a course on time management… just as soon as I can work it into my schedule.<br>– Louis E. Boone",
    "Work expands so as to fill the time available for its completion.<br>–  Cyril Northcote Parkinson",
    "Your hardest times often lead to the greatest moments of your life. Keep going. Tough situations build strong people in the end.<br>― Roy T. Bennett,",
    "The trouble with being punctual is that nobody’s there to appreciate it.<br>– Franklin P. Jones",
    "If you have a dream, don’t just sit there. Gather courage to believe that you can succeed and leave no stone unturned to make it a reality.<br>― Roopleen",
    "I can accept failure, everyone fails at something. But I can't accept not trying.<br>- Michael Jordan"
];

var day = new Date();
var daily = day.getDay();
if (daily == 0) {
    document.getElementById("phrases").innerHTML = keyquotes[0];
}
if (daily == 1) {
    document.getElementById("phrases").innerHTML = keyquotes[1];
}
if (daily == 2) {
    document.getElementById("phrases").innerHTML = keyquotes[2];
}
if (daily == 3) {
    document.getElementById("phrases").innerHTML = keyquotes[3];
}
if (daily == 4) {
    document.getElementById("phrases").innerHTML = keyquotes[4];
}
if (daily == 5) {
    document.getElementById("phrases").innerHTML = keyquotes[5];
}
if (daily == 6) {
    document.getElementById("phrases").innerHTML = keyquotes[6];
}

//========================================================================================================================================================================================//


function goto19() {
    window.open("../pages/2019JanMthWADP.html");

}
function showtwo() {
    var Jul = document.getElementById("Jul");
    var Aug = document.getElementById("Aug");
    Jul.style.display = "none";
    Aug.style.display = "block";
}

function backfirst() {
    var Jul = document.getElementById("Jul");
    var Aug = document.getElementById("Aug");
    Jul.style.display = "block";
    Aug.style.display = "none";
}

function backtwo() {
    var Aug = document.getElementById("Aug");
    var Sep = document.getElementById("Sep");
    Sep.style.display = "none";
    Aug.style.display = "block";
}

function showthree() {
    var Aug = document.getElementById("Aug");
    var Sep = document.getElementById("Sep");
    Aug.style.display = "none";
    Sep.style.display = "block";
}

function showfour() {
    var Sep = document.getElementById("Sep");
    var Oct = document.getElementById("Oct");
    Sep.style.display = "none";
    Oct.style.display = "block";
}

function backthree() {
    var Oct = document.getElementById("Oct");
    var Sep = document.getElementById("Sep");
    Oct.style.display = "none";
    Sep.style.display = "block";
}

function showfive() {
    var Nov = document.getElementById("Nov");
    var Oct = document.getElementById("Oct");
    Oct.style.display = "none";
    Nov.style.display = "block";
}

function backfour() {
    var Oct = document.getElementById("Oct");
    var Nov = document.getElementById("Nov");
    Oct.style.display = "block";
    Nov.style.display = "none";
}

function showsix() {
    var Nov = document.getElementById("Nov");
    var Dec = document.getElementById("Dec");
    Nov.style.display = "none";
    Dec.style.display = "block";
}

function backfive() {
    var Nov = document.getElementById("Nov");
    var Dec = document.getElementById("Dec");
    Nov.style.display = "block";
    Dec.style.display = "none";
}

function video2() {
    var v1 = document.getElementById("video1");
    var v2 = document.getElementById("video2");
    v1.style.display = "none";
    v2.style.display = "block";
}

function video1() {
    var v1 = document.getElementById("video1");
    var v2 = document.getElementById("video2");
    v1.style.display = "block";
    v2.style.display = "none";
}
