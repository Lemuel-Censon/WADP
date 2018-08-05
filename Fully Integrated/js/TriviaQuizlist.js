function setAttributes(el, attrs) {
    for (var key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
  }

//when user click a quiz the playcount will increase by 1

var playcount = 0;
function playcount(){
  playcount+=1;
  document.querySelector(".playcount");
}