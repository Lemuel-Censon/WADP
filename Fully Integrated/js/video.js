var cinema = document.getElementById("cinema");
var button = document.getElementById("cinemabtn");

function offcinema(){
    if(cinema.style.display != "block"){
        cinema.style.display = "block";
        button.innerHTML = "Quit Cinema Mode"


    }
    else{
        
        cinema.style.display = "none";
        button.innerHTML = "Enter Cinema Mode"
    }
    
}

var sources = [
    'https://www.youtube.com/embed/videoseries?list=PL3sfFQ0JZ2KMbN0DZ0gXdNh_BEGQiwD5k', //Kurz
    'https://www.youtube.com/embed/videoseries?list=PL3sfFQ0JZ2KN1FVFXOZ2o2HIwSyDg0z-s', //MinE
    'https://www.youtube.com/embed/videoseries?list=PL3sfFQ0JZ2KObXK8gI-OM3s7pzhDCgW7B', //Ted-Ed
    'https://www.youtube.com/embed/videoseries?list=PL3sfFQ0JZ2KPLg1VjLEDwDVQlihRFqW8X', //TEDx Talks
    'https://www.youtube.com/embed/videoseries?list=PL3sfFQ0JZ2KO8rLtKrRnGxX_H0ukUs0px', //AsapSCIENCE

]

var vid= document.getElementById("mainvid")

function changeplaylist(src){
    
    vid.src = sources[src]
}

