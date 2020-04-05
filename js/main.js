$(document).ready(function(){
  
    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });

    //var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    var animationEnd = 'animationend';
    $(".course img").hover(function(e) {
      e.preventDefault();
      //$(this).addClass('bounce').one(animationEnd, function() {
          $(e.target).parent().find('.title').css("z-index",1);
          //$(e.target).parent().find('.title').css("opacity",0.6);
          $(e.target).parent().find('.title').addClass('fadeIn');
          $(e.target).parent().find('.title').removeClass('fadeOut');
      //});
    });

    $(".course .close").click(function(e) {
      e.preventDefault();
      $(e.target).parent().addClass('fadeOut').one(animationEnd, function() {
        $(e.target).parent().css("z-index","");
        $(e.target).parent().parent().find('img').removeClass("bounce");
        //$(e.target).parent().parent().find('.ribbon').removeClass("bounce");
        $(e.target).parent().parent().find('.title').removeClass("fadeIn fadeOut");
      });
    });

    $(".fade-content").hover(function(e) {
      $(e.target).parent().find('img').css("transform", "scale(1.1)");
    }, function(e){
      $(e.target).parent().find('img').css("transform", "scale(1)")
    });
    
});