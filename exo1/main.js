function incrementVal(selector) {
var $item = selector;
var $curVal = $item.attr("value");
$item.attr("value", parseInt($curVal) + 1 );
}

$("#increment").on("click",function() {
incrementVal($('#counter'));
});

//let count = 0;
//Au clic sur le bouton,
//$("button").click(function(){
//j'incrémente ma variable "count"
//count ++;
//on affiche dans l'input le nombre de clicks
//$("#counter").val(count);
//});
