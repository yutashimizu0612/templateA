//メインスライダー slick
$(function () {
  $('.mSlider__list').slick({
    autoplay: true, //自動再生
    autoplaySpeed:5000,
    centerMode: true,
    centerPadding: '10px',
    infinite: true, //スライドのループ有効化
    dots: true, //ドットのナビゲーションを表示
    slidesToShow: 4, //表示するスライドの数
    slidesToScroll: 4, //スクロールで切り替わるスライドの数
    responsive: [{
      breakpoint: 768, //ブレークポイントが768px
      settings: {
        slidesToShow: 3, //表示するスライドの数
        slidesToScroll: 3, //スクロールで切り替わるスライドの数
      }
    }, {
      breakpoint: 480, //ブレークポイントが480px
      settings: {
        slidesToShow: 2, //表示するスライドの数
        slidesToScroll: 2, //スクロールで切り替わるスライドの数
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


