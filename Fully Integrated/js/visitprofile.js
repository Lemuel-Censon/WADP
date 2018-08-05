//Retrieving data from local storage

var users = JSON.parse(localStorage.getItem("users"));
var visituser = JSON.parse(localStorage.getItem("visituser")); //Gets the visit user

//Getting the elements

var currenttitles = users[visituser].currenttitle;

var title = document.getElementById("title");

title.innerHTML = currenttitles;

title.style.color = getraritycolor(currenttitles, "color")
title.style.textShadow = getraritycolor(currenttitles, "shadow")



var profilename = document.getElementById("detailname");
profilename.innerHTML = users[visituser].username

//Picture

var pictureContainer = document.querySelector("#picture img");
pictureContainer.src = users[visituser].picture

//=======================================Printing titles in the title container=========================================//

var titlecontainer = document.getElementById("titleslist");
var titles = users[visituser].titles;

//===========================Rarity===============================//

//Rarity system in a game called Zenonia
common = ["Greenhorn", "Curious", "Explorer", "Informed", "Friendly"] //White
uncommon = ["Likable"] //Blue
rare = ["Amiable", "Inquisitive"] //Yellow
epic = ["Popular",] //Purple
unique = ["Superstar",] //Orange
legendary = ["Admin"] //Red

rarity = [legendary, unique, epic, rare, uncommon, common]

function getraritycolor(title, type) {

    common = ["Greenhorn", "Curious", "Explorer", "Informed", "Friendly"] //White
    uncommon = ["Likable",] //Blue
    rare = ["Amiable", "Inquisitive"] //Yellow
    epic = ["Popular",] //Purple
    unique = ["Superstar",] //Orange
    legendary = ["Admin"] //Red

    var color;

    if (type === "color") {
        if (common.indexOf(title) != -1) {
            color = "gray"
            return color
        }
        else if (uncommon.indexOf(title) != -1) {
            color = "blue"

            return color
        }
        else if (rare.indexOf(title) != -1) {
            color = "yellow"
            return color
        }
        else if (epic.indexOf(title) != -1) {
            color = "purple"
            return color
        }
        else if (unique.indexOf(title) != -1) {
            color = "orange"
            return color
        }
        else {
            color = "red"
            return color
        }
    }


    else if (type === "shadow") {
        if (common.indexOf(title) != -1) {
            color = "none"
            return color
        }
        else if (uncommon.indexOf(title) != -1) {
            color = "none"

            return color
        }
        else if (rare.indexOf(title) != -1) {
            color = "0px 0px 3px red"
            return color
        }
        else if (epic.indexOf(title) != -1) {
            color = "0px 0px 5px black"
            return color
        }
        else if (unique.indexOf(title) != -1) {
            color = "0px 0px 5px yellow"
            return color
        }
        else {
            color = "0px 0px 5px red"
            return color
        }
    }

}

//=========================Printing=================================//



for (r = 0; r < 6; r++) {
    for (i = 0; i < titles.length; i++) {

        if (rarity[r].indexOf(titles[i]) != -1) {
            /*I had issues with this for hours. Thank you stackoverflow! https://stackoverflow.com/questions/11548768/loop-in-function-not-working
              This thing is harder to solve than I thought but thank you internet.*/
            (function (i) {
                p = document.createElement('p');
                p.innerHTML = titles[i];
                p.className = "title";

                p.style.color = String(getraritycolor(titles[i], "color"))
                p.style.textShadow = String(getraritycolor(titles[i], "shadow"))

                var hr = document.createElement('HR');

                titlecontainer.appendChild(p);
                titlecontainer.appendChild(hr);
            })(i);
        }


    }
}

//Finds current account
function account() {
    for (i = 0; i < users.length; i++) {
        if (currentuser == users[i].username)
            return i
    }
}

requestbutton = document.getElementById("addfriend")

//changes button to already friends or request sent
if(users[account()].friends.indexOf(users[visituser].username) != -1 && users[visituser].friends.indexOf(users[account()].username) != -1 )
{
    requestbutton.innerHTML = "Already Friends"
    requestbutton.disabled = true;
}
else if (users[account()].requestsent.indexOf(users[visituser].username) != -1 ){
    requestbutton.innerHTML = "Request Sent"
    requestbutton.disabled = true;
}

