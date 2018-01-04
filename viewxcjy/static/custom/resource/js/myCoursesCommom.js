//页面引入公共模块
var CommonModelImport=function(){
	//引入头部
	$("#header").load('../comm/header/header.html');
	
	//引入侧边导航栏
	if ($("#AsideMenu").exist()) {
		$("#AsideMenu").load('aside/AsideNav.html',function(){
			$.getScript("../../static/comm/js/modelAsideNav.js");
			setMinHeight(0);
		});
	}
	
	//引入底部
	$("#footer").load('../comm/footer/footer.html');
	
	setMinHeight(0);
}

//页面需要预加载部分
$(document).ready(function(){
	//给侧边栏和主体部分设置一个最低高度
	CommonModelImport();
})