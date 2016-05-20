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
  
});
