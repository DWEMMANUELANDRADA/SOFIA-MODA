$(document).ready(function(){
 

  $(".ak").on(
    {mouseenter:function(){
      $(this).css("opacity",".5");
    },
  mouseleave:function(){
    $(this).css("opacity", "1");
    
  }});/* evento blur
  $("#boton1").click(function(e){
    $("#foto-jeans").css("opacity",".3");
    e.preventDefault();
  });*/
  
});

