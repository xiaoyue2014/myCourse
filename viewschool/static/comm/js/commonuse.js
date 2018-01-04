//判断设备为移动端还pc端
function IsPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone","SymbianOS", "Windows Phone", "iPod", "iPad"];
    var flag = true;
    if(window.screen.width>=769){
         flag = true;
    }
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}
console.log(IsPC());

//判断一个元素是否存在ele.exist  false/true
(function($) {
    $.fn.exist = function(){ 
        if($(this).length>=1){
            return true;
        }
        return false;
    };
})(jQuery);


function setMinHeight(Number){
	function MinHeight(minHight){
		if (IsPC()==false) {
			$("#footer").remove();
			$(".contentCenter").css('min-height',minHight);
		}else{
			if ($("#footer").exist()) {
				var footerh=$("#footer").height();
				minHight=minHight-footerh;
				$(".contentCenter").css('min-height',minHight);
			}
		}
	}
	//换成有学创教育的最新底部就把34改成47.6
    var minHight=$(window).height()-62;
    //console.log(minHight);
	MinHeight(minHight);
}



var commonImportFn=function(){
	if ($("#header").exist()) {
		$("#header").load("commonPart/header.html",function(){
			if (IsPC()==false) {
				$("#header").find('.systemCloseBtn').remove();
			}
		});
	}
	if($("#footer").exist()){
		$("#footer").load("commonPart/footer.html",function(){
			setMinHeight(0);
		});
	}
}
$(document).ready(function(){
	commonImportFn();
});
//设置随着屏幕大小变化而变化的部分
window.addEventListener("resize",function(){
	setMinHeight(0);
});
