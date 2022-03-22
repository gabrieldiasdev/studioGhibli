$(function(){
  
    var embed = $('.youtube');
    $('.video').append(embed);
  
    /* click 'PLAY'  button */
    $('#trailer').click( function() {
      // show popup background
      $('.gray_mask').fadeIn(200);
      // show popup 
      $('#popup').fadeIn(300);
      // append youtube iframe on popup
      $('.video').append(embed);
    });
 
    /* click 'CLOSE' button */
    $('.gray_mask').click( function() {
      // hide popup background
      $('#popup').hide();
      // hide popup 
      $('.gray_mask').hide();
      // empty youtube iframe on popup
      $('.video').empty();
    });

  /* click 'popu background' */
  $('.gray_mask').click( function() {
    // hide popup background
    $('#popup').hide();
    // hide popup 
    $('.gray_mask').hide();
    // empty youtube iframe on popup
    $('.video').empty(); 
  }); 
  
});