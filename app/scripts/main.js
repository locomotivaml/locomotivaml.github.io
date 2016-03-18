$(function(){
  $('.player').YTPlayer();

  $(window).on('activate.bs.scrollspy', function(e, data) {
    console.log(data.relatedTarget);
    if(data.relatedTarget == '#home' || data.relatedTarget == '#about' || data.relatedTarget == '#contact') {
      $('#navbar-main').removeClass('navbar-light').addClass('navbar-dark');
      $('#navbar-main .navbar-brand img.logo-white').removeClass('hidden-xs-up');
      $('#navbar-main .navbar-brand img.logo-dark').addClass('hidden-xs-up');
    }
    else {
      $('#navbar-main').removeClass('navbar-dark').addClass('navbar-light');
      $('#navbar-main .navbar-brand img.logo-white').addClass('hidden-xs-up');
      $('#navbar-main .navbar-brand img.logo-dark').removeClass('hidden-xs-up');
    }
  });
});
