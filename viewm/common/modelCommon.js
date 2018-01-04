//判断一个元素是否存在ele.exist  false/true
(function($) {
    $.fn.exist = function(){ 
        if($(this).length>=1){
            return true;
        }
        return false;
    };
})(jQuery);

//给侧边栏和主体部分设置一个最低高度
function setMinHeight(Number){
	function MinHeight(minHight){
		if ($(".Content_aside").exist()) {
			//var Height=minHight-($(".main_content h3").height());
			//$(".Content_right").css('min-height',Height);
			//$(".Content_aside").height($(".Content_right").height());
		}else{
			var footerh=$(".footer").height();
			minHight=minHight-footerh;
			$(".MainContent").css('min-height',minHight);
			$(".AsideMenu").css('min-height',minHight);
			$(".MainBox").css('min-height',minHight);
			$(".ContentBox").css('min-height',$(".AsideMenu").height());
		}
	}
	//换成有学创教育的最新底部就把34改成47.6
    var minHight=$(document.body).height()-$(".header").height()-34-Number;
	MinHeight(minHight);
}
setMinHeight(0);

//设置随着屏幕大小变化
window.addEventListener("resize",function(){
	setMinHeight(0);
});


//主侧边栏点击效果
var Aside_main={
	init:function(){
		this.Aside_show();
		this.Aside_init();
		this.Aside_list_imgChange();
		//this.Aside_list();
	},
	Aside_init:function(){
		var Aside_show_btnNums = sessionStorage.getItem("aside");
		var url = window.location.href;
		if (url.indexOf('search') != -1){
			return;
		}
		if(Aside_show_btnNums == undefined || Aside_show_btnNums == "close"){
			$(".MainContent").css({'padding-left':'150px'});
			$(".AsideBtn_tp").css({width:'25%'});
			$(".AsideBtn_bt").css({width:'75%'});
			$(".AsideMenu").css({width:'150px'});
			$(".list_icon").css({width:'25%'});
			$(".list_name_right").css({width:'75%',fontSize:'14px'});
			sessionStorage.setItem("aside","close");
		}else{
			$(".AsideBtn_tp").css({width:'100%'});
			$(".AsideBtn_bt").css({width:'0%'});
			$(".list_name_right").css({width:'0',fontSize:'0rem'});
			$(".AsideMenu").css({width:'4.16%'});
			$(".MainContent").css({'padding-left':'4.16%'});
			$(".list_icon").css({width:'100%'});
			sessionStorage.setItem("aside","open");
		}
		var index = sessionStorage.getItem("active");
		
		var flag = false;
		$(".Aside_list .Aside_list_li a").each(function(){
			if ($(this)[0].href == url){
				flag = true;
				$(this).parent().addClass("activesiderLi").siblings().removeClass("activesiderLi");
				sessionStorage.setItem("preUrl",url);
			}
		});
		if (!flag){
			url = sessionStorage.getItem("preUrl");
			$(".Aside_list .Aside_list_li a").each(function(){
				if ($(this)[0].href == url){
					$(this).parent().addClass("activesiderLi").siblings().removeClass("activesiderLi");
				}
			});
		}
	},
	Aside_show:function(){
		//var Aside_show_btnNums=0; 
		$(".Aside_show_btn").on('click',function(e){
			var Aside_show_btnNums = sessionStorage.getItem("aside"); 
			if (Aside_show_btnNums == "open") {
				//$(this).animate({width:'12%'},500);
				$(".MainContent").stop().animate({'padding-left':'150px'},500);
				$(".AsideBtn_tp").stop().animate({width:'25%'},500);
				$(".AsideBtn_bt").stop().animate({width:'75%'},500);
				$(".AsideMenu").stop().animate({width:'150px'},500);
				$(".list_icon").stop().animate({width:'25%'},500);
				$(".list_name_right").stop().animate({width:'75%',fontSize:'14px'},700);
				sessionStorage.setItem("aside","close");
			} else{
				//$(this).animate({width:'3%'},500);
				$(".AsideBtn_tp").stop().animate({width:'100%'},500);
				$(".AsideBtn_bt").stop().animate({width:'0%'},500);
				$(".list_name_right").stop().animate({width:'0',fontSize:'0rem'},280);
				$(".AsideMenu").stop().animate({width:'4.16%'},500);
				$(".MainContent").stop().animate({'padding-left':'4.16%'},500);
				$(".list_icon").stop().animate({width:'100%'},500);
				sessionStorage.setItem("aside","open");
			}
			Aside_show_btnNums++;
			e.stopPropagation();
		})
	},
	Aside_list_imgChange:function(){
		$(".Aside_list_li").each(function(){
			var $ImgSrc=$(this).find('.list_icon>img').attr('src');
			$(this).mouseenter(function(){
				//console.log($ImgSrc);
				var $ImgSrcOn=$ImgSrc.split('.')[0];
				//console.log($ImgSrcOn);
				$(this).find('.list_icon>img').attr({src:$ImgSrcOn+'_on.png'});
			}).mouseleave(function(){
				$(this).find('.list_icon>img').attr({src:$ImgSrc});
			})
		})
	},
	Aside_list:function(){
		$(".Aside_list_li").click(function(){ 
			sessionStorage.setItem("active",$(this).index());
			console.log($(this).index())
		})
	}
}
Aside_main.init();

var userHeader={
	init:function(){
		this.system_out();
		this.shezhiNav();
		this.shezhiNavLi();
	},
	system_out:function(){
		$(".system_out .syetemCloseImg").mouseenter(function(){
			//$(this).attr({src:"img/icon_2_hover.png"});
		}).mouseleave(function(){
			//$(this).attr({src:"img/icon_2.png"});
			$(this).removeClass('clickactive');
		}).click(function(){
			//$(this).attr({src:"img/icon_2_click.png"});
			$(this).addClass('clickactive');
		});
	},
	shezhiNav:function(){
		$(".user_box").mouseenter(function(){
			$(".user_box_bt").show();
		}).mouseleave(function(){
			$(".user_box_bt").hide();
		})
	},
	shezhiNavLi:function(){
		$(".shezhiNav li").each(function(){
			$(this).bind('click',function(){
				$(".user_box_bt").hide();
			})
		});
	}
}
userHeader.init();


//单选框的单选js
function radioSelect(){
	$(".select_radio").find('.classBtn').each(function(){
		$(this).click(function(){
			if ($(this).hasClass('Checked')) {
				$(this).parents('.classlist').siblings().find('.classBtn').removeClass('Checked').addClass('un_Checked');
			} else{
				$(this).removeClass('un_Checked').addClass('Checked');
				$(this).parents('.classlist').siblings('.classlist').find('.classBtn').removeClass('Checked').addClass('un_Checked');
			}
		})
	});
}
radioSelect();
