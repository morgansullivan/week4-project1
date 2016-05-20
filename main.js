// Add your JS here.

$(document).ready(function(){
 
     $(".hideMe").click(function(){
        $(this).hide();
   
  });
  
    $(".changeColor").click(function(){
        $("li:nth-child(3)").css("color", "#8A2BE2");
  });
  
      $("li:nth-child(4)").click(function(){
       $("li:nth-child(4)").append("<li>I am an extra list item</li>");
  });
  
  
  $("#removeLi").click(function(){
    $("ul li:nth-child(2)").remove();
  });

  $("li:last").click(function(){
    $("li:last").css("font-size", "40px");
    $("li:nth-child(1)").hide();
    $("li:nth-child(2)").hide();
    $("li:nth-child(3)").hide();
   
  });
  
   $(".cute").click(function(){
    
   $(".cute").clone(true).insertAfter(".cute");
    
  });
  
});
