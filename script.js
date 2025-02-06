let elem = document.querySelectorAll(".elem")


elem.forEach(function(val){
val.addEventListener("mousemove",function(pos){
val.childNodes[3].style.left = pos.x + "px";
val.childNodes[3].style.opacity= 1;

})
val.addEventListener("mouseleave",function(){
val.childNodes[3].style.opacity= 0;
})

})