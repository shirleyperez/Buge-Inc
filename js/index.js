document.getElementById("toggle").addEventListener("click",function(event){
    event.preventDefault();
    document.getElementById("nav-header").classList.toggle("open");
    document.getElementById("body").classList.toggle("overflow-hidden");
});
var currentScroll = window.pageYOffset || document.body.ScroolTop;
var lastScroollTop = 0;
window.addEventListener("Scroll" , function(){
    var currentScroll = window.pageYOffset || document.body.ScroolTop;
    },false);
var lastScroollTop = 0;
window.addEventListener("Scroll" , function() {
        var currentScroll = window.pageYOffset || document.body.ScroolTop;
        if (currentScroll > lastScroollTop ) {
            document.getElementById("nav-header").classList.remove("header-in");
            document.getElementById("nav-header").style.opacity = 0;
        } else {
        document.getElementById("nav-header").classList.add("header-in");
        document.getElementById("nav-header").classList.add("solid");
        document.getElementById("nav-header").style.opacity = 1;
        }
        lastScroollTop = currentScroll;
}, false);
         if (currentScroll <=3) {
             document.getElementById("nav-header").classList.remove("solid");
             document.getElementById("nav-header").classList.remove("header-in");
         }
document.getElementById("toggle").addEventListener("click",function(event) {
    event.preventDefault();
    document.getElementById("header").classList.toggle("open");
    ducument.getElementById("body").classList.toggle("overflow-hidden");
});
