//Retrieving data from local storage

var users = JSON.parse(localStorage.getItem("users"));
var currentuser = JSON.parse(localStorage.getItem("currentuser"));
var titles = users[account()].titles;

//To find the right account
function account() {
    for (i = 0; i < users.length; i++) {
        if (currentuser == users[i].username)
            return i
    }
}

var pagename = window.location.pathname; //Gets the pathname
var file = pagename.split("/").pop(); //Gets the filename


//=============================Interacting with website titles===============================//

//Shows and adds Curious title to user
function curioustitle() {
    //Gets the popup element
    var cpopup = document.getElementById("popupcurioustitle");

    if (currentuser != undefined && currentuser != null && titles.indexOf('Curious') == -1) {

        cpopup.style.display = "block"
        titles.push('Curious');
        localStorage.setItem("users", JSON.stringify(users));
        setTimeout(
            function () {
                cpopup.style.display = "none"
            },
            5000);

        users[account()].messages.push("You have gained the title Curious!");
        localStorage.setItem("users", JSON.stringify(users));


    }
}

//Explorer title

function explorertitle() {
    //Gets the popup element
    var popup = document.getElementById("popupexplorertitle");

    if (currentuser != undefined && currentuser != null && titles.indexOf('Explorer') == -1) {

        popup.style.display = "block"
        titles.push('Explorer');
        localStorage.setItem("users", JSON.stringify(users));
        setTimeout(
            function () {
                popup.style.display = "none"
            },
            5000);

        users[account()].messages.push("You have gained the title Explorer!");
        localStorage.setItem("users", JSON.stringify(users));
    }
}

if (file == "Map.html") {
    explorertitle()
}

//Informed title

function informedtitle() {
    //Gets the popup element
    var popup = document.getElementById("popupinformedtitle");

    if (currentuser != undefined && currentuser != null && titles.indexOf('Informed') == -1) {

        popup.style.display = "block"
        titles.push('Informed');
        localStorage.setItem("users", JSON.stringify(users));
        setTimeout(
            function () {
                popup.style.display = "none"
            },
            5000);

        users[account()].messages.push("You have gained the title Informed!");
        localStorage.setItem("users", JSON.stringify(users));
    }
}

if (file == "About.html") {
    informedtitle()
}

//Inquisitive title

function inquisitivetitle() {
    //Gets the popup element
    var popup = document.getElementById("popupinquisitivetitle");

    if (currentuser != undefined && currentuser != null && titles.indexOf('Inquisitive') == -1) {

        popup.style.display = "block"
        titles.push('Inquisitive');
        localStorage.setItem("users", JSON.stringify(users));
        setTimeout(
            function () {
                popup.style.display = "none"
            },
            5000);

        users[account()].messages.push("You have gained the title Inquisitive!");
        localStorage.setItem("users", JSON.stringify(users));
    }
    else {
        var prank = document.getElementById("email")
        console.log("hi")
        prank.href = "mailto:joshdebean@gmail.com"
    }
}

if (file == "About.html") {
    var prank = document.getElementById("email")
    prank.setAttribute("onclick", "inquisitivetitle()")
}

//==============Friend related titles===============//

//Popups for badges/titles gained
function showfriendtitle(accomplishment, a_count, description) {

    console.log(accomplishment)
    //Creating Things
    popup = document.createElement('div')
    popup.id = "popup"
    popup.className = "col-10"
    console.log(popup)

    close = document.createElement('button')
    close.id = "closepopup"
    close.className = "close"
    close.setAttribute("onclick", "closepopup(popup)")
    close.innerHTML = "&times;"

    h1 = document.createElement("h1")
    h1.setAttribute("align", "center")
    h1.innerHTML = `You have gained the ${description}: ${accomplishment}`

    p = document.createElement('p')
    p.innerHTML = `You got at least ${a_count}.`

    popup.appendChild(close)
    popup.appendChild(h1)
    popup.appendChild(p)

    notifier.appendChild(popup)

    //External Happenings

    popup.style.display = "block"

    setTimeout(
        function () {
            popup.style.display = "none"
        },
        5000);

    setTimeout(
        function () {
            popup.style.display = "none"
        },
        5000);

    //Internal Happenings

    //Gives title
    if (description == "title") {
        titles.push(String(accomplishment));
    }


    //Sends Message
    users[account()].messages.push(`You have gained the ${accomplishment} ${description} for having ${a_count}!`);

    //Saves
    localStorage.setItem("users", JSON.stringify(users));
}


