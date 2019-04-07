//メインスライダー slick
$(function () {
  $('.mSlider__list').slick({
    autoplay:true,
    autoplaySpeed:5000,
    centerMode: true,
    centerPadding: '10px'
  });

//topへ戻るボタン
  //アイコンの表示非表示設定
  if($(this).scrollTop() > 100) {
    $("#pageTop").fadeIn();
  } else {
    $("#pageTop").fadeOut();
  }
  //ページトップへ戻る動作
  $("#pageTop").on('click', function(){
    $("html,body").animate({
      scrollTop: 0
    },700);
  });
});


