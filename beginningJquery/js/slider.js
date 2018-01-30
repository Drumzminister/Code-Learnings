$(function(){
  var slideWrapper = $("#slider");
  var sliderList = slideWrapper.children("ul");
  var sliderItems = sliderList.children("li");
  var buttons = slideWrapper.children(".button");



  buttons.on("click", function(){
  var isBackBtn = $(this).hasClass("back")
    
    if((isBackBtn && isAtStart()) || (!isBackBtn && isAtEnd())) {
      return;
      }

    if(isBackBtn){
      animateSlider("+", 1000);
    }else{
      animateSlider("-", 1000)
    };
  })

  var animateSlider = function(direction, duration, callback){
    sliderList.stop(true,true).animate({
      "margin-left": direction + "=750px"
    }, duration, callback)
  }

  var isAtStart = function() {
    return parseInt(sliderList.css("margin-left"), 10) > -750;
    };

    var isAtEnd = function() {
      var imageWidth = sliderItems.first().width();
      var imageCount = sliderItems.length;
      var maxMargin = -1 *(imageWidth * (imageCount -2));
      return parseInt(sliderList.css("margin-left"), 10) < maxMargin;
    }
    
  });
