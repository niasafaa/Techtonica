/*eslint-disable*/
$(window, document, undefined).ready(function() {
  $('.signupbtn').click(function(event) {
    event.preventDefault();
    $('main').hide();
    $('.signupbtn').hide();
  });

  $('main').blur(function(event) {
    event.preventDefault();
    alert('hey');
    $('main').show();
    $('.signupbtn').show();
  });
});
