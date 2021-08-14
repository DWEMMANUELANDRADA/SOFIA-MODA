$(document).ready(function(){
 
let jeans= document.querySelectorAll("#jeans");
  function mostrarScroll(){
    let scrollTop= document.documentElement.scrollTop;
    for (var i = 0 ; i < jeans.length; i++){
      let altura = jeans[i].offsetTop;
      if(altura - 200 < scrollTop){
        jeans[i].style.opacity=1;
       jeans[i].classList.add("mostrar");
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
    
  }});
  
});

