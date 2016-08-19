$(document).ready(function() {

  $(".toggle").click(function(){
    var name = $(this).attr("name");
    $(".sub-menu").hide();
    $("." + name).show();
  });

});
