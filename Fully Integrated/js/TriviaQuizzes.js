//Progress bar increase on scrolling down

$(window).load(function(){
    $(window).scroll(function() {
      var wintop = $(window).scrollTop(), docheight = $('article').height(), winheight = $(window).height();
      console.log(wintop);
      var totalScroll = (wintop/(docheight-winheight))*100;
      console.log("total scroll" + totalScroll);
      $(".progress-bar").css("width",totalScroll+"%");
    });
  
  });
  var score=0;
  var wrong=0;

// //This function compares the user input answers with the set answers
// var submit = function(){
//     var comp = localStorage.getItem("quiz",JSON.parse(storeall));
// }
// //if set answer==user input answer, score==1 else wrong+=1
// var compare = function(){
    
// }
// //when user clicks like button, increases favs by 1
// var favcount = function(){
  
// }
// //gets set quiz name from localstorage and puts into title header at id "titletext"
// document.getElementById("nameholder").innerHTML = localStorage.getItem();

