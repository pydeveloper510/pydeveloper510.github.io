var times;
var num=0;
var slide_count=0;
$(document).ready(function(){
    $(".slide").css({"overflow":"hidden","position":"relative"});//relative      absolute
    $(".slide_ul").css({"position":"relative","white-space":"nowrap","overflow":"hidden"});
    $(".slide_ul img").css({"float":"left","display":"inline-block"});
    slide_count=$(".slide_ul img").length;
    lolring();
});

function size_set(){
    var win_width=$(window).width();
    var obj_wid=$(".slide_ul img").width();
    var obj_hei=$(".slide_ul img").outerHeight(true);
    if(!obj_wid) obj_wid = 930;
    if(!obj_hei) obj_hei = 280;
    $(".slide_ul").css({"width":obj_wid*slide_count,"height":obj_hei});
}
$(window).resize(function(){
    size_set();
});

function lolring(){     
    size_set();
    if (num>=slide_count){  num=0;   }
    if (num<0){ num=slide_count-1;   }
    slide_lol(num);
    num++;
    times=setTimeout(lolring,5000);
}

function slide_lol(idx){
    num = idx;
    $(".slide_ul").stop().animate({left: -$(".slide_ul img").width()*num}, 300);
    $(".onoff a").removeClass("on");
    $(".onoff a").eq(num).addClass("on");
}