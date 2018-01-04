//判断一个元素是否存在ele.exist  false/true
(function($) {
    $.fn.exist = function(){ 
        if($(this).length>=1){
            return true;
        }
        return false;
    };
})(jQuery);


var commonModelImport=function(){
	if ($("#conditionalModel").exist()) {
		$("#conditionalModel").load("../commModel/conditionalModel2.html");
	}
}
$(document).ready(function(){
	commonModelImport();
})
