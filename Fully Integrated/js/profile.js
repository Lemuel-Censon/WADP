//Retrieving data from local storage

var users = JSON.parse(localStorage.getItem("users"));
var currentuser = JSON.parse(localStorage.getItem("currentuser"));

//Getting the elements

var currenttitle = users[account()].currenttitle;

var title = document.getElementById("title");

title.innerHTML = currenttitle;
title.style.color = getraritycolor(currenttitle, "color")
title.style.textShadow = getraritycolor(currenttitle, "shadow")

var profilename = document.getElementById("detailname");

profilename.innerHTML = currentuser;



//========================================================Picture=============================================================//

var pictureContainer = document.querySelector("#picture img");
pictureContainer.src = users[account()].picture

//Picture locations

var cloud = "../../images/Profile Pictures/Cloud.png"
var earth = "../../images/Profile Pictures/Earth.png"
var leaf = "../../images/Profile Pictures/Leaf.png"
var plant = "../../images/Profile Pictures/Plant.png"
var tree = "../../images/Profile Pictures/Tree.png"

var pictures = [cloud, earth, leaf, plant, tree]

//==========================================================Functions==========================================================//

//change the picture
function changepic(i) {
    console.log(i.src)
    pictureContainer.src = i.src
    users[account()].picture = i.src
    document.getElementById("profilepic").src = users[account()].picture
    localStorage.setItem("users", JSON.stringify(users));

}

//for custom picture
function custompic(srcs) {
    console.log("hi")
    pictureContainer.src = srcs
    users[account()].picture = srcs
    document.getElementById("profilepic").src = users[account()].picture
    localStorage.setItem("users", JSON.stringify(users));
}

//finds account
function account() {
    for (i = 0; i < users.length; i++) {
        if (currentuser == users[i].username)
            return i
    }
}


//For modal
for (img = 0; img < users[account()].availablepictures.length; img++) {
    imgcontlist = document.getElementById("imglist")

    imgcont = document.createElement("div")
    imgcont.className = "imgcontainer"

    imgs = document.createElement("img")
    imgs.src = users[account()].availablepictures[img].src
    imgs.className = "mx-auto d-block"
    imgs.setAttribute("data-dismiss", "modal")
    imgs.setAttribute("onclick", "changepic(this)")

    imgcont.appendChild(imgs)
    imgcontlist.insertBefore(imgcont, imgcontlist.firstChild)
}

//================================================Printing titles in the title container=========================================//

var titlecontainer = document.getElementById("titleslist");
var titles = users[account()].titles;

//===========================Rarity===============================//

//Rarity system in a game called Zenonia
common = ["Greenhorn", "Curious", "Explorer", "Informed", "Friendly"] //White
uncommon = ["Likable"] //Blue
rare = ["Amiable", "Inquisitive"] //Yellow
epic = ["Popular",] //Purple
unique = ["Superstar",] //Orange
legendary = ["Admin"] //Red

rarity = [legendary, unique, epic, rare, uncommon, common]
raritydesc = ["Legendary", "Unique", "Epic", "Rare", "Uncommon", "Common"]

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
            color = "white"
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
            color = "0px 0px 5px darkorange"
            return color
        }
        else {
            color = "0px 0px 5px red"
            return color
        }
    }

}

//===================================================Printing titles============================================================//


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

                var button = document.createElement('button');
                button.className = "btn btn-success btn-sm titlebutton"
                button.id = "titlebutton"
                button.innerHTML = "Use this title"

                button.onclick = function () {

                    currenttitle = titles[i];
                    /*Apparently this was the important thing that was missing. 
                    Without this nothing would change even when setting local storage*/
                    users[account()].currenttitle = currenttitle;

                    localStorage.setItem("users", JSON.stringify(users));
                    location.reload() //Reload to change the profile title

                }

                titlecontainer.appendChild(button);
                titlecontainer.appendChild(p);
                titlecontainer.appendChild(hr);
            })(i);
        }


    }
}


//========================================================Recent Activities============================================================/
var activitycontainer = document.getElementById("activites")

for (q = users[account()].messages.length - 1; q > -1; q--) {
    if (users[account()].messages == []) {
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
            p.innerHTML = users[account()].messages[i];
            p.className = "text-center"

            var hr = document.createElement("HR")
            activitycontainer.appendChild(p)
            activitycontainer.appendChild(hr)
        })(q);
    }
}

//=======================================================Friend system============================================================//

