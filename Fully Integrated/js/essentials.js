//This is for bootstrap tooltip
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

//Retrieving data from local storage

var users = JSON.parse(localStorage.getItem("users"));
var currentuser = JSON.parse(localStorage.getItem("currentuser"));

//Getting elements
var body = document.getElementsByTagName("BODY")[0];

//Navbar stuff
var essentials = document.createElement('div')
essentials.className = "essentials"

// var essentialscontainer = document.getElementById("essentials")
var navitems;

var pagename = window.location.pathname; //Gets the pathname
var file = pagename.split("/").pop(); //Gets the filename

if (currentuser == undefined || currentuser == null) {
    if (file == "index.html") {
        navitems = '<a class="navbar-brand current" href="#">\
<img src="../../images/logo.png" height="30" class="d-inline-block align-top" alt=""> \
EcoDose\
</a>\
\
<!-- Collapses navbar contents when screen is smaller -->\
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText"\
aria-expanded="false" aria-label="Toggle navigation">\
\
<span class="navbar-toggler-icon"></span>\
\
</button>\
\
<!-- Navbar contents and links -->\
\
<div class="collapse navbar-collapse" id="navbarText">\
\
<ul class="navbar-nav mr-auto">\
\
    <li class="nav-item">\
        <a href="Map.html" class="nav-link"> Map\
            <span class="sr-only">(current)</span>\
        </a>\
    </li>\
\
    <li class="nav-item">\
        <a class="nav-link" href="./WADP Trivia.html"> Trivia </a>\
    </li>\
\
    <li class="nav-item">\
        <a class="nav-link disabled" href="#" data-toggle="tooltip" data-placement="top" title="You must be logged in to access this"> Study Planner </a>\
    </li>\
\
<li class="nav-item">\
<a class="nav-link" href="video.html"> Videos </a>\
</li>\
\
<li class="nav-item">\
<a class="nav-link disabled" href="#" data-toggle="tooltip" data-placement="top" title="You must be logged in to access this"> Minigame </a>\
</li>\
\
    <li class="nav-item">\
        <a class="nav-link" href="About.html"> About </a>\
    </li>\
</ul>'
    }
    else if (file === "Map.html") {
        navitems = '<a class="navbar-brand current" href="index.html">\
    <img src="../../images/logo.png" height="30" class="d-inline-block align-top" alt=""> \
    EcoDose\
    </a>\
    \
    <!-- Collapses navbar contents when screen is smaller -->\
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText"\
    aria-expanded="false" aria-label="Toggle navigation">\
    \
    <span class="navbar-toggler-icon"></span>\
    \
    </button>\
    \
    <!-- Navbar contents and links -->\
    \
    <div class="collapse navbar-collapse" id="navbarText">\
    \
    <ul class="navbar-nav mr-auto">\
    \
        <li class="nav-item">\
            <a href="Map.html" class="nav-link active"> Map\
                <span class="sr-only">(current)</span>\
            </a>\
        </li>\
    \
        <li class="nav-item">\
            <a class="nav-link" href="./WADP Trivia.html"> Trivia </a>\
        </li>\
    \
        <li class="nav-item">\
            <a class="nav-link disabled" href="#" data-toggle="tooltip" data-placement="top" title="You must be logged in to access this"> Study Planner </a>\
        </li>\
    \
    <li class="nav-item">\
<a class="nav-link" href="video.html"> Videos </a>\
</li>\
\
<li class="nav-item">\
<a class="nav-link disabled" href="#" data-toggle="tooltip" data-placement="top" title="You must be logged in to access this"> Minigame </a>\
</li>\
\
        <li class="nav-item">\
            <a class="nav-link" href="About.html"> About </a>\
        </li>\
    </ul>'

    }
    else if (file === "About.html") {
        navitems = '<a class="navbar-brand current" href="index.html">\
    <img src="../../images/logo.png" height="30" class="d-inline-block align-top" alt=""> \
    EcoDose\
    </a>\
    \
    <!-- Collapses navbar contents when screen is smaller -->\
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText"\
    aria-expanded="false" aria-label="Toggle navigation">\
    \
    <span class="navbar-toggler-icon"></span>\
    \
    </button>\
    \
    <!-- Navbar contents and links -->\
    \
    <div class="collapse navbar-collapse" id="navbarText">\
    \
    <ul class="navbar-nav mr-auto">\
    \
        <li class="nav-item">\
            <a href="Map.html" class="nav-link"> Map\
                <span class="sr-only">(current)</span>\
            </a>\
        </li>\
    \
        <li class="nav-item">\
            <a class="nav-link" href="./WADP Trivia.html"> Trivia </a>\
        </li>\
    \
        <li class="nav-item">\
            <a class="nav-link disabled" href="#" data-toggle="tooltip" data-placement="top" title="You must be logged in to access this"> Study Planner </a>\
        </li>\
    \
    <li class="nav-item">\
<a class="nav-link" href="video.html"> Videos </a>\
</li>\
\
<li class="nav-item">\
<a class="nav-link disabled" href="#" data-toggle="tooltip" data-placement="top" title="You must be logged in to access this"> Minigame </a>\
</li>\
\
        <li class="nav-item">\
            <a class="nav-link active" href="About.html"> About </a>\
        </li>\
    </ul>'
    }

    else if (file == "video.html") {
        navitems = '<a class="navbar-brand current" href="index.html">\
    <img src="../../images/logo.png" height="30" class="d-inline-block align-top" alt=""> \
    EcoDose\
    </a>\
    \
    <!-- Collapses navbar contents when screen is smaller -->\
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText"\
    aria-expanded="false" aria-label="Toggle navigation">\
    \
    <span class="navbar-toggler-icon"></span>\
    \
    </button>\
    \
    <!-- Navbar contents and links -->\
    \
    <div class="collapse navbar-collapse" id="navbarText">\
    \
    <ul class="navbar-nav mr-auto">\
    \
        <li class="nav-item">\
            <a href="Map.html" class="nav-link"> Map\
                <span class="sr-only">(current)</span>\
            </a>\
        </li>\
    \
        <li class="nav-item">\
            <a class="nav-link" href="./WADP Trivia.html"> Trivia </a>\
        </li>\
    \
        <li class="nav-item">\
            <a class="nav-link disabled" href="#" data-toggle="tooltip" data-placement="top" title="You must be logged in to access this"> Study Planner </a>\
        </li>\
    \
    <li class="nav-item">\
<a class="nav-link  active" href="video.html"> Videos </a>\
</li>\
\
<li class="nav-item">\
<a class="nav-link disabled" href="#" data-toggle="tooltip" data-placement="top" title="You must be logged in to access this"> Minigame </a>\
</li>\
\
        <li class="nav-item">\
            <a class="nav-link" href="About.html"> About </a>\
        </li>\
    </ul>'
    }

    else if (file == "Earth%20Day.html") {

        navitems = '<a class="navbar-brand current" href="index.html">\
    <img src="../images/logo.png" height="30" class="d-inline-block align-top" alt=""> \
    EcoDose\
    </a>\
    \
    <!-- Collapses navbar contents when screen is smaller -->\
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText"\
    aria-expanded="false" aria-label="Toggle navigation">\
    \
    <span class="navbar-toggler-icon"></span>\
    \
    </button>\
    \
    <!-- Navbar contents and links -->\
    \
    <div class="collapse navbar-collapse" id="navbarText">\
    \
    <ul class="navbar-nav mr-auto">\
    \
        <li class="nav-item">\
            <a href="Map.html" class="nav-link"> Map\
                <span class="sr-only">(current)</span>\
            </a>\
        </li>\
    \
        <li class="nav-item">\
            <a class="nav-link" href="./WADP Trivia.html"> Trivia </a>\
        </li>\
    \
        <li class="nav-item">\
            <a class="nav-link disabled" href="#" data-toggle="tooltip" data-placement="top" title="You must be logged in to access this"> Study Planner </a>\
        </li>\
    \
    <li class="nav-item">\
    <a class="nav-link " href="video.html"> Videos </a>\
    </li>\
    \
    <li class="nav-item">\
<a class="nav-link disabled" href="#" data-toggle="tooltip" data-placement="top" title="You must be logged in to access this"> Minigame </a>\
</li>\
\
        <li class="nav-item">\
            <a class="nav-link" href="About.html"> About </a>\
        </li>\
        </ul>'
    }
   
    else {

        navitems = '<a class="navbar-brand current" href="index.html">\
<img src="../../images/logo.png" height="30" class="d-inline-block align-top" alt=""> \
EcoDose\
</a>\
\
<!-- Collapses navbar contents when screen is smaller -->\
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText"\
aria-expanded="false" aria-label="Toggle navigation">\
\
<span class="navbar-toggler-icon"></span>\
\
</button>\
\
<!-- Navbar contents and links -->\
\
<div class="collapse navbar-collapse" id="navbarText">\
\
<ul class="navbar-nav mr-auto">\
\
    <li class="nav-item">\
        <a href="Map.html" class="nav-link"> Map\
            <span class="sr-only">(current)</span>\
        </a>\
    </li>\
\
    <li class="nav-item">\
        <a class="nav-link" href="./WADP Trivia.html"> Trivia </a>\
    </li>\
\
    <li class="nav-item">\
        <a class="nav-link disabled" href="#" data-toggle="tooltip" data-placement="top" title="You must be logged in to access this"> Study Planner </a>\
    </li>\
\
<li class="nav-item">\
<a class="nav-link" href="video.html"> Videos </a>\
</li>\
\
<li class="nav-item">\
<a class="nav-link disabled" href="#" data-toggle="tooltip" data-placement="top" title="You must be logged in to access this"> Minigame </a>\
</li>\
\
    <li class="nav-item">\
        <a class="nav-link" href="About.html"> About </a>\
    </li>\
</ul>'
    }
}
else {
    if (file == "index.html") {
        navitems = '<a class="navbar-brand current" href="#">\
<img src="../../images/logo.png" height="30" class="d-inline-block align-top" alt=""> \
EcoDose\
</a>\
\
<!-- Collapses navbar contents when screen is smaller -->\
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText"\
aria-expanded="false" aria-label="Toggle navigation">\
\
<span class="navbar-toggler-icon"></span>\
\
</button>\
\
<!-- Navbar contents and links -->\
\
<div class="collapse navbar-collapse" id="navbarText">\
\
<ul class="navbar-nav mr-auto">\
\
    <li class="nav-item">\
        <a href="Map.html" class="nav-link"> Map\
            <span class="sr-only">(current)</span>\
        </a>\
    </li>\
\
    <li class="nav-item">\
        <a class="nav-link" href="./WADP Trivia.html"> Trivia </a>\
    </li>\
\
    <li class="nav-item">\
        <a class="nav-link" href="Study Planner.html"> Study Planner </a>\
    </li>\
\
<li class="nav-item">\
<a class="nav-link" href="video.html"> Videos </a>\
</li>\
\
<li class="nav-item">\
<a class="nav-link  " href="Earth Day Minigame.html"> Minigame </a>\
</li>\
\
    <li class="nav-item">\
        <a class="nav-link" href="About.html"> About </a>\
    </li>\
</ul>'
    }
    else if (file === "Map.html") {
        navitems = '<a class="navbar-brand current" href="index.html">\
    <img src="../../images/logo.png" height="30" class="d-inline-block align-top" alt=""> \
    EcoDose\
    </a>\
    \
    <!-- Collapses navbar contents when screen is smaller -->\
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText"\
    aria-expanded="false" aria-label="Toggle navigation">\
    \
    <span class="navbar-toggler-icon"></span>\
    \
    </button>\
    \
    <!-- Navbar contents and links -->\
    \
    <div class="collapse navbar-collapse" id="navbarText">\
    \
    <ul class="navbar-nav mr-auto">\
    \
        <li class="nav-item">\
            <a href="Map.html" class="nav-link active"> Map\
                <span class="sr-only">(current)</span>\
            </a>\
        </li>\
    \
        <li class="nav-item">\
            <a class="nav-link" href="./WADP Trivia.html"> Trivia </a>\
        </li>\
    \
        <li class="nav-item">\
            <a class="nav-link" href="Study Planner.html"> Study Planner </a>\
        </li>\
    \
    <li class="nav-item">\
<a class="nav-link" href="video.html"> Videos </a>\
</li>\
\
<li class="nav-item">\
<a class="nav-link  " href="Earth Day Minigame.html"> Minigame </a>\
</li>\
\
        <li class="nav-item">\
            <a class="nav-link" href="About.html"> About </a>\
        </li>\
    </ul>'

    }
    else if (file === "About.html") {
        navitems = '<a class="navbar-brand current" href="index.html">\
    <img src="../../images/logo.png" height="30" class="d-inline-block align-top" alt=""> \
    EcoDose\
    </a>\
    \
    <!-- Collapses navbar contents when screen is smaller -->\
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText"\
    aria-expanded="false" aria-label="Toggle navigation">\
    \
    <span class="navbar-toggler-icon"></span>\
    \
    </button>\
    \
    <!-- Navbar contents and links -->\
    \
    <div class="collapse navbar-collapse" id="navbarText">\
    \
    <ul class="navbar-nav mr-auto">\
    \
        <li class="nav-item">\
            <a href="Map.html" class="nav-link"> Map\
                <span class="sr-only">(current)</span>\
            </a>\
        </li>\
    \
        <li class="nav-item">\
            <a class="nav-link" href="./WADP Trivia.html"> Trivia </a>\
        </li>\
    \
        <li class="nav-item">\
            <a class="nav-link" href="Study Planner.html"> Study Planner </a>\
        </li>\
    \
    <li class="nav-item">\
<a class="nav-link" href="video.html"> Videos </a>\
</li>\
\
<li class="nav-item">\
<a class="nav-link " href="Earth Day Minigame.html"> Minigame </a>\
</li>\
\
        <li class="nav-item">\
            <a class="nav-link active" href="About.html"> About </a>\
        </li>\
    </ul>'
    }

    else if (file == "video.html") {
        navitems = '<a class="navbar-brand current" href="index.html">\
    <img src="../../images/logo.png" height="30" class="d-inline-block align-top" alt=""> \
    EcoDose\
    </a>\
    \
    <!-- Collapses navbar contents when screen is smaller -->\
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText"\
    aria-expanded="false" aria-label="Toggle navigation">\
    \
    <span class="navbar-toggler-icon"></span>\
    \
    </button>\
    \
    <!-- Navbar contents and links -->\
    \
    <div class="collapse navbar-collapse" id="navbarText">\
    \
    <ul class="navbar-nav mr-auto">\
    \
        <li class="nav-item">\
            <a href="Map.html" class="nav-link"> Map\
                <span class="sr-only">(current)</span>\
            </a>\
        </li>\
    \
        <li class="nav-item">\
            <a class="nav-link" href="./WADP Trivia.html"> Trivia </a>\
        </li>\
    \
        <li class="nav-item">\
            <a class="nav-link" href="Study Planner.html"> Study Planner </a>\
        </li>\
    \
    <li class="nav-item">\
<a class="nav-link  active" href="video.html"> Videos </a>\
</li>\
\
<li class="nav-item">\
<a class="nav-link" href="Earth Day Minigame.html"> Minigame </a>\
</li>\
\
        <li class="nav-item">\
            <a class="nav-link" href="About.html"> About </a>\
        </li>\
    </ul>'
    }

    else if (file == "Earth%20Day.html") {

        navitems = '<a class="navbar-brand current" href="index.html">\
    <img src="../images/logo.png" height="30" class="d-inline-block align-top" alt=""> \
    EcoDose\
    </a>\
    \
    <!-- Collapses navbar contents when screen is smaller -->\
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText"\
    aria-expanded="false" aria-label="Toggle navigation">\
    \
    <span class="navbar-toggler-icon"></span>\
    \
    </button>\
    \
    <!-- Navbar contents and links -->\
    \
    <div class="collapse navbar-collapse" id="navbarText">\
    \
    <ul class="navbar-nav mr-auto">\
    \
        <li class="nav-item">\
            <a href="Map.html" class="nav-link"> Map\
                <span class="sr-only">(current)</span>\
            </a>\
        </li>\
    \
        <li class="nav-item">\
            <a class="nav-link" href="./WADP Trivia.html"> Trivia </a>\
        </li>\
    \
        <li class="nav-item">\
            <a class="nav-link" href="Study Planner.html"> Study Planner </a>\
        </li>\
    \
    <li class="nav-item">\
    <a class="nav-link " href="video.html"> Videos </a>\
    </li>\
    \
    <li class="nav-item">\
<a class="nav-link" href="Earth Day Minigame.html"> Minigame </a>\
</li>\
\
        <li class="nav-item">\
            <a class="nav-link" href="About.html"> About </a>\
        </li>\
        </ul>'
    }
    else if (file == "Earth%20Day%20Minigame.html") {

        navitems = '<a class="navbar-brand current" href="index.html">\
    <img src="../images/logo.png" height="30" class="d-inline-block align-top" alt=""> \
    EcoDose\
    </a>\
    \
    <!-- Collapses navbar contents when screen is smaller -->\
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText"\
    aria-expanded="false" aria-label="Toggle navigation">\
    \
    <span class="navbar-toggler-icon"></span>\
    \
    </button>\
    \
    <!-- Navbar contents and links -->\
    \
    <div class="collapse navbar-collapse" id="navbarText">\
    \
    <ul class="navbar-nav mr-auto">\
    \
        <li class="nav-item">\
            <a href="Map.html" class="nav-link"> Map\
                <span class="sr-only">(current)</span>\
            </a>\
        </li>\
    \
        <li class="nav-item">\
            <a class="nav-link" href="./WADP Trivia.html"> Trivia </a>\
        </li>\
    \
        <li class="nav-item">\
            <a class="nav-link" href="Study Planner.html"> Study Planner </a>\
        </li>\
    \
    <li class="nav-item">\
    <a class="nav-link " href="video.html"> Videos </a>\
    </li>\
    \
    <li class="nav-item active">\
<a class="nav-link" href="Earth Day Minigame.html"> Minigame </a>\
</li>\
\
        <li class="nav-item">\
            <a class="nav-link" href="About.html"> About </a>\
        </li>\
        </ul>'
    }
    else if (file == "Study%20Planner.html" || file == "ToDoList.html") {

        navitems = '<a class="navbar-brand current" href="index.html">\
    <img src="../images/logo.png" height="30" class="d-inline-block align-top" alt=""> \
    EcoDose\
    </a>\
    \
    <!-- Collapses navbar contents when screen is smaller -->\
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText"\
    aria-expanded="false" aria-label="Toggle navigation">\
    \
    <span class="navbar-toggler-icon"></span>\
    \
    </button>\
    \
    <!-- Navbar contents and links -->\
    \
    <div class="collapse navbar-collapse" id="navbarText">\
    \
    <ul class="navbar-nav mr-auto">\
    \
        <li class="nav-item">\
            <a href="Map.html" class="nav-link"> Map\
                <span class="sr-only">(current)</span>\
            </a>\
        </li>\
    \
        <li class="nav-item">\
            <a class="nav-link" href="../WADP Trivia.html"> Trivia </a>\
        </li>\
    \
        <li class="nav-item active">\
            <a class="nav-link" href="Study Planner.html"> Study Planner </a>\
        </li>\
    \
    <li class="nav-item">\
    <a class="nav-link " href="video.html"> Videos </a>\
    </li>\
    \
    <li class="nav-item">\
<a class="nav-link" href="Earth Day Minigame.html"> Minigame </a>\
</li>\
\
        <li class="nav-item">\
            <a class="nav-link" href="About.html"> About </a>\
        </li>\
        </ul>'
    }
    else if (file == "WADP%20Trivia.html" || file == "Createquiz.html") {

        navitems = '<a class="navbar-brand current" href="index.html">\
    <img src="../images/logo.png" height="30" class="d-inline-block align-top" alt=""> \
    EcoDose\
    </a>\
    \
    <!-- Collapses navbar contents when screen is smaller -->\
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText"\
    aria-expanded="false" aria-label="Toggle navigation">\
    \
    <span class="navbar-toggler-icon"></span>\
    \
    </button>\
    \
    <!-- Navbar contents and links -->\
    \
    <div class="collapse navbar-collapse" id="navbarText">\
    \
    <ul class="navbar-nav mr-auto">\
    \
        <li class="nav-item">\
            <a href="Map.html" class="nav-link"> Map\
                <span class="sr-only">(current)</span>\
            </a>\
        </li>\
    \
        <li class="nav-item active">\
            <a class="nav-link" href="./WADP Trivia.html"> Trivia </a>\
        </li>\
    \
        <li class="nav-item">\
            <a class="nav-link" href="Study Planner.html"> Study Planner </a>\
        </li>\
    \
    <li class="nav-item">\
    <a class="nav-link " href="video.html"> Videos </a>\
    </li>\
    \
    <li class="nav-item">\
<a class="nav-link" href="Earth Day Minigame.html"> Minigame </a>\
</li>\
\
        <li class="nav-item">\
            <a class="nav-link" href="About.html"> About </a>\
        </li>\
        </ul>'
    }
    else {

        navitems = '<a class="navbar-brand current" href="index.html">\
<img src="../../images/logo.png" height="30" class="d-inline-block align-top" alt=""> \
EcoDose\
</a>\
\
<!-- Collapses navbar contents when screen is smaller -->\
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText"\
aria-expanded="false" aria-label="Toggle navigation">\
\
<span class="navbar-toggler-icon"></span>\
\
</button>\
\
<!-- Navbar contents and links -->\
\
<div class="collapse navbar-collapse" id="navbarText">\
\
<ul class="navbar-nav mr-auto">\
\
    <li class="nav-item">\
        <a href="Map.html" class="nav-link"> Map\
            <span class="sr-only">(current)</span>\
        </a>\
    </li>\
\
    <li class="nav-item">\
        <a class="nav-link" href="./WADP Trivia.html"> Trivia </a>\
    </li>\
\
    <li class="nav-item">\
        <a class="nav-link" href="Study Planner.html"> Study Planner </a>\
    </li>\
\
<li class="nav-item">\
<a class="nav-link" href="video.html"> Videos </a>\
</li>\
\
<li class="nav-item">\
<a class="nav-link" href="Earth Day Minigame.html"> Minigame </a>\
</li>\
\
    <li class="nav-item">\
        <a class="nav-link" href="About.html"> About </a>\
    </li>\
</ul>'
    }
}


