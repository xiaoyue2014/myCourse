//判断一个元素是否存在ele.exist  false/true
(function($) {
    $.fn.exist = function(){ 
        if($(this).length>=1){
            return true;
        }
        return false;
    };
})(jQuery);

//公共部分引入
var CommonModelImport=function(){
	//头部引入
	if ($("#header .headerContent_bt").exist()) {
		$("#header .headerContent_bt").load("../comm/header/headerContent_bt.html");
	} else{
		//console.log("头部二")
	}
	
	//底部引入
	if ($("#footer").exist()) {
		$("#footer").load("../comm/footer/footer.html",function(){
			//相对于页面底部选项高亮
			var Urls=location.href;
			if (Urls.indexOf('courses')!=-1) {
				$(".footerContent dd").eq(1).find('a').addClass('active_a');
			}else if(Urls.indexOf('myself')!=-1){
				console.log('a');
				$(".footerContent dd").eq(2).find('a').addClass('active_a');
			}
		});
	}
}

//页面需要预加载部分
$(document).ready(function(){
	//给侧边栏和主体部分设置一个最低高度
	CommonModelImport();
});
