//======================================Functions=================================================//

//prints the titles
function printtitles(rarity, container){
    for (l = 0; l < rarity.length; l++) {
        p = document.createElement('p');
        p.id = "titles"
        p.className= "text-center"
        if (titles.indexOf(rarity[l]) != -1){
            p.innerHTML = rarity[l];
        }
        else {
            p.innerHTML = "???"
        }
    
        p.style.color = String(getraritycolor(rarity[l], "color"))
        p.style.textShadow = String(getraritycolor(rarity[l], "shadow"))
    
        var hr = document.createElement('HR');
    
        container.appendChild(p);
        container.appendChild(hr);
    
    }
}

//Changes style for rariy colors
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
            color = "0px 0px 5px white"
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

//Dropdowns for title
function dropdowntitles(btn, list){
    if(list.style.display == "none"){
        btn.innerHTML = "-"
        list.style.display = "block"
    }
    else{
        btn.innerHTML = "+"
        list.style.display = "none"
    }
}

//==============================================================================================================================
//==================================================== ___ _            _   ====================================================
//====================================================/ __| |_ __ _ _ _| |_ ====================================================
//====================================================\__ \  _/ _` | '_|  _|====================================================
//====================================================|___/\__\__,_|_|  \__|====================================================
//==============================================================================================================================             


//Retrieving data from local storage

var users = JSON.parse(localStorage.getItem("users"));
var currentuser = JSON.parse(localStorage.getItem("currentuser"));

//=======================================Printing titles in the title container=========================================//


//Variables
var legendarytitles = document.getElementById("legendarytitles")
var uniquetitles = document.getElementById("uniquetitles")
var epictitles = document.getElementById("epictitles")
var raretitles = document.getElementById("raretitles")
var uncommontitles = document.getElementById("uncommontitles")
var commontitles = document.getElementById("commontitles")

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


//=========================Printing=================================//

printtitles(legendary, legendarytitles)
printtitles(unique, uniquetitles)
printtitles(epic, epictitles)
printtitles(rare, raretitles)
printtitles(uncommon, uncommontitles)
printtitles(common, commontitles)

//For buttons

legendarybtn = document.getElementById("legendarybtn")
uniquebtn = document.getElementById("uniquebtn")
epicbtn = document.getElementById("epicbtn")
rarebtn = document.getElementById("rarebtn")
uncommon = document.getElementById("uncommon")
commonbtn = document.getElementById("commonbtn")

legendarybtn.setAttribute("onclick", "dropdowntitles(legendarybtn, legendarytitles)")
uniquebtn.setAttribute("onclick", "dropdowntitles(uniquebtn, uniquetitles)")
epicbtn.setAttribute("onclick", "dropdowntitles(epicbtn, epictitles)")
rarebtn.setAttribute("onclick", "dropdowntitles(rarebtn, raretitles)")
uncommonbtn.setAttribute("onclick", "dropdowntitles(uncommonbtn, uncommontitles)")
commonbtn.setAttribute("onclick", "dropdowntitles(commonbtn, commontitles)")



//================================================Badges=================================================//

//Printing Badges in profile

for (b = 0; b < users[account()].availablepictures.length; b++) {

    (function (kiwi) {
        badgecontainer = document.getElementById("badgesgot")


        imagecontainer = document.createElement('div');
        imagecontainer.id = "badgeimgcontainer"
        imagecontainer.className = "row justify-content-center"
        
        description = document.createElement('div')
        description.id = "badgeoverlay"
        description.className = "col-12"

        p = document.createElement("p")
        p.innerHTML = users[account()].availablepictures[kiwi].desc
        p.id = "pictext"
        p.className = "text-center"
        

        image = document.createElement("img");
        image.src = users[account()].availablepictures[kiwi].src;
        image.id = "badgesimages"

        hr = document.createElement("hr")

        description.appendChild(p)
        
        imagecontainer.appendChild(image);
        imagecontainer.appendChild(description)
        badgecontainer.appendChild(imagecontainer)
        badgecontainer.appendChild(hr)
    })(b);
}

profilebadge = document.getElementById("badges")
profilebadge.innerHTML = users[account()].availablepictures.length;