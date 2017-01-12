/**
 * Created by Administrator on 2017/1/6 0006.
 */
//顶部
$(function(){
    $("#mobile").hover(function(){
        $("#topbarpop").show()
   },function(){
       $("#topbarpop").hide()
   });
    $("#menu").mousemove(function(){
        $("#menu").css("color","#e11121")
       $("#subm>li").css("display","block");
        $("#allm").css("background","#fff")
        $("#subm>ul").css("border","1px solid #ccc")
    });
    $("#menu").mouseleave(function(){
        $("#subm>li").css("display","none");
        $("#allm").css("background","none");
        $("#menu").css("color","")
    });
    $("#myenu").mousemove(function(){
        $("#myenu").css("color","#e11121")
        $("#msubm").css("display","block");
        $("#mallm").css("background","#fff")
        $("#msubm>ul").css("border","1px solid #ccc")
    });
    $("#myenu").mouseleave(function(){
        $("#msubm").css("display","none");
        $("#mallm").css("background","none")
        $("#myenu").css("color","0")
    });
});
//顶部导航固定
$(function() {
    $(window).scroll(function(){
        var $this = $(this);
        var targetTop = $(this).scrollTop();
        //var footerTop = $("#footer").offset().top;
        var height = $(window).height();

        if (targetTop >= 127){
            $("#nav").addClass("fixedsubnav");
            //$(".channel-skin").removeClass("hidden");
        }else{
            $("#nav").removeClass("fixedsubnav");
           // $(".channel-skin").addClass("hidden");
        }
    });
    /*var $nav = $("#nav");
    $(window).on("scroll",function(){
        var $this = $(this);
        var st = $this.scrollTop();
        if(st>300){
            $nav.stop(true,true).fadeIn();
        }  else {
            $nav.stop(true,true).fadeOut();
        }
    })*/
});
//主轮播图
$(function(){
    $("#slide-box").cycle({
        fx:     "fade",
        speed:  "slow",
        timeout: 5000,
        pager:  "#slider_nav",
        pagerAnchorBuilder: function(idx, slide) {
            return "#slider_nav li:eq(" + (idx) + ") a";
        }
    });
});
//小轮播图
$(function(){
    var index = 0;

    $("#prev").click(function(){
        ++index;
        if(index ==9){
            index = 0
        };
        $('.container').stop().animate({left:-1135*index},1000)
    });
    $("#next").click(function(){
        --index;
        if(index ==9){
            index = 0
        };
        $('.container').stop().animate({left:-1135*index},1000)
    })
});
//选项卡
/*$(function(){
    $('#topnav>li').mouseenter(function(){
        $(".active").hide();
        $(".active").eq($(this).index()).show();
    });
    $('#topnav>li').mouseenter(function(){
        $(this).addClass("hide-1")
    });
    $('#topnav>li').mouseout(function(){
        $(this).removeClass("hide-1")
    });
});*/
$(function(){
    $("#topnav>li").mousemove(function(){
        $(this).addClass("hide-1").siblings().removeClass("hide-1"); //切换选中的按钮高亮状态
        var index=$(this).index(); //获取被按下按钮的索引值，需要注意index是从0开始的
        $(".active").eq(index).show().siblings().hide(); //在按钮选中时在下面显示相应的内容，同时隐藏不需要的框架内容
    });
});
$(function(){
   $("#list1").mousemove(function(){
      $(".list-nav").show();
       $("#list1").stop().animate({left:"-5"},1)
   });
    $("#list1").mouseleave(function(){
        $(".list-nav").hide();
        $("#list1").stop().animate({left:"0"},1)
    });
    $("#list2").mousemove(function(){
        $(".list-nav1").show();
        $("#list2").stop().animate({left:"-5"},1)
    });
    $("#list2").mouseleave(function(){
        $(".list-nav1").hide();
        $("#list2").stop().animate({left:"0"},1)
    });
    $("#list3").mousemove(function(){
        $(".list-nav2").show();
        $("#list3").stop().animate({left:"-5"},1)
    });
    $("#list3").mouseleave(function(){
        $(".list-nav2").hide();
        $("#list3").stop().animate({left:"0"},1)
    });
    $("#list4").mousemove(function(){
        $(".list-nav4").show();
        $("#list4").stop().animate({left:"-5"},1)
    });
    $("#list4").mouseleave(function(){
        $(".list-nav4").hide();
        $("#list4").stop().animate({left:"0"},1)
    });
    $("#list5").mousemove(function(){
        $(".list-nav5").show();
        $("#list5").stop().animate({left:"-5"},1)
    });
    $("#list5").mouseleave(function(){
        $(".list-nav5").hide();
        $("#list5").stop().animate({left:"0"},1)
    });
    $("#list6").mousemove(function(){
        $(".list-nav6").show();
        $("#list6").stop().animate({left:"-5"},1)
    });
    $("#list6").mouseleave(function(){
        $(".list-nav6").hide();
        $("#list6").stop().animate({left:"0"},1)
    });
    $("#list7").mousemove(function(){
        $(".list-nav7").show();
        $("#list7").stop().animate({left:"-5"},1)
    });
    $("#list7").mouseleave(function(){
        $(".list-nav7").hide();
        $("#list7").stop().animate({left:"0"},1)
    });
});

