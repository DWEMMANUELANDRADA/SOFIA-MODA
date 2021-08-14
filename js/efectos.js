$(document).ready(function(){
 
let jeans= document.querySelectorAll("#jeans");
  function mostrarScroll(){
    let scrollTop= document.documentElement.scrollTop;
    for (var i = 0 ; i < jeans.length; i++){
      let altura = jeans[i].offsetTop;
      if(altura - 200 < scrollTop){
        jeans[i].style.opacity=1;
      }
    }
  }
  window.addEventListener("scroll", mostrarScroll);
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

