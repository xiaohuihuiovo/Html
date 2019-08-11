$(function() {
  // var a = document.querySelector('#nav').querySelectorAll(a);

  // var nav = document.getElementById('nav');
  // var a = nav.getElementsByTagName(a)
  $('#nav').children('a').click(function() {
    $(this).addClass('baseline').siblings().removeClass();
  })
})