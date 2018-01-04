//判断一个元素是否存在ele.exist  false/true
(function($) {
    $.fn.exist = function(){ 
        if($(this).length>=1){
            return true;
        }
        return false;
    };
})(jQuery);

//页面引入公共部分
var importCommonModule=function(){
	
	if ($("#header").exist()) {
		$("#header").load('../commModel/header/header2.html');
	}
	
	//引入底部
	$("#footer").load('../commModel/footer/footer.html');
}


//主体部分设置一个最低高度
function setMinHeight(Number){
	function MinHeight(minHight){
		if ($("#footer").exist()) {
			var footerh=$("#footer").height();
			//console.log(footerh)
			minHight=minHight-footerh;
			$(".mainContent").css('min-height',minHight);
			if ($(".MinHeightBox").exist()) {
				$(".MinHeightBox").css('min-height',minHight);
			}
		} else if($("#footer2").exist()) {
			var footerh=$("#footer2").height();
			//console.log(footerh)
			minHight=minHight-footerh;
			$(".mainContent").css('min-height',minHight);
		}
	}
	
    if ($(".header").exist()) {
    	var minHight=$(window).height()-$(".header").height()-32-Number;
    	//console.log('q')
		MinHeight(minHight);
    }else if ($(".header3").exist()) {
    	var minHight=$(window).height()-$(".header3").height()-34-Number;
		MinHeight(minHight);
    } else{
    	var minHight=$(window).height()-34-Number;
		MinHeight(minHight);
    }
}

var HeaderNavAcitive={
	init:function(){
		var $storages=window.localStorage;
		this.startInit($storages);//初始化
		this.openPage($storages);
	},
	startInit:function($storages){
		$storages.setItem("OpenPlatformNavActiveNumer",1);
	},
	openPage:function($storages){
		var $OpenPlatformNavActiveNumer=$storages.getItem("OpenPlatformNavActiveNumer")*1;
		console.log($("#header .header_nav li").eq($OpenPlatformNavActiveNumer).find('a').html())
		if ($OpenPlatformNavActiveNumer==1) {
			$("#header .header_nav li").eq($OpenPlatformNavActiveNumer).addClass('active_li').siblings().removeClass('active_li');
		}
	}
}

	


$(document).ready(function(){
	//页面引入公共部分
	importCommonModule();
	//
	//HeaderNavAcitive.init();
	//主体部分设置一个最低高度
	setMinHeight(0);
});

//设置随着屏幕大小变化
window.addEventListener("resize",function(){
	setMinHeight(0);
});