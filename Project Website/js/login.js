//Variables

//Retrieving data from local storage

var users = JSON.parse(localStorage.getItem("username")); 
var password = JSON.parse(localStorage.getItem("password"));
var currentuser = JSON.parse(localStorage.getItem("currentuser"));

//placeholder to make them global

var inputUsername; 
var inputPassword; 


// Checks if user is logged in before
function ifloggedin(){
    if(currentuser !== undefined && currentuser !== null){
        logintouser();
    }
    else{
        profilemenu.style.display = "none";
    }
}



//Login script

function gologin(){
    inputUsername = document.getElementById("username1").value;
    inputPassword = document.getElementById("password").value;

    for(i = 0; i < users.length; i++){
        if(inputUsername.toLowerCase() == users[i].toLowerCase() && inputPassword == password[i]){

            logincontainer.style.display = "none";
            login.style.display = "none";
            document.querySelector("#login h1.invalid").style.display = "none"; 
            currentuser = inputUsername;

            logintouser()

            localStorage.setItem("currentuser", JSON.stringify(currentuser)); //stores currentuser
        }
        else{
            console.log("Fail")
            document.querySelector("#login h1.invalid").style.display = "block";
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

    var loginbutton = document.querySelector("#loginbutton p");
    loginbutton.innerHTML = String(currentuser);

    //Calls showprofilemenu
    loginbutton.onclick = function(){
        showprofilemenu();
    }
}

function showprofilemenu(){
    var profilemenu = document.getElementById("profileoptions");
    
    if (profilemenu.style.display === "block")
    {
        profilemenu.style.display = "none";
    }
    else
    {
        profilemenu.style.display = "block";
    }
}
//Logs out

function logout(){
    console.log(localStorage.removeItem('currentuser'));
    location.reload();

}


// Unnecessary codes

//Close and open modal (Not needed since bootstrap)

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