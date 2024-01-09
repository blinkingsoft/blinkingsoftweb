// Path: js/vtab-script.js

// vertical tab script for the vertical tab widget
$(".tabs li a").click(function(e){
  e.preventDefault();
  var parent = $(this).parents(".tabs-container");
  parent.find("li a").removeClass("active");
  $(this).addClass("active");
  parent.find(".tab-content").hide();
  var activeTab = $(this).attr("href");
  parent.find(activeTab+"-content").fadeIn();
});
$(".tabs li a:first").click();
// End vertical tab script for the vertical tab widget
