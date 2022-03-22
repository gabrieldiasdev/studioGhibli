$(function(){
  
  var embed = $('.youtube');
  $('.video').append(embed);

  $('#trailer').click( function() {
    $('.gray_mask').fadeIn(200);
    $('#popup').fadeIn(300);
    $('.video').append(embed);
  });
 
  $('.gray_mask').click( function() {
    $('#popup').hide();
    $('.gray_mask').hide();
    $('.video').empty();
  });

  $('.gray_mask').click( function() {
    $('#popup').hide();
    $('.gray_mask').hide();
    $('.video').empty(); 
  }); 

});