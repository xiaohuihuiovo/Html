$(function() {
  var a = document.querySelector("a")
  $('a').click(function() {
    $(this).addClass('baseline').siblings().removeClass();
  })
})