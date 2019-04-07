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
    prevArrow:'<i class="prevArrow" fas fa-chevron-circle-right fa-2x"></i>',
    nextArrow:'<i class="nextArrow fas fa-chevron-circle-left fa-2x"></i>',
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


