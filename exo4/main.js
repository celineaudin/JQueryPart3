$(document).ready(function(){
  $("#increase").click(function(){
    $("div").css("height", "+=80px");
  });
});

$(document).ready(function(){
  $("#hide").click(function(){
    $("div").hide();
  });
});

$(document).ready(function(){
  $("#change").click(function(){
    $("div").css("background-color", "red");
  });
});

$(document).ready(function(){
  $("#return").click(function(){
    $("div").css("background-color", "green");
  });
});

$(document).ready(function(){
  $("#reappear").click(function(){
    $("div").show();
  });
});
