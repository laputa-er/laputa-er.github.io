$(document).ready(function() {

  $('body').removeClass('no-js');

  $('a.blog-button').click(function() {
    if ($('.panel-cover').hasClass('panel-cover--collapsed')) return;
    currentWidth = $('.panel-cover').width();
    if (currentWidth < 960) {
      $('.panel-cover').addClass('panel-cover--collapsed');
      $('.content-wrapper').addClass('animated slideInRight');
    } else {
      $('.panel-cover').css('max-width',currentWidth);
      $('.panel-cover').animate({'max-width': '500px', 'width': '30%'}, 400, swing = 'swing', function() {} );
    }
  });

  if (window.location.hash && window.location.hash == "#blog") {
    $('.panel-cover').addClass('panel-cover--collapsed');
  }

  if (window.location.pathname.substring(0, 5) == "/tag/") {
    $('.panel-cover').addClass('panel-cover--collapsed');
  }
  
  if (window.location.pathname.substring(0, 6) == "/page/") {
    $('.panel-cover').addClass('panel-cover--collapsed');
  }

  $('.btn-mobile-menu__icon').click(function() {
    if ($('.navigation-wrapper').css('display') == "block") {
      $('.navigation-wrapper').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $('.navigation-wrapper').toggleClass('visible animated bounceOutUp');
      });
      $('.navigation-wrapper').toggleClass('animated bounceInDown animated bounceOutUp');

    } else {
      $('.navigation-wrapper').toggleClass('visible animated bounceInDown');
    }
    $('.btn-mobile-menu__icon').toggleClass('fa fa-list fa fa-angle-up animated fadeIn');
  });

  $('.navigation-wrapper .blog-button').click(function() {
    if ($('.navigation-wrapper').css('display') == "block") {
      $('.navigation-wrapper').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $('.navigation-wrapper').toggleClass('visible animated bounceOutUp');
      });

      $('.navigation-wrapper').toggleClass('animated bounceInDown animated bounceOutUp');
    }
    $('.btn-mobile-menu__icon').toggleClass('fa fa-list fa fa-angle-up animated fadeIn');
  });

  $("article.post-container--single a[href^=http]").attr("target", "_blank");
  $("article.post-container--single a[href^=mailto]").attr("target", "_blank");

  $('#toc .dropup-catelog>button').on('click', function (e) {
    if ($(this).css('display') !== 'none') {
        $('#tocShell').show();
    }
    $('#toc .catelog-content').fadeToggle();
  });

  $('#tocShell').on('click', function (e) {
    $('#tocShell').hide();
    $('#toc .catelog-content').fadeOut();
  });

  // 设置目录最大高度
  $('#toc .catelog-content').css('max-height', $(window).height() * 0.6 + 'px');
});
