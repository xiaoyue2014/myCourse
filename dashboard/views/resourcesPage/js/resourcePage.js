//在登录页登录成功以后设置localStorage
 var LocalSge=window.localStorage;
 LocalSge.setItem('xcjy_ssxt_user_name','superadmin');

//关于登录、退出部分
var loginOut={
	init:function(URl){
		this.goIn();
		this.Changes();
		this.Out(URl);
		this.isPC();
		
	},
	goIn:function(){
		var user_names = localStorage.getItem('xcjy_ssxt_user_name');
		console.log(user_names);
		if(user_names){
			$(".user_names").html(user_names);
		}
	},
	Changes: function(){
		$(".user_box").click(function(){
			$(".daosanjiao").hide();
			$(".user_out").show();
		});
	},
	Out:function(URl){
		$(".user_out").click(function(){
			localStorage.removeItem('xcjy_ssxt_user_name');
			location.href=URl;
		});
		$(".user_outBtn").click(function(){
			localStorage.removeItem('xcjy_ssxt_user_name');
			location.href=URl;
		});
	},
	isPC:function(){
		//给主体部分定个最小高度
		var minHight=$(document.body).height()-$(".header").height()-38;
        $(".MainCenter").css('min-height',minHight);
        //console.log($(".MainCenter").height()+"---"+$(document.body).height())
		
		//头部右侧用户信息
		$(".user_box").mouseenter(function(){
			$(".shezhiNav").show();
		}).mouseleave(function(){
			$(".shezhiNav").hide();
		});
		$(".shezhiNav").mouseenter(function(){
			$(this).show();
		}).mouseleave(function(){
			$(this).hide();
		});
		$(".shezhiNav li").mouseenter(function(){
			$(this).addClass('activeli').siblings().removeClass("activeli");
		});
		$(".shezhiNav li").each(function(){
			$(this).click(function(){
				$(".shezhiNav").hide();
			})
		})
	}
	
}
loginOut.init('https://www.baidu.com/');