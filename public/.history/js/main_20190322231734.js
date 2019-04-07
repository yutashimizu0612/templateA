//メインスライダー slick
$(function () {
  $('.mSlider__list').slick({
    autoplay: true, //自動再生
    autoplaySpeed:4000,
    centerMode: true,
    centerPadding: '20px',
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow:'<div class="prevArrow">PREV</div>',
    nextArrow:'<div class="nextArrow">NEXT</div>',
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    }]
  });

//topへ戻るボタン
  //アイコンの表示非表示設定
  $(window).scroll(function(){
    if($(this).scrollTop() > 100) {
      $("#pageTop").fadeIn();
    } else {
      $("#pageTop").fadeOut();
    }
  });
  //ページトップへ戻る動作
  $("#pageTop").on('click', function(){
    $("html,body").animate({
      scrollTop: 0
    },700);
  });
});


