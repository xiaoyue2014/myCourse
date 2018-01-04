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
	mui('body').on('tap','a',function(){ 
		window.top.location.href=this.href;
	});
	if ($("#nav_bottom").exist()) {
		$("#nav_bottom").load("../commModel/nav_bottom.html",function(){
			var tabBottomFn=function(){
				var $URLS=location.href;
				//console.log($URLS);
				var UrlsArray=new Array();
				UrlsArray[0]=["noticeChannels.html","TranscriptLists.html","TranscriptListsDetails.html","scoreReport.html","Timetable.html","search.html?tab1"]
				UrlsArray[1]=["remindChannels.html","homework.html","homeworkDetails.html","commuicateBook.html","commuicateBookDetails.html",
								"studyPlan.html","studyPlanDetails.html","coursesDetails.html","coursesDetailsVideo.html","search.html?tab2"]
				UrlsArray[2]=["authorizeInfo.html","children_info.html"]
				//console.log(UrlsArray);
				function tabActiveFn(num){
					if (num==0) {
						for (var i in UrlsArray[num]) {
							if ($URLS.indexOf(UrlsArray[num][i])!=-1) {
								$("#nav_bottom .mui-bar-tab .mui-tab-item").eq(num).addClass('mui-active').siblings().removeClass('mui-active');
							}
						}
					}else if (num==1) {
						for (var i in UrlsArray[num]) {
							if ($URLS.indexOf(UrlsArray[num][i])!=-1) {
								$("#nav_bottom .mui-bar-tab .mui-tab-item").eq(num).addClass('mui-active').siblings().removeClass('mui-active');
							}
						}
					}else if (num==2) {
						for (var i in UrlsArray[num]) {
							if ($URLS.indexOf(UrlsArray[num][i])!=-1) {
								$("#nav_bottom .mui-bar-tab .mui-tab-item").eq(num).addClass('mui-active').siblings().removeClass('mui-active');
							}
						}
					}	
				}
				tabActiveFn(0);
				tabActiveFn(1);
				tabActiveFn(2);
			}
			tabBottomFn();
		});
	}
}
$(document).ready(function(){
	commonModelImport();
})
