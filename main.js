$(document).ready(function(){
    $("h1").hide();
      $("p").click(function(){
        $("h1").slideDown("slow");
    })
    
    $("button").on("click",function(){
        $(this).hide();
    });
    
});