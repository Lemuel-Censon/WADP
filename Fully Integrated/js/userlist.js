container = document.getElementById("userlists")

//Retrieving data from local storage

var users = JSON.parse(localStorage.getItem("users"));
var currentuser = JSON.parse(localStorage.getItem("currentuser"));

//To find the right account
function account() {
    for (q = 0; q < users.length; q++) {
        if (currentuser == users[q].username)
            return q
    }
}

for (i = 0; i < users.length; i++) {
    (function (i) {
        //User info
        userinfo = document.createElement("div");
        userinfo.id = "userinfocontainer"
        userinfo.class = "col-2"

        //Img info
        img = document.createElement("img");
        img.src = users[i].picture;
        img.id = "userimages"

        //Username info
        usernamee = document.createElement("p");
        usernamee.id = "userinfowords"
        usernamee.innerHTML = users[i].username + " the " + users[i].currenttitle

        //button to visit profile
        button = document.createElement("button");
        button.className = "btn btn-success btn-sm"
        button.id = "banana"

        if(users[i].username == users[account()].username){
            button.innerHTML = "You"
            button.disabled = true
        }

        else{
            button.innerHTML = "Visit Profile"
        
            button.onclick = function () {
    
                var visit = i
                localStorage.setItem("visituser", JSON.stringify(visit));
    
                location.href = "visitprofile.html"
            }
        }


        





        userinfo.appendChild(img)
        userinfo.appendChild(usernamee)
        userinfo.appendChild(button)

        container.appendChild(userinfo)
    })(i);

}

function choosebutton(num){
    
}

