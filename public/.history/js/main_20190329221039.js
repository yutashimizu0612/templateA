/***************************
 * メインスライダー slick
****************************/
$(function () {
  $('.mSlider__list').slick({
    autoplay: true, //自動再生
    autoplaySpeed:4000,
    centerMode: true,
    centerPadding: '20px',
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    prevArrow:'<div class="prevArrow"><i class="fas fa-chevron-circle-left fa-2x"></i></div>',
    nextArrow:'<div class="nextArrow"><i class="fas fa-chevron-circle-right fa-2x"></i></div>',
    responsive: [{
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }]
  });

/***************************
 * webticker
****************************/
$('#webTicker').webTicker();

/***************************
 * TOPへ戻るボタン
****************************/
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

/***************************
 * drawer
****************************/
  $('#js-drawerOpen').on('click', function(){
    $('.drawer').addClass('open');
    $('.overlay').addClass('open');
  });
  $('#js-drawerClose').on('click', function(){
    $('.drawer').removeClass('open');
    $('.overlay').removeClass('open');
  });
});
/***************************
 * 検索モーダル出現
****************************/
$('#js-show-s-modal').on('click', function(){
  $('#js-s-modal').show();
  $('.overlay').addClass('open');
});
$('#js-s-modal-close').on('click', function(){
  $('#js-s-modal').hide();
  $('.overlay').removeClass('open');
})
/***************************
 * overlay
****************************/
$('.overlay').on('click', function(){
  //overlayがclick→開いているドロワーと検索モーダルをdisplay:none
  $('.drawer').removeClass('open');
  $('#js-s-modal').hide();
  $('.overlay').removeClass('open');
});