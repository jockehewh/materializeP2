$(document).ready(function(){
  $('.headbkg').css({'height':window.innerHeight/2+'px'});
  $('.midctn').css({'height':2*(window.innerHeight/3)+'px'});
  $(window).on('scroll', function(){
    let scroller = $(window).scrollTop();
    if(scroller == 0){
      $('.titre').css({'display':'none'});
    }
    if(scroller > 10){
      $('.headtxt').css({top:scroller/window.innerHeight*66+'%'})
      if(scroller > 10 && scroller < 333){
        $('.titre').css({'display':'block','font-size':22+scroller/6+'px'});
      }
      if($(window).innerWidth() > 1170){
        $('.headbkg').css({'background-position-y':'-'+scroller*.2+'%'})
      }else{
        $('.headbkg').css({'background-position-y':'-'+scroller*.7+'%'})
      }
    }
  })
});
