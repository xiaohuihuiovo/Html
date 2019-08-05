//入口函数
$(function() {
  var y = $('.recommend').offset().top;

  function toggleTool() {
    if ($(document).scrollTop() > y) {
      $('.fixedtool').fadeIn();
    } else {
      $('.fixedtool').fadeOut();
    }
  }
  toggleTool();
  $(window).scroll(function() {
    toggleTool();
    // 3. 页面滚动到某个内容区域，左侧电梯导航小li相应添加和删除current类名
    $('.floor .w').each(function(i, ele) {
      if ($(document).scrollTop() >= $(ele).offset().top) {
        //打印索引号
        console.log(i);
        $('.fixedtool li').eq(i).addClass('current').siblings().removeClass();
      }
    })

  });
  //2.点击电梯导航栏页面滚动到相应内容区域
  $('.fixedtool li').click(function() {
    //打印出当前li的索引号
    console.log($(this).index());
    //当我们每次点击小li就需要计算出要去往的位置
    // 选出对应索引号的内容区的盒子 计算它的.offset().top
    var current = $('.floor .w').eq($(this).index()).offset().top;
    //获取页面滚动效果
    $('html').stop().animate({
      scrollTop: current
    });
    // 点击之后，让当前的小li 添加current 类名 ，姐妹移除current类名
    //排他思想,高亮显示当前元素
    $(this).addClass('current').siblings().removeClass('current');

  });

})