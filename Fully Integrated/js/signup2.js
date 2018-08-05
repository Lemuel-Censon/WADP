// var users = []
var users = JSON.parse(localStorage.getItem("users"));

//For first time load
if (users == null && users == undefined) {   
    users = []
    localStorage.setItem("users", JSON.stringify(users));
    // location.reload()
}

console.log(users)



function signup() {
    var invalidcharacters = []
    //New user status
    
    var newuser = {
        username: '',
        password: '',
        email: '',
        picture: '../../images/Profile Pictures/Plant.png',
        availablepictures: [{src:'../../images/Profile Pictures/Plant.png', desc: 'Starter Badge'}],
        level: 1,
        quizdone: 0,
        quizmade: 0,
        titles: ['Greenhorn'],
        currenttitle: 'Greenhorn',
        friends: [],
        messages: [],
        requestsent: [],
        badges: 0,
        todo: [
            { 
            date: "",
            time: "",
            do: "",
            remarks: "",
        },
    ]
    }

    //Getting their inputs
    var inusername = document.getElementById("username").value;
    var inpassword = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var email = document.getElementById("email").value;

    var usernamechar = inusername.split(""); //Turns the username into a list. Makes it easier to check for invalid characters

    var invalid = document.querySelector("#signup p.signupinv");

    if (email == "", inusername == "", inpassword == "") {
        invalid.innerHTML = "Please fill in the form.";
        invalid.style.display = "block";

    }
    else if (inusername.length > 8) {
        invalid.innerHTML = "Username too long"
        invalid.style.display = "block";
    }
    else if (inpassword != confirmPassword) {
        invalid.innerHTML = "Passwords does not match."
        invalid.style.display = "block";

    }
    else if (checkduplicate(inusername)) {
        invalid.innerHTML = "Username has already been taken."
        invalid.style.display = "block";
    }
    else if (checkduplicatemail(email)) {
        invalid.innerHTML = "Email has already been taken."
        invalid.style.display = "block";
    }
    else {

        newuser.username = inusername;
        newuser.password = inpassword;
        newuser.email = email;

        console.log(`${inusername} has signed up!`)
        users.push(newuser);
        localStorage.setItem("users", JSON.stringify(users));


        window.location.href = "index.html"

    }
    // }   


}

//Checks enter event

function checkEnter(event) {
    if (event.keyCode == 13) {
        signup();
    }
}

//Checks for duplicate usernames

function checkduplicate(usernames) {
    isduplicate = false;
    for (i = 0; i < users.length; i++) {
        if (users[i].username == usernames) {
            isduplicate = true;
            console.log('It is a duplicate')
        }
    }

    return isduplicate
}

//Checks for duplicate emails

function checkduplicatemail(email) {
    isduplicate = false;
    for (i = 0; i < users.length; i++) {
        if (users[i].email == email) {
            isduplicate = true;
            console.log('It is a duplicate')
        }
    }

    return isduplicate
}

