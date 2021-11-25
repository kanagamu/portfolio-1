$(function() {
    $('.faq-list-item').click(function() {
      var $answer = $(this).find('.answer');
      if($answer.hasClass('open')) {//faqが開いているか判定
        $answer.removeClass('open');//開いていれば.openを削除
        $answer.slideUp();//slideUpでfaqを閉じる
        $(this).find('span').text('+');//+マークに書き換え
        
      } else {
        $answer.addClass('open'); //閉じれいれば.openを付与
        $answer.slideDown();//slideDownで開く
        $(this).find('span').text('-');//-マークに書き換え
      }
    });

    $('.burger-btn').on('click',function(){//.btn_triggerをクリックすると
    $('.burger-btn').toggleClass('close');//.btn_triggerにcloseクラスを付与(ボタンのアニメーション)
    $('.nav-wrapper').fadeToggle(500);//.nav-wrapperが0.5秒でフェードイン(メニューのフェードイン)
    $('body').toggleClass('noscroll');//bodyにnoscrollクラスを付与(スクロールを固定)
   });

   if( $(window).width() < 768 ){//デバイスの幅が768以下のとき
    $('.nav-item>a').on('click',function(){//.nav-item>aをクリックすると
      $('.nav-wrapper').fadeOut(500);//.nav-wrapperが0.5秒でフェードアウト(メニューのフェードアウト)
      $('.burger-btn').removeClass('close');//.btn_triggerのcloseクラスを削除
      $('body').removeClass('noscroll');//bodyのnoscrollクラスを削除
    });
  }

  $(function () {
    var headerHight = 50; //ヘッダの高さ
    $('a[href^=#]').click(function(){
        var href= $(this).attr("href");
          var target = $(href == "#" || href == "" ? 'html' : href);
           var position = target.offset().top-headerHight; //ヘッダの高さ分位置をずらす
        $("html, body").animate({scrollTop:position}, 400, "swing");
           return false;
      });
   });
  });
  