function sendrequest() {

    if (users[account()].requestsent == null) {
        users[account()].requestsent = []
        localStorage.setItem("users", JSON.stringify(users));
    }

    if(users[visituser].friendrequest == null) {
        users[visituser].friendrequest = []
        localStorage.setItem("users", JSON.stringify(users));
    }
   

    if (users[account()].requestsent.indexOf(users[visituser].username) == -1 ) {

        requestbutton.innerHTML = "Request Sent"
        requestbutton.disabled = true;
        users[account()].requestsent.push(users[visituser].username);
        
        //This is to make a button along with the notification
        users[visituser].messages.push(`<p id='friendrequest${String(users[account()].username)}'> ${String(users[account()].username)} has sent a friend request. Accept? </p> <button class='btn btn-success' id='friendbutton${String(users[account()].username)}' onclick='acceptfriend("${String(users[account()].username)}")'>Yes</button> <button class='btn btn-success' id='friendbuttonno${String(users[account()].username)}' onclick='rejectfriend("${String(users[account()].username)}")'>No</button>`);
        localStorage.setItem("users", JSON.stringify(users));

    }

    
}

//Recentactivities

var activitycontainer = document.getElementById("activites")

for (q = users[visituser].messages.length-1; q > -1; q--) {
    if (users[visituser].messages == []) {

        var p = document.createElement("p")
        p.innerHTML = "You have no messages"
        p.className = "text-center"

        var hr = document.createElement("HR")
        activitycontainer.appendChild(p)
        activitycontainer.appendChild(hr)

    }
    else {

        (function (i) {
            var p = document.createElement("p")
            if(users[visituser].messages[i].indexOf("button") == -1){
                var hr = document.createElement("HR")
                activitycontainer.appendChild(p)
                activitycontainer.appendChild(hr)
            }
            p.innerHTML = users[visituser].messages[i];
            p.className = "text-center"

            

        })(q);
    }

}

//Printing friend in profile

for(v = 0; v < users[visituser].friends.length; v++){
    (function(boat){
        friend = findaccount(users[visituser].friends[boat])

        table = document.querySelector("#friendlisttable")
        friendcontainer = document.createElement("div")
        
        friendcontainer.className = "btn btn-outline-success"

        img = document.createElement("img");
        img.src = users[friend].picture;
        img.id = "friendimages"


        friendusername = document.createElement("p");
        friendusername.id = "friendinfowords"
        friendusername.className = "text-center"
        friendusername.innerHTML = users[friend].username + " the " + users[friend].currenttitle

        friendcontainer.appendChild(img)
        friendcontainer.appendChild(friendusername)
       
        friendcontainer.onclick = function (){
            
            friends = findaccount(users[visituser].friends[boat])
            
            
            if(users[friends].username != currentuser){

                localStorage.setItem("visituser", JSON.stringify(friends));
                window.location.href = "visitprofile.html"

            }
            else{
           
                window.location.href = "profile.html"
            }
            
        }
        table.insertBefore(friendcontainer, table.firstChild)
    })(v);
}

//returns index of chosen user
function findaccount(namee) {
    for (i = 0; i < users.length; i++) {
        if (String(namee) == users[i].username)
            return i
    }
}

//Badges

for(b = 0; b < users[visituser].availablepictures.length; b++){
    (function(kiwi){
        badgecontainer = document.getElementById("badgelist")

        imagecontainer = document.createElement('div');
        imagecontainer.id = "badgeimgcontainer"

        description = document.createElement('div')
        description.id = "badgeoverlay"

        p = document.createElement("p")
        p.innerHTML = users[visituser].availablepictures[kiwi].desc
        p.id = "pictext"

        image = document.createElement("img");
        image.src = users[visituser].availablepictures[kiwi].src;
        image.id = "badgesimages"

        description.appendChild(p)

        imagecontainer.appendChild(image);
        imagecontainer.appendChild(description)
        badgecontainer.appendChild(imagecontainer)
    })(b);
}

profilebadge = document.getElementById("badges")
profilebadge.innerHTML = users[visituser].availablepictures.length;


highestscore = document.getElementById("minigamehighscore")

if(users[visituser].highscore == undefined || users[visituser].highscore == null){
    highestscore.innerHTML = 0
}
else{
    highestscore.innerHTML = users[visituser].highscore
}

//==========================================================Quiz done============================================================//

quizmade = document.getElementById("quizmade")
quizmade.innerHTML = users[visituser].quizmade

