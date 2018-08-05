//Variables

//Retrieving data from local storage
try{
    var users = JSON.parse(localStorage.getItem("users")); 
    var currentuser = JSON.parse(localStorage.getItem("currentuser"));
    var currenttitle = users[account()].currenttitle;
}
catch(err){
    console.log("Loging2hi")
}



//placeholder to make them global

var inputUsername; 
var inputPassword; 

var pagename = window.location.pathname; //Gets the pathname
var file = pagename.split("/").pop(); //Gets the filename

// Checks if user is logged in before
function ifloggedin(){
    if(currentuser !== undefined && currentuser !== null){
        logintouser();
    }
    // else{
    //     profilemenu.style.display = "none";
    // }
}



//Login script

function gologin(){
    inputUsername = document.getElementById("username1").value;
    inputPassword = document.getElementById("password").value;

    for(i = 0; i < users.length; i++){
        if(inputUsername.toLowerCase() == users[i].username.toLowerCase() && inputPassword == users[i].password){
            currentuser = users[i].username;
            logintouser()
            localStorage.setItem("currentuser", JSON.stringify(currentuser)); //stores currentuser
            $("#myModal").modal("hide"); //Closes bootstrap modal 
            location.reload();
            
        }
        else{
            console.log("Fail")
            document.querySelector(".invalid").style.display = "block";
        }
        
    }

}


//Checks enter

function checkEnter(event){
    if (event.keyCode == 13){
        gologin();
    }
}

//Changes Login button to username

function logintouser(){
    var loginbutton = document.querySelector("#loginbutton")
    loginbutton.style.display = "none";

    var loggedinusername = document.querySelector("#loggedinusername");
    loggedinusername.innerHTML = String(currentuser);

    var profileusername = document.getElementById("name")
    profileusername.innerHTML = currentuser + ' the ' + currenttitle;

}


//Logs out

function logout(){
    var ans = confirm("Are you sure you want to log out?")
    if(ans){
        console.log(localStorage.removeItem('currentuser'));
        window.location.href = "index.html"}
    // if (file == "profile.html" || file == "visituser.html"){
        
    // }
    // else{
    //     location.reload();
    // }
    

    // }
    // else{
        
    // }
}


// Unnecessary codes

//Close and open modal (Not needed cuz bootstrap)

// var logincontainer = document.getElementById("logincontainer");
// var login = document.getElementById("login");

// function showlogin(){
//     logincontainer.style.display = "block";
//     login.style.display = "block";  
// }

// function closelogin(){
//     logincontainer.style.display = "none";
//     login.style.display = "none";
// }

// function showprofilemenu(){
    
    
//     if (profilemenu.style.display === "block")
//     {
//         profilemenu.style.display = "none";
//     }
//     else
//     {
//         profilemenu.style.display = "block";
//     }
// }

//Closes incorrect username or password

// function closeincorrect(){
//     document.querySelector(".invalid").style.display = "none";
// }

    //Calls showprofilemenu

    // loginbutton.onclick = function(){
    //     showprofilemenu();
    // }