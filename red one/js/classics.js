$(function() {
  $('.right').children('a').click(function() {
    $(this).addClass('arrow ').siblings().removeClass();
  })
})