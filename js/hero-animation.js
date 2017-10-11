$(document).ready(function(){
  
  $("#website").click(function(){
    $(".anim-container").attr('class', 'anim-container');
    $(".anim-container").addClass("website");
  })
  $("#app").click(function(){
    $(".anim-container").attr('class', 'anim-container');
    $(".anim-container").addClass("app");
  })  
  $("#growth").click(function(){
    $(".anim-container").attr('class', 'anim-container');
    $(".anim-container").addClass("growth");
  })
  $("#workshop").click(function(){
    $(".anim-container").attr('class', 'anim-container');
    $(".anim-container").addClass("workshop");
  })

  setInterval(function(){
    $(".anim-container").toggleClass("glimmer");
  }, 3000);	

});