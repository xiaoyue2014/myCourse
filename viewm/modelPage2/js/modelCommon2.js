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
	var Urls=location.href;
	if (Urls.indexOf('index_s.html')!=-1) {
		//引入头部
		$("#header").load('header/header.html');
		//引入导航栏和轮播图
		if ($("#asideNav_banner_box").exist()) {
			$("#asideNav_banner_box").load('asideNav_banner/asideNav_banner.html');
		}
	}else if(Urls.indexOf('sourceAmend.html')!=-1){
		//引入头部
		console.log('header3')
		$("#header").load('header/header3.html');
	}else{
		//引入头部
		$("#header").load('header/header2.html');
		//引入导航栏和轮播图
		$("#asideNav_banner_box").load('asideNav_banner/asideNav_banner2.html');
	}
	
	//引入底部
	$("#footer").load('footer/footer.html');
}


//主体部分设置一个最低高度
function setMinHeight(Number){
	function MinHeight(minHight){
		if ($(".Content_aside").exist()) {
			//var Height=minHight-($(".main_content h3").height());
			//$(".Content_right").css('min-height',Height);
			//$(".Content_aside").height($(".Content_right").height());
		}else{
			if ($("#footer").exist()) {
				var footerh=$("#footer").height();
				//console.log(footerh)
				minHight=minHight-footerh;
				$(".Con_Main").css('min-height',minHight);
			} else if($("#footer2").exist()) {
				var footerh=$("#footer2").height();
				//console.log(footerh)
				minHight=minHight-footerh;
				$(".Con_Main").css('min-height',minHight);
			}
		}
	}
	
    if ($("#header").exist()) {
    	var minHight=$(document.body).height()-$("#header").height()-34-Number;
		MinHeight(minHight);
    } else{
    	var minHight=$(document.body).height()-34-Number;
		MinHeight(minHight);
    }
}

$(document).ready(function(){
	//页面引入公共部分
	importCommonModule();
	
	//主体部分设置一个最低高度
	setMinHeight(0);
});

//设置随着屏幕大小变化
window.addEventListener("resize",function(){
	setMinHeight(0);
});