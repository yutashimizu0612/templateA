//メインスライダー slick
$(function () {
  $('.mSlider__list').slick({
    autoplay:true,
    autoplaySpeed:5000,
    centerMode: true,
    centerPadding: '10px'
  });

//topへ戻るボタン
  if($(this).scrollTop() > 10) {
    $("#pageTop").fadeIn();
  } else {
    $("#pageTop").fadeOut();
  }

});


