$(document).ready(function(){

  function switchVisual() {
    if ($(".anim-container").hasClass('website')) {
      $(".anim-container").removeClass('website').addClass('app');
    }
    else if ($(".anim-container").hasClass('app')) {
      $(".anim-container").removeClass('app').addClass('growth');
    }
    else if ($(".anim-container").hasClass('growth')) {
      $(".anim-container").removeClass('growth').addClass('workshop');
    }
    else if ($(".anim-container").hasClass('workshop')) {
      $(".anim-container").removeClass('workshop').addClass('website');
    }
  };

  var autoplay = setInterval(switchVisual, 3500);
  
  $("#website").click(function(){
    $(".anim-container").attr('class', 'anim-container');
    $(".anim-container").addClass("website");
    clearInterval(autoplay);
    autoplay = setInterval(switchVisual, 3500);
  })
  $("#app").click(function(){
    $(".anim-container").attr('class', 'anim-container');
    $(".anim-container").addClass("app");
    clearInterval(autoplay);
    autoplay = setInterval(switchVisual, 3500);
  })  
  $("#growth").click(function(){
    $(".anim-container").attr('class', 'anim-container');
    $(".anim-container").addClass("growth");
    clearInterval(autoplay);
    autoplay = setInterval(switchVisual, 3500);
  })
  $("#workshop").click(function(){
    $(".anim-container").attr('class', 'anim-container');
    $(".anim-container").addClass("workshop");
    clearInterval(autoplay);
    autoplay = setInterval(switchVisual, 3500);
  })

  setInterval(function(){
    $(".anim-container").toggleClass("glimmer");
  }, 3000);


});