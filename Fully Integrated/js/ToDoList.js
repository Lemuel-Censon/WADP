
//Retrieving data from local storage

var users = JSON.parse(localStorage.getItem("users"));
var currentuser = JSON.parse(localStorage.getItem("currentuser"));

var planlist = users[account()].plans

function account() {
    for (i = 0; i < users.length; i++) {
        if (currentuser == users[i].username)
            return i
    }
}

if (users[account()].plans == undefined || users[account()].plans == null) {

    users[account()].plans = []
    localStorage.setItem("users", JSON.stringify(users));

}

for(p = 0; p < planlist.length; p++){

    (function(aa){
        
        todostuff = document.getElementById("todostuff")

        div = document.createElement("div");
        div.id = "todolistsprint" + aa
        div.class = "col-3"
    
        var day = document.createElement("h3");
        day.innerHTML = "Day: " + planlist[aa].day
    
        var tofrom = document.createElement("h4");
        tofrom.innerHTML = "From: " + planlist[aa].timeStart
    
        var todo = document.createElement("h4");
        todo.innerHTML = "To: " + planlist[aa].timeEnd
    
        var action = document.createElement("p")
        action.innerHTML = "Action: " + planlist[aa].TDL
    
        var remark = document.createElement("p")
        remark.innerHTML = "Remarks: " + planlist[aa].remark
    
        var button = document.createElement("button")
        button.className = "btn btn-danger"
        button.innerHTML = "Remove"

        button.onclick = function(){
            identifier = findtodo(`${planlist[aa].day}${planlist[aa].timeStart}${planlist[aa].timeEnd}${planlist[aa].TDL}${planlist[aa].remark}`)
            todostuff.removeChild(todostuff.childNodes[identifier])
            console.log(identifier)
            
            planlist.splice(identifier, 1);
            localStorage.setItem("users", JSON.stringify(users));
            location.reload();
        }

        div.appendChild(day)
        div.appendChild(tofrom)
        div.appendChild(todo)
        div.appendChild(action)
        div.appendChild(remark)
        div.appendChild(button)
        todostuff.appendChild(div)
        
    })(p);
}

function findtodo(id){
    for(t = 0; t < planlist.length; t++){
        if(id == `${planlist[t].day}${planlist[t].timeStart}${planlist[t].timeEnd}${planlist[t].TDL}${planlist[t].remark}`){
            return t
        }
        
    }
}


function submit() {
    var yes = confirm("Are you sure you want to confirm your to-do-list inputs?");

    if (yes == true) {
        var plans = {}
        plans.day = document.getElementById("timeDay").value;
        plans.timeStart = document.getElementById("timeStart").value;
        plans.timeEnd = document.getElementById("timeEnds").value;
        plans.TDL = document.getElementById("list").value;
        plans.remark = document.getElementById("comments").value;
        plans.id = planlist.length;

        users[account()].plans.push(plans)
        localStorage.setItem("users", JSON.stringify(users));
        location.reload()
    }
}

function goback() {
    location.replace("Study Planner.html");
}










function Aug() {
    var jul = document.getElementById("Julmth");
    var aug = document.getElementById("Augmth");
    jul.style.display = "none";
    aug.style.display = "block";
}

function Jul() {
    var jul = document.getElementById("Julmth");
    var aug = document.getElementById("Augmth");
    jul.style.display = "block";
    aug.style.display = "none";
}

function Sep() {
    var aug = document.getElementById("Augmth");
    var sep = document.getElementById("Sepmth");
    aug.style.display = "none";
    sep.style.display = "block";
}

function Oct() {
    var sep = document.getElementById("Sepmth");
    var oct = document.getElementById("Octmth");
    sep.style.display = "none";
    oct.style.display = "block";
}

function Nov() {
    var oct = document.getElementById("Octmth");
    var nov = document.getElementById("Novmth");
    oct.style.display = "none";
    nov.style.display = "block";
}

function Dec() {
    var nov = document.getElementById("Novmth");
    var dec = document.getElementById("Decmth");
    nov.style.display = "none";
    dec.style.display = "block";
}

function backAug() {
    var aug = document.getElementById("Augmth");
    var sep = document.getElementById("Sepmth");
    aug.style.display = "block";
    sep.style.display = "none";
}

function backSep() {
    var sep = document.getElementById("Sepmth");
    var oct = document.getElementById("Octmth");
    sep.style.display = "block";
    oct.style.display = "none";
}

function backOct() {
    var oct = document.getElementById("Octmth");
    var nov = document.getElementById("Novmth");
    oct.style.display = "block";
    nov.style.display = "none";
}

function backNov() {
    var nov = document.getElementById("Novmth");
    var dec = document.getElementById("Decmth");
    nov.style.display = "block";
    dec.style.display = "none";
}

$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});
