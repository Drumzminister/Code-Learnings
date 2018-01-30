$(function(){
  var accord = $("#accordion");
  var heading = $("h2");
  var paragraph = $("p");
  var button = $("#all");
  var t = $(this);  
  paragraph.not(":first").hide();

  accord.on("click", "h2",function(){
  var t = $(this);  
    
    if( t.next().is(":visible")){
      return t.next().slideUp("normal");
    }
    paragraph.slideUp("normal", "easeInBack");
    t.next().slideDown("normal","easeInCirc");
    });

    
    
    
    button.on("click", function(){

      if(paragraph.not(":first").is(":visible")){
        paragraph.slideUp();
        button.text("Open all")
      }else{
        paragraph.slideDown();
        button.text("Close all")
        
      }
    })

    $("#one").on("click",function(){
      var tee = $("#oneTarget");
        if( tee.next().is(":visible")){
          tee.next().slideUp();
          $("#one").text("Open Target 1")
        }else{
          tee.next().slideDown();
          $("#one").text("Close Target 1")
          
        }
    })

    $("#two").on("click",function(){
      var tee = $("#twoTarget");
        if( tee.next().is(":visible")){
          tee.next().slideUp();
          $("#two").text("Open Target 2")
        }else{
          tee.next().slideDown();
          $("#two").text("Close Target 2")
          
        }
    })

    $("#three").on("click",function(){
      var tee = $("#threeTarget");
        if( tee.next().is(":visible")){
          tee.next().slideUp();
          $("#three").text("Open Target 3")
        }else{
          tee.next().slideDown();
          $("#three").text("Close Target 3")
          
        }
    })
    
})