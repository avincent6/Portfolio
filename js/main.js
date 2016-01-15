
  /*$(window).scroll(function() {
    $("#water").css({"height": "auto", "width":"100%", "max-width":"none", "max-height":"none"});
    $(".water").slideUp("slow");
    $("#water").remove();
  });

/*  $("#waves").mouseover(function() {
    $("#photo-btn-div").css({"display": "block"}).slideDown("slow");
    $("#waves").css({"-webkit-filter": "blur(5px)",
    "-moz-filter": "blur(5px)",
    "-o-filter": "blur(5px)",
    "-ms-filter": "blur(5px)",
    "filter": "blur(5px)", "opacity": ".9"});
  });

  $('')
*/
  $("#photography-btn").hover(function() {
    $("#waves").css("opactiy", ".9");
  });
