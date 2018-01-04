//判断一个元素是否存在ele.exist  false/true
(function($) {
    $.fn.exist = function(){ 
        if($(this).length>=1){
            return true;
        }
        return false;
    };
})(jQuery);

var userHeader = {
	init: function() {
		this.system_out();
		this.shezhiNav();
		this.shezhiNavLi();
	},
	system_out: function() {
		$(".system_out .syetemCloseImg").mouseenter(function() {
			//$(this).attr({src:"img/icon_2_hover.png"});
		}).mouseleave(function() {
			//$(this).attr({src:"img/icon_2.png"});
			$(this).removeClass('clickactive');
		}).click(function() {
			//$(this).attr({src:"img/icon_2_click.png"});
			$(this).addClass('clickactive');
		});
	},
	shezhiNav: function() {
		$(".user_box").mouseenter(function() {
			$(".user_box_bt").show();
		}).mouseleave(function() {
			$(".user_box_bt").hide();
		})
	},
	shezhiNavLi: function() {
		$(".shezhiNav li").each(function() {
			$(this).bind('click', function() {
				$(".user_box_bt").hide();
			})
		});
	}
}
userHeader.init();

//主体部分设置一个最低高度
function setMinHeight(Number){
	function MinHeight(minHight){
		if ($(".Content_aside").exist()) {
			//var Height=minHight-($(".main_content h3").height());
			//$(".Content_right").css('min-height',Height);
			//$(".Content_aside").height($(".Content_right").height());
		}else{
			var footerh=$(".footer").height();
			minHight=minHight-footerh;
			$(".MainCenter").css('min-height',minHight);
			$(".MainCenter_right").css('min-height',minHight);
		}
	}
	
    var minHight=$(document.body).height()-$(".header").height()-$(".main_nav_box").height()-1-Number;
	MinHeight(minHight);
}
setMinHeight(1);
//设置随着屏幕大小变化
window.addEventListener("resize",function(){
	setMinHeight(1);
});

