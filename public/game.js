$(document).ready(function(){

  var counter = 0;
  
  $("img").addClass("img-responsive");
  $(".img-responsive").attr("disabled", true);

  $(".img-responsive").on("click", function(){
    if($(this).attr("disabled")){
      return;
    } else{
      $(this).removeClass("on").addClass("off").attr("disabled", true);
      countup();
    }
  });

  function countup() {
    counter = counter + 1;
  }


  $('#startButton').on('click', function () {
    $(".img-responsive").attr("disabled", false).removeClass("off").addClass("on");
    
    setTimeout(function countandgive(){
      $(".modal-body").empty();
      $(".modal-body").append("You clicked " + counter + " comedians.");
      $("#resultModal").modal("show");

    }, 20000);
  });

});