function acceptfriend(name) {

    name = users[findaccount(name)].username

    buttons = document.getElementById("friendbutton" + name)
    nobutton = document.getElementById("friendbuttonno" + name)

    buttons.style.display = "none";
    nobutton.style.display = "none";

    idname = "friendrequest" + name
    ptext = document.getElementById(idname)
    ptext.innerHTML = name + " is now your friend"

    //Changes message permanently to friend
    users[account()].messages[findmessage(idname)] = name + " is now your friend"

    //Sends message to sender about result
    users[findaccount(name)].messages.push(String(users[account()].username) + " has accepted your friend request")

    //Makes both accounts friends
    users[account()].friends.push(name)
    users[findaccount(name)].friends.push(users[account()].username)

    //Saves everything
    localStorage.setItem("users", JSON.stringify(users));
}

function rejectfriend(name) {

    nobutton = document.getElementById("friendbuttonno" + name)
    buttons = document.getElementById("friendbutton" + name)

    buttons.style.display = "none";
    nobutton.style.display = "none";

    idname = "friendrequest" + name
    ptext = document.getElementById(idname)

    ptext.innerHTML = "You have rejected " + name + "'s request"

    //Changes message permanently to rejected
    users[account()].messages[findmessage(idname)] = "You have rejected " + name + "'s request"


    //Sends message to sender about result
    users[findaccount(name)].messages.push(String(users[account()].username) + " has rejected your friend request")


    //Removes the sent request from sender. Sender can send friend request again.
    users[findaccount(name)].requestsent.splice(findrequestsent(name), 1)


    //Saves everything
    localStorage.setItem("users", JSON.stringify(users));
}

//returns index of chosen user
function findaccount(namee) {
    for (i = 0; i < users.length; i++) {
        if (String(namee) == users[i].username)
            return i
    }
}

//returns index of sender
function findrequestsent(sendername) {
    number = users[findaccount(sendername)].requestsent.indexOf(users[account()].username)
    return number
}

//Finds message index
function findmessage(msg) {
    for (a = 0; a < users[account()].messages.length; a++) {
        if (users[account()].messages[a].indexOf(String(msg)) != -1) {
            return a
        }
    }
}

//===========================================================Printing friend in profile================================================//

for (f = 0; f < users[account()].friends.length; f++) {
    (function (orange) {
        friend = findaccount(users[account()].friends[orange])

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

        friendcontainer.onclick = function () {
            friends = findaccount(users[account()].friends[orange])
            console.log(friends)
            localStorage.setItem("visituser", JSON.stringify(friends));
            window.location.href = "visitprofile.html"
        }
        table.insertBefore(friendcontainer, table.firstChild)
    })(f);
}

//========================================Printing Badges in profile==================================================================//

for (b = 0; b < users[account()].availablepictures.length; b++) {
    (function (kiwi) {
        badgecontainer = document.getElementById("badgelist")

        imagecontainer = document.createElement('div');
        imagecontainer.id = "badgeimgcontainer"

        description = document.createElement('div')
        description.id = "badgeoverlay"

        p = document.createElement("p")
        p.innerHTML = users[account()].availablepictures[kiwi].desc
        p.id = "pictext"

        image = document.createElement("img");
        image.src = users[account()].availablepictures[kiwi].src;
        image.id = "badgesimages"

        description.appendChild(p)

        imagecontainer.appendChild(image);
        imagecontainer.appendChild(description)
        badgecontainer.appendChild(imagecontainer)
    })(b);
}

profilebadge = document.getElementById("badges")
profilebadge.innerHTML = users[account()].availablepictures.length;

highestscore = document.getElementById("minigamehighscore")

if(users[account()].highscore == undefined || users[account()].highscore == null){
    highestscore.innerHTML = 0
}
else{
    highestscore.innerHTML = users[account()].highscore
}


//==============================================================To Do=====================================================================//

planlist = users[account()].plans

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
    


        div.appendChild(day)
        div.appendChild(tofrom)
        div.appendChild(todo)
        div.appendChild(action)
        div.appendChild(remark)
        todostuff.appendChild(div)
        
    })(p);
}

//==========================================================Quiz done============================================================//

quizmade = document.getElementById("quizmade")
quizmade.innerHTML = users[account()].quizmade







//Testing stuff and graveyard



// for(i = 0; i < document.getElementsByClassName("titlebutton").length; i++){
//     button = document.getElementsByClassName("titlebutton")[i]
//     button.addEventListener("click", changetitle(i)); 
// }

// function changetitle(na){
//     title.innerHTML = document.querySelectorAll("p.title")[na].innerHTML;
// }



            // currenttitle = titles[i];
            // title.innerHTML = titles[i];

            // users.currenttitle = currenttitle;

            // window.localStorage.setItem("users", JSON.stringify(users)); //This doesn't work for some reason
            // console.log(currenttitle)
            // console.log(title.innerHTML)
            // profilename.innerHTML = currentuser + ' the ' + title.innerHTML;