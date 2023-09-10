'use strict';

//ボタン
// $(function() {
// 	setTimeout(function(){
// 		$('.logo_fadein p').fadeIn(1000);
// 	},500);
// 	setTimeout(function(){
// 		$('.logo_fadein').fadeOut(1000);
// 	},2500);
// });

//左右から現れる
$(function() {
    $(".fadein").on("inview", function (event, isInview){
        if (isInview) {
            $(this).stop().addClass("on");
        } else {
            $(this).stop().removeClass("on");
        }
    });
});

//下から現れる
$(function () {
	$(window).scroll(function () {
	  const windowHeight = $(window).height();
	  const scroll = $(window).scrollTop();
  
	  $('.element').each(function () {
		const targetPosition = $(this).offset().top;
		if (scroll > targetPosition - windowHeight + 100) {
		  $(this).addClass("is-fadein");
		}
	  });
	});
  });
  

//ページスクロール
//スクロールした際の動きを関数でまとめる
function PageTopAnime() {
	var scroll = $(window).scrollTop();
	if (scroll >= 200){//上から200pxスクロールしたら
		$('#page-top').removeClass('DownMove');//#page-topについているDownMoveというクラス名を除く
		$('#page-top').addClass('UpMove');//#page-topについているUpMoveというクラス名を付与
	}else{
		if($('#page-top').hasClass('UpMove')){//すでに#page-topにUpMoveというクラス名がついていたら
			$('#page-top').removeClass('UpMove');//UpMoveというクラス名を除き
			$('#page-top').addClass('DownMove');//DownMoveというクラス名を#page-topに付与
		}
	}
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
	PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
	PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});

// #page-topをクリックした際の設定
$('#page-top a').click(function () {
    $('body,html').animate({
        scrollTop: 0//ページトップまでスクロール
    }, 500);//ページトップスクロールの速さ。数字が大きいほど遅くなる
    return false;//リンク自体の無効化
});