var notifier = document.getElementById("notifier")

var friendtitle;
var friendcount;
var desc;

if (currentuser != undefined && currentuser != null && users[account()].titles.indexOf('Friendly') == -1 && users[account()].friends.length > 0) {
    friendtitle = "Friendly"
    friendcount = 1 + " friend"
    desc = "title"
    showfriendtitle(friendtitle, friendcount, desc)
}
else if (currentuser != undefined && currentuser != null && users[account()].titles.indexOf('Likable') == -1 && users[account()].friends.length > 2) {
    friendtitle = "Likable"
    friendcount = 3 + " friends"
    desc = "title"
    showfriendtitle(friendtitle, friendcount, desc)
}
else if (currentuser != undefined && currentuser != null && users[account()].titles.indexOf('Amiable') == -1 && users[account()].friends.length > 4) {
    friendtitle = "Amiable"
    friendcount = 5 + " friends"
    desc = "title"
    showfriendtitle(friendtitle, friendcount, desc)
}
else if (currentuser != undefined && currentuser != null && users[account()].titles.indexOf('Popular') == -1 && users[account()].friends.length > 9) {
    friendtitle = "Popular"
    friendcount = 10 + " friends"
    desc = "title"
    showfriendtitle(friendtitle, friendcount, desc)
}
else if (currentuser != undefined && currentuser != null && users[account()].titles.indexOf('Superstar') == -1 && users[account()].friends.length > 24) {
    friendtitle = "Superstar"
    friendcount = 25 + " friends"
    desc = "title"
    showfriendtitle(friendtitle, friendcount, desc)
}



/*====================================Badges=========================================*/

//Picture locations for badges
var plant = "../../images/Profile Pictures/Plant.png" //Starter
var tree = "../../images/Profile Pictures/Tree.png" // 3 Titles
var leaf = "../../images/Profile Pictures/Leaf.png" // 7 Titles
var cloud = "../../images/Profile Pictures/Cloud.png" // 15 Titles
var earth = "../../images/Profile Pictures/Earth.png" // 25 Titles

var badgetitle;
var badgecount;
var badgedesc;

//Checks whether they got the badge
function badgecheck(badgename) {
    nums = []
    for (ba = 0; ba < users[account()].availablepictures.length; ba++) {
        nums.push(users[account()].availablepictures[ba].src.indexOf(badgename))

    }

    //https://www.jstips.co/en/javascript/calculate-the-max-min-value-from-an-array/
    //This operator causes the values in the array to be expanded, or “spread”, into the function’s arguments.
    return Math.max(...nums)
}

//===================Tree Badge================//
if (currentuser != undefined && currentuser != null && users[account()].titles.length > 2 && badgecheck(tree) != 0) {
    badgetitle = "Tree"
    badgecount = 3 + " titles"
    badgedesc = "badge"

    var newbadge = {};
    newbadge.src = tree
    newbadge.desc = 'Get 3 titles'

    users[account()].availablepictures.push(newbadge)

    showfriendtitle(badgetitle, badgecount, badgedesc)
}
else if (currentuser != undefined && currentuser != null && users[account()].titles.length > 6 && badgecheck(leaf) != 0) {
    badgetitle = "Leaf"
    badgecount = 7 + " titles"
    badgedesc = "badge"

    var newbadge = {};
    newbadge.src = leaf
    newbadge.desc = 'Get 7 titles'

    users[account()].availablepictures.push(newbadge)

    showfriendtitle(badgetitle, badgecount, badgedesc)
}
else if (currentuser != undefined && currentuser != null && users[account()].titles.length > 14 && badgecheck(cloud) != 0) {
    badgetitle = "Cloud"
    badgecount = 15 + " titles"
    badgedesc = "badge"

    var newbadge = {};
    newbadge.src = cloud
    newbadge.desc = 'Get 7 titles'

    users[account()].availablepictures.push(newbadge)

    showfriendtitle(badgetitle, badgecount, badgedesc)
}
else if (currentuser != undefined && currentuser != null && users[account()].titles.length > 24 && badgecheck(earth) != 0) {
    badgetitle = "Earth"
    badgecount = 25 + " titles"
    badgedesc = "badge"

    var newbadge = {};
    newbadge.src = earth
    newbadge.desc = 'Get 7 titles'

    users[account()].availablepictures.push(newbadge)

    showfriendtitle(badgetitle, badgecount, badgedesc)
}


/*================================Closers=================================*/

//Closes popup
function closepopup(popup) {
    popup.style.display = "none"
}

//==================================================Test stuff=================================================================//

// function friendlytitle() {
//     //Gets the popup element
//     var popup = document.getElementById("popupfriendlytitle");
//     if (currentuser != undefined && currentuser != null && titles.indexOf('Friendly') == -1 && users[account()].friends.length > 0) {

//     //External Happenings

//         popup.style.display = "block"

//         setTimeout(
//             function () {
//                 popup.style.display = "none"
//             },
//             5000);



//     //Internal Happenings

//         //Gives title
//         titles.push('Friendly');

//         //Sends Message
//         users[account()].messages.push("You have gained the title Friendly!");

//         //Saves
//         localStorage.setItem("users", JSON.stringify(users));
//     }

// }

// friendlytitle()


// //Gives Likable title if user has 3 friends
// function likabletitle() {
//     //Gets the popup element
//     var popup = document.getElementById("popuplikabletitle");
//     if (currentuser != undefined && currentuser != null && titles.indexOf('Likable') == -1 && users[account()].friends.length > 2) {
//         popup.style.display = "block"
//         titles.push('Likable');
//         localStorage.setItem("users", JSON.stringify(users));
//         setTimeout(
//             function () {
//                 popup.style.display = "none"
//             },
//             5000);

//         users[account()].messages.push("You have gained the title Likable!");
//         localStorage.setItem("users", JSON.stringify(users));
//     }
// }

// likabletitle()

//===================Tree Badge================//

// function treebadge() {

//     //Gets the popup element
//     var popup = document.getElementById("popuptreebadge");

//     popup.style.display = "block"

//     setTimeout(
//         function () {
//             popup.style.display = "none"
//         },
//         5000);

//     users[account()].messages.push("You have gained the Tree badge for getting 3 titles!");
//     localStorage.setItem("users", JSON.stringify(users));

// }

// //Runs treebadge function when meeting conditions
// if (users[account()].titles.length > 2) {
//     //I used an error handler for this since I can't think of a better logic.
//     try {
//         users[account()].availablepictures[1].src
//     }
//     catch (err) {

//         newbadge = {}
//         newbadge.src = tree

//         newbadge.desc = 'Get 3 titles'

//         console.log(newbadge);
//         users[account()].availablepictures.push(newbadge)
//         localStorage.setItem("users", JSON.stringify(users));

//         treebadge()
//     }
// }

// //===========================Leaf Badge===================//

// function leafbadge() {
//     //Gets the popup element
//     var popup = document.getElementById("popupleafbadge");

//     popup.style.display = "block"

//     setTimeout(
//         function () {
//             popup.style.display = "none"
//         },
//         5000);

//     users[account()].messages.push("You have gained the Leaf badge for getting 5 titles!");
//     localStorage.setItem("users", JSON.stringify(users));

// }

// //Runs leafbadge function when condition is met
// if (users[account()].titles.length > 2) {

//     //I used an error handler for this since I can't think of a better logic. Same as above
//     try {
//         users[account()].availablepictures[2].src
//     }
//     catch (err) {

//         newbadge = {}
//         newbadge.src = leaf

//         newbadge.desc = 'Get 5 titles'

//         console.log(newbadge);
//         users[account()].availablepictures.push(newbadge)
//         localStorage.setItem("users", JSON.stringify(users));

//         leafbadge()
//     }
// }