var htmlstuff = '<!-- Nav bar (Got this from bootstrap) -->\
\
	<nav id="navbar" class="navbar navbar-expand-lg navbar-light bg-light fixed-top"> \
\
        <!-- Icon and word -->'



    + navitems + //Gives me the option to choose which page I'm at


    '<ul id="rightsidenav" class="navbar-nav float-right">\
				<li id="loginbutton" data-toggle="modal" data-target="#myModal" onclick="closeincorrect()">\
					Login\
				</li>\
\
				<li id="loggedinusername" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\
\
				</li>\
\
				<div class="dropdown">\
					<div style="min-width: 300px; overflow: hidden;" class="dropdown-menu dropdown-menu-right" aria-labelledby="loggedinusername">\
\
						<a id="header" class="dropdown-header" href="profile.html">\
							<img src="../../images/Profile Pictures/Tree.png" id="profilepic" alt="">\
							<p id="name" class="text-justify"> placeholder </p>\
						</a>\
						<div class="dropdown-divider"></div>\
\
						<a id="profile" class="dropdown-item" href="profile.html">\
							<img src="../../images/Profile/no_avatar.jpg" alt="">\
							<p> My Profile </p>\
                        </a>\
                        <a id="messages" class="dropdown-item" href="messages.html">\
                        <img src="../../images/profile/message.png" alt="">\
                            <p> Messages </p>\
                        </a>\
                        <a id="achievements" class="dropdown-item" href="Achievements.html">\
                        <img src="../../images/profile/achievements.png" alt="">\
                            <p> Achievements </p>\
                        </a>\
						<a id="logout" class="dropdown-item" href="#" onclick="logout()">\
							<img src="../../images/Profile/Logout.png" alt="">\
							<p> Log out </p>\
						</a>\
					</div>\
				</div>\
			</ul>\
\
		</div>\
	</nav>\
\
	<!-- Bootstrap Modal -->\
\
	<div class="modal" id="myModal">\
\
		<div class="modal-dialog">\
\
			<div class="modal-content">\
\
				<!-- Modal Header -->\
\
				<div class="modal-header">\
					<h4 class="modal-title">Login</h4>\
					<button type="button" class="close" data-dismiss="modal">&times;</button>\
				</div>\
\
				<!-- Modal body -->\
\
				<div class="modal-body ">\
\
					<!-- This only shows up when they can\'t log in -->\
					<p class="invalid"> Incorrect Username or Password</p>\
\
					<!-- The form for log in-->\
\
					<form>\
						<div class="form-group">\
							<label for="username1"> Username: </label>\
							<input type="text" placeholder="Enter username" id="username1" class="form-control" onkeydown="checkEnter(event)" required>\
						</div>\
\
						<div class="form-group">\
							<label for="password"> Password: </label>\
							<input type="password" placeholder="Password" class="form-control" id="password" onkeydown="checkEnter(event)" required>\
						</div>\
\
					</form>\
\
					<hr>\
\
					<!-- Logs in -->\
					<button type="button" class="btn btn-success btn-block" onclick="gologin()"> Log in </button>\
\
					<br>\
\
					<!-- Signs up -->\
					\
					<a href="./SignUp.html">\
						<button type="button" class="btn btn-success btn-block">\
                         Sign Up </button>\
					</a>\
					<br>\
					\
					<a href="#"> <p class="text-center">Forgot your password? </p></a>\
\
				</div>\
\
\
			</div>\
		</div>\
\
	</div>\
\
'

// Back slashes are used to escape line breaks 


essentials.innerHTML = htmlstuff; //Changes the inside of #essentials to htmlstuff
body.appendChild(essentials)

function account() {
    for (i = 0; i < users.length; i++) {
        if (currentuser == users[i].username)
            return i
    }
}

try {
    document.getElementById("profilepic").src = users[account()].picture
}
catch (err) {
    console.log("hi")
}

