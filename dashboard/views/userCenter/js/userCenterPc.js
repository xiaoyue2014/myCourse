//设置最小高度
var minHight=$(document.body).height()-$(".header").height()-38;
$(".MainCenter_left").css({'min-height':minHight});
$(".MainCenter_right").css({'min-height':minHight});


//设置左侧选项与右侧内容对应
//$(".message_lists li a").each(function(){
//	$(this).click(function(){
//		var Index=$(this).parent().index();
//	    console.log(Index);
//		//$(this).addClass('activeBorder').parent().siblings().find('a').removeClass('activeBorder');
//		//$(".rt_content li").eq(Index).addClass('activeRtLi').siblings().removeClass('activeRtLi');
//	})
//});
var height_changes={
	init:function(Btns,Parentt,changeEle,animateClass){
		this.heightChanges(Btns,Parentt,changeEle,animateClass);
	},
	heightChanges:function(Btns,Parentt,changeEle,animateClass){
		$(Btns).each(function(){
			var ol_hdie_nums=0;
			$(this).click(function(e){
				e.stopPropagation();
				//console.log(Btns+'-'+Parentt+'-'+changeEle)
				if (ol_hdie_nums%2==0) {
					$(this).parents(Parentt).find(changeEle).slideDown();
					$(this).find('i').eq(1).addClass(animateClass);
				} else{
					$(this).parents(Parentt).find(changeEle).slideUp();
					$(this).find('i').eq(1).removeClass(animateClass);
				}
				console.log($(".MainCenter_left").height());
				ol_hdie_nums++;
			})
		})
		
	}
}
height_changes.init(".parent_list","li",".child_list","Rotate_90");