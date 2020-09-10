var canvas = document.getElementById("my-Canvas"),
    ctx = canvas.getContext("2d");
canvas.width = 934;
canvas.height = 622;
var background = new Image();
background.src = "/images/2.png";

background.onload = function(){
    ctx.drawImage(background,0,0);   
}