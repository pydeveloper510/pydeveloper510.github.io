$(document).ready(function($){
  // 레이아웃별 세팅
  function layoutInit(){
      var bodyType;
      if($(window).width() >= 1024){ // pc
          bodyType = 'typePc';
          //console.log('pc');
      } else if( ( $(window).width() <= 1023 ) && ( $(window).width() >= 768 )){ // tablet
          bodyType = 'typeTablet';
          //console.log('tablet');
      } else if($(window).width() < 767){ // mobile
          bodyType = 'typeMobile';
          //console.log('m');
      }
      $('body').attr('id' , bodyType);
  }layoutInit();

  // alert
  function mobilealert(){
      if($(window).width() < 767){ // mobile
          if($("#typeMobile div.article").hasClass("alert")){
              $("div.gray").css("display" , "block");
              $('body, html').animate({scrollTop:0	});
          };
      }else if($(window).width() >=768){
          $("div.gray").css("display" , "");
          $('body, html').dequeue();
      };
  }mobilealert();
  // PC, 타블릿 gnb 효과
  function gnb(){
    if($(window).width() >= 1024){ // pc 넓이계산
      $("div.header .gnb > li").each(function(num){
  //			$(this).mouseenter(function(){ /* 2014.08.06 탭운용 수정 */
        $(this).bind("mouseenter focusin",function(){
          $("div.header .gnb > li").removeClass("on");
          $("div.header .gnb > li").eq(num).addClass("on");
          $("div.header .gnb > li .gnb_sub").removeClass("on");
          $("div.header .gnb > li .gnb_sub").eq(num).addClass("on");
        });

  //			$(this).mouseleave(function(){ /* 2014.08.06 탭운용 수정 */
        $(this).bind("mouseleave",function(){
          $("div.header .gnb .gnb_sub.on").removeClass("on");
          $("div.header .gnb > li").removeClass("on");
        });
        $("div.header .gnb > li:last-child > div.gnb_sub > ul > li:last-child").bind("focusout",function(){
          $("div.header .gnb .gnb_sub.on").removeClass("on");
          $("div.header .gnb > li").removeClass("on");
        });
      });
      /* 2014.08.06 탭운용 수정 */
      $("#menu h1 a").bind("focusin",function(){
        $("div.header .gnb .gnb_sub.on").removeClass("on");
        $("div.header .gnb > li").removeClass("on");
      })
    } else if( ( $(window).width() <= 1023 ) && ( $(window).width() >= 768 )){ // tablet
      $("#typeTablet div.header .gnb > li").each(function(num){
        $(this).click(function(){
          $("#typeTablet div.header .gnb > li").removeClass("on");
          $("#typeTablet div.header .gnb > li").eq(num).addClass("on");
          $("#typeTablet div.header .gnb > li .gnb_sub").removeClass("on");
          $("#typeTablet div.header .gnb > li .gnb_sub").eq(num).addClass("on");
        });
      });
    }gnb();

  }
   
  // 모바일메뉴 초기셋팅
  function mobileMenuInit() {
    if ($(window).width() <= 768) { // 넓이계산
      //console.log('mobile');
      var mobileW = $(window).width() - 0;
      if ($('#mobileMenu').hasClass('open')) {
        //console.log('mobile menu open');
        $('#mobileMenu').css('width', mobileW);
        $('body').css('left', $('#mobileMenu').width());
      }
      else {
        //console.log('mobile menu close');
        $('#mobileMenu').css({
          'width': mobileW
          , 'left': -mobileW
        });
      }
    }
    else {
      //console.log('pc');
      $('html').removeAttr('style');
      $('body').removeAttr('style');
      $('#layoutWrap').removeAttr('style');
      $('#mobileMenu').removeAttr('style').removeClass('open');
    }
  }mobileMenuInit();
  // 모바일메뉴 클릭시
  // 그냥 mobileMenuClick() 이것만 호출하면 안열려있으면 열리고 ,  열려있으면 열리게 해놨어요!
  $(".side, .close").click(function mobileMenuClick() {
    if (!$('#mobileMenu').hasClass('open')) {
      $('html').css({
        'overflow': 'hidden'
        , 'width': '100%'
        , 'height': '100%'
      });
      $('body').css({
        'position': 'absolute'
        , 'width': $(window).width()
        , 'height': '100%'
        , 'overflow': 'hidden'
      });
      $('#layoutWrap').css({
        'width': $(window).width()
      });
      $('body').animate({
        'left': $('#mobileMenu').width()
      }, 500, function () {
        $('body').css('width', '0');
      });
      $('#mobileMenu').addClass('open').show().animate({
        'left': '0'
      }, 500);
    }
    else {
      $('body').css('width', $(window).width()).animate({
        'left': 0
      }, 500, function () {
        $('html').removeAttr('style');
        $('body').removeAttr('style');
      });
      $('#mobileMenu').animate({
        'left': -($(window).width() - 0)
      }, 500, function () {
        $('#mobileMenu').removeClass('open').hide();
      });
    }
  });

  //모바일 gnb 효과
  function m_gnb() {
      var $mobile=$("#mobileMenu .gnb > li");
    $mobile.each(function (num) {
      $(this).click(function () {
        if ($mobile.eq(num).hasClass('on')) {
          $mobile.removeClass("on");
        }
        else {
          $mobile.removeClass("on");
          $mobile.eq(num).addClass("on");
        }
      });
    });
  }m_gnb();

  //header 효과
  function header_movement(){
      var $header=$("#header");
      $(window).scroll(function(){
          var $scrTop=$(window).scrollTop();
          if($scrTop > 50){
              //스크롤내릴때
              $header.addClass("if_scroll");
              $header.removeClass("if_top"); 
          }else{
              //스크롤탑일때
              $header.addClass("if_top");
              $header.removeClass("if_scroll");            
          }
      });
      $header.mouseenter(function(){
          $(this).addClass("header_hover");
      });
      $header.mouseleave(function(){
          $(this).removeClass("header_hover");
      });
      
      $("#gnb li").mouseenter(function(){
          $("#gnb li div").removeClass("active");
          $(this).children("div").addClass("active");
      });
  }header_movement();

    /*show tab*/
    var $tabBtn = $(".tab_button").find("button");
    $tabBtn.click(function(){
        $tabBtn.removeClass("active");
        $(this).addClass("active");
        var $index=$(this).index(),
        $boardEq=$(this).parent().siblings(".tab_contents").children("div, li");
        $boardEq.removeClass("show");
        $boardEq.eq($index).addClass("show");
    });
    var $new = $(".new .board_tab span");
    $new.click(function(){
        $new.removeClass("on");
        $(this).addClass("on");
        var $index=$(this).index();
        var $boardEq=$(".new ul");
        $boardEq.removeClass("onn");
        $boardEq.eq($index).addClass("onn");
    });
    
    $("#top").click(function(){
        $("html, body").animate({scrollTop:0});
    });
    
	//select 메뉴
	$('.idxlink').click(function() {
		$('.idxlink .idlk').toggleClass('on');
	});
    
  (function(){
      $(".lang").click(function(){
          $(this).children("ul").toggleClass("on");
      });
  }());
  
  function urlBg() {
      $(".img-url").each(function () {
          var $url = $(this).attr("data-img");
          $(this).css({
              backgroundImage: "url(" + $url + ")"
          });
      });
  }urlBg();

  var is_svg_load = function(){
      return ($('.js-img-svg').length > 0);
  };

  // if( ! Modernizr.svg && is_svg_load()){
  if(is_svg_load()){
      $('.js-img-svg').each(function(){
          var src = $(this).attr('src');
          $(this).attr('src', src.replace(/\.svg/, '.png'));
      });
  }
});