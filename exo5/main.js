var posiX = 0;
var posiY = 0;
$("#command").on("keydown", function(event){
  var windowHeight = $(window).height() -20;
  var windowWidth = $(window).width() -20;
  switch (event.which){
    case 37:
    console.log("left");
    posiX = posiX -10;
    if (posiX > 0){
    $(".dive").css("margin-left", posiX);
}else if (posiX < 0){
  posiX = windowWidth;
    $(".dive").css("margin-left", posiX);
}
break;
case 38:
console.log("top");
posiY = posiY -10;
if (posiY > 0){
$(".dive").css("margin-top", posiY);
}else if (posiY < 0){
posiY = windowHeight;
$(".dive").css("margin-top", posiY);
}
break;
case 39:
console.log("right");
posiX = posiX +10;
if (windowWidth > posiX){
$(".dive").css("margin-left", posiX);
}else if (windowWidth < posiX){
posiX = 0;
$(".dive").css("margin-left", posiX);
}
break;
case 40:
console.log("down");
posiY = posiY +10;
if (windowHeight> posiY){
$(".dive").css("margin-top", posiY);
}else if  (windowHeight < posiY){
posiY = 0;
$(".dive").css("margin-top", posiY);
}
}
});