//选项卡上倒计时
$(function () {
    function countDown(_date,aim){
        setInterval(function(){
            var date=new Date();
            var set=new Date(_date);
            var cha=set-date;
            //console.log(cha)
            var hours=Math.ceil(cha/1000/60/60%24)
            //console.log(hours)
            var min=Math.ceil(cha/1000/60%60)
            var sec=Math.ceil(cha/1000%60)
            var time="剩余"+hours+"小时"+min+"分"+sec+"秒";
            aim.text(time)
        },1000)

    }
    countDown("2017/01/15/00:00:00",$(".timer"))
    countDown("2017/01/15/12:00:00",$(".timer2"))
    countDown("2017/01/15/13:30:00",$(".timer3"))
    countDown("2017/01/15/09:30:00",$(".timer4"))
});
//点击回顶部
$(function(){
    $("#top").click(function(){
       $("html,body").stop().animate({scrollTop:"0"},500);
    });
});
//；楼层效果
$(function(){
    //给窗口加滚动条事件
    $(window).scroll(function(){
        // 获得窗口滚动上去的距离
        var ling = $(document).scrollTop();
       /* // 在标题栏显示滚动的距离
        document.title = ling;*/
        // 如果滚动距离大于1534的时候让滚动框出来
        if(ling>950){
            $('#box').show();
        }
        if(950<ling && ling<1500){
            // 让第一层的数字隐藏，文字显示，让其他兄弟元素的li数字显示，文字隐藏
            $('#box ul li').eq(0).find('.num').hide().siblings('.word').css('display','block');
            $('#box ul li').eq(0).siblings('li').find('.num').css('display','block').siblings('.word').hide();
        }else if(ling<2100 && ling>1500){
            $('#box ul li').eq(1).find('.num').hide().siblings('.word').css('display','block');
            $('#box ul li').eq(1).siblings('li').find('.num').css('display','block').siblings('.word').hide();
        }else if(ling<2600 && ling>2100){
            $('#box ul li').eq(2).find('.num').hide().siblings('.word').css('display','block');
            $('#box ul li').eq(2).siblings('li').find('.num').css('display','block').siblings('.word').hide();
        }else if(ling<3100 && ling>2600){
            $('#box ul li').eq(3).find('.num').hide().siblings('.word').css('display','block');
            $('#box ul li').eq(3).siblings('li').find('.num').css('display','block').siblings('.word').hide();
        }else if(ling<3500 && ling>3100){
            $('#box ul li').eq(4).find('.num').hide().siblings('.word').css('display','block');
            $('#box ul li').eq(4).siblings('li').find('.num').css('display','block').siblings('.word').hide();
        }
        if(ling>3500 || ling<950){
            // $('#box').css('display','none');
            $('#box').hide();
        }
    })
})
$(function(){
    $('#box ul li').hover(function(){
        $(this).find('.num').hide().siblings('.word').css({'display':'block','background':'#CB1C39','color':'white'});
    },function(){
        $(this).find('.num').css({'display':'block','background':'white','color':'#666'}).siblings('.word').hide().css({'display':'none','background':'','color':''});
    })
})