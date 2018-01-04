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
		$("#header").load('../commModel/header/header3.html');
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
		}
	}
	
    if ($(".header").exist()) {
    	var minHight=$(window).height()-$(".header").height()-32-Number;
		MinHeight(minHight);
    } else{
    	var minHight=$(window).height()-34-Number;
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


//滚动条滚动产生的效果
var scrollFn=function(){
	$(window).scroll(function(){
        var sc=$(window).scrollTop();
        var rwidth=$(window).width()+$(document).scrollLeft();
        var rheight=$(window).height()+$(document).scrollTop();
		console.log(sc) 
        if(sc>200){
           console.log('>200') 
        }else{
            console.log('<200')
        }
    });
}
scrollFn();


