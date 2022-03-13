var marright = 100;
var marleft = 100
var len = document.getElementById("content").clientHeight;
document.getElementById("heading").innerHTML = localStorage["title"] || "Título";
document.getElementById("content").innerHTML = localStorage["text"] || "Texto";
document.getElementById("content").onkeypress = function(){mover()}
document.getElementById("content").onkeyup = function(){mover2()}
setInterval (function() {
  localStorage["title"]=document.getElementById("heading").innerHTML;
  localStorage["text"]=document.getElementById("content").innerHTML;
}, 1000);
function mover(){
  var x = event.which;
  var len2 = document.getElementById("content").clientHeight;
  if(x==13){
    marright=100;
    marleft=100;
    letras=0;
  }else{
    marright = marright + 10;
    marleft = marleft - 10;
    var margen = marright + "px";
    var margen2 = marleft + "px";
  }
  if(len2>len){
    marright=100;
    marleft=100;
    len=len2;
  }
  var margen = marright + "px";
  var margen2 = marleft + "px";
  document.getElementById("content").style.marginRight = margen;
  document.getElementById("content").style.marginLeft = margen2;
}
function mover2(){
  var x = event.which;
  if(x==8&&marright>100){
    marright = marright - 10;
    marleft = marleft + 10;
    var margen = marright + "px";
    var margen2 = marleft + "px";
    document.getElementById("content").style.marginRight = margen;
    document.getElementById("content").style.marginLeft = margen2;
  }
}