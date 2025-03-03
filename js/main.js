var lst = document.getElementById("langlist").style;
var menuPage = document.getElementById("menuPage").style;
var everything = document.getElementById("everything").style;
var body = document.getElementById("body").style;

window.addEventListener("scroll", function () {
    let hiddenText = document.querySelector(".headertitle");
    if (window.scrollY > 100) {
      hiddenText.style.opacity = "1";
      hiddenText.style.display = "block";
    } else {
      hiddenText.style.opacity = "0";
      hiddenText.style.display = "none";
    }
    lst.display = "none";
});

function langlistswitch(){
  if (lst.display == "flex") {
    lst.display = "none";
  }
  else{
    lst.display = "flex";
  }
}
function changelang(lang){
  lst.display = "none";
  document.cookie = "lang=" + lang + "; expires=Tue, 19 Jan 2038 04:14:07 GMT";
}

function openMenuPage(){
  menuPage.display = "flex";
  everything.display = "none"
  body.backgroundColor = "rgb(67, 40, 24)"
}function closeMenuPage(){
  everything.display = "block"
  menuPage.display = "none"
  body.backgroundColor = "rgb(250,232,182)"
}
