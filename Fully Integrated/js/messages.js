messages = document.getElementById("messagesview")

//Retrieving data from local storage

var users = JSON.parse(localStorage.getItem("users"));
var currentuser = JSON.parse(localStorage.getItem("currentuser"));

//To find the right account
function account() {
    for (i = 0; i < users.length; i++) {
        if (currentuser == users[i].username)
            return i
    }
}

if (users[account()].messages == []) {
    var p = document.createElement("p")
    p.innerHTML = "You have no messages"
    p.className = "text-center"

    var hr = document.createElement("HR")
    messages.appendChild(p)
    messages.appendChild(hr)


}
else {
    for (y = users[account()].messages.length-1; y > -1; y--) {

        (function (i) {

            p = document.createElement("p")

            p.innerHTML = users[account()].messages[i];
            p.className = "text-center"

            var hr = document.createElement("HR")

            messages.appendChild(p)
            messages.appendChild(hr)

            
        })(y);
        

    }
}

//Friend system

function acceptfriend(name){

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

function rejectfriend(name){

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
function findrequestsent(sendername){
    number = users[findaccount(sendername)].requestsent.indexOf(users[account()].username)
    return number
}

//Finds message index
function findmessage(msg){
    for(a = 0; a < users[account()].messages.length; a++){
        if(users[account()].messages[a].indexOf(String(msg)) != -1){
            return a
        }
    }
}
