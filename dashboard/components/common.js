//判断设备为移动端还pc端
function IsPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone","SymbianOS", "Windows Phone", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    if(window.screen.width>=768){
         flag = true;
    }
    return flag;
}
console.log(IsPC());


//在登录页登录成功以后设置localStorage
 var LocalSge=window.localStorage;
 LocalSge.setItem('xcjy_ssxt_user_name','admin');

function setMinHeigiht(nums){
	var minHight=$(document.body).height()-$(".header").height()-40-nums;
    $(".MainCenter").css('min-height',minHight);
}

//关于登录、退出部分
var loginOut={
	init:function(URl){
		this.goIn();
		this.Changes();
		this.Out(URl);
		this.isPC_isIphone();
		
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
	isPC_isIphone:function(){
		if (IsPC()) {
			//给主体部分定个最小高度
			setMinHeigiht(0)
            //console.log($(".MainCenter").height()+"---"+$(document.body).height())
			
			//头部右侧用户信息
			//$(".user_box").mouseenter(function(){
			//	$(".shezhiNav").show();
			//}).mouseleave(function(){
			//	$(".shezhiNav").hide();
			//});
			//$(".shezhiNav").mouseenter(function(){
			//	$(this).show();
			//}).mouseleave(function(){
			//	$(this).hide();
			//});
			//$(".shezhiNav li").mouseenter(function(){
			//	$(this).addClass('activeli').siblings().removeClass("activeli");
			//});
			//$(".shezhiNav li").each(function(){
			//	$(this).click(function(){
			//		$(".shezhiNav").hide();
			//	})
			//})
		} else{
			$(".is_iphone").attr('href','PersonalSet.html');
			$(".footer").hide(); //页脚也消失
			$(".system_out").hide();
			$(".span_icon_pc").hide();
			$(".span_icon_iphone").show();
		}
	}
	
}
loginOut.init('https://www.baidu.com/');

//侧边栏点击
var asideChange={
	init:function(ele1,ele2,ele3,Elem1,class1,class2){
		this.changes(ele1,Elem1,class1,class2);
		this.changes(ele2,Elem1,class1,class2);
		this.changeHide(ele3,Elem1,class1,class2);
	},
	changes:function(ele,Elem1,class1,class2){
		ele.on('click',function(){
			Elem1.toggleClass(class1);
			$(".aside_btn").toggleClass(class2);
			return false;
		});
	},
	changeHide:function(ele,Elem1,class1,class2){
		ele.on('click',function(e){
			Elem1.removeClass(class1);
			$(".aside_btn").removeClass(class2);
			e.preventDefault;
		});
	}
}
asideChange.init($(".aside_btn"),$(".aside_list li"),$(".Con_Main"),$(".Aside"),'aside_active','aside_btn_active');

// 拖拽部分代码
$( function() {
   $('.sortable').sortable(); 
});

//点击某个元素另一个元素高度变化
var ele_height_changes={
	init:function(Btns,Parentt,changeEle,animateClass){
		this.heightChanges(Btns,Parentt,changeEle,animateClass);
	},
	heightChanges:function(Btns,Parentt,changeEle,animateClass){
		$(Btns).each(function(){
			var ol_hdie_nums=0;
			$(this).click(function(){
				ol_hdie_nums++;
				//console.log(Btns+'-'+Parentt+'-'+changeEle)
				if (ol_hdie_nums%2==0) {
					$(this).parents(Parentt).find(changeEle).slideDown();
					$(this).removeClass(animateClass);
				} else{
					$(this).parents(Parentt).find(changeEle).slideUp();
					$(this).addClass(animateClass);
				}
				return false;
			})
		})
		
	}
}

//单个学校展示页学校名字后箭头的点击效果
//ele_height_changes.init(".ol_hide",".school_total",".school_qk_list","Rotate_180");
//ele_height_changes.init(".ol_hide",".all_school_total",".school_qk_list","Rotate_180");
//
////每个图表模块后箭头的点击效果
//ele_height_changes.init(".tubiao_title i",".echarts_list_contont",".sortable","Rotate_180");
//
////全部学校页面总表的头部点击
//ele_height_changes.init(".table_hide i",".all_table_content",".all_school_table_warp","Rotate_180");


//echarts模块化
var EchartModel={
	init:function(Item,Url,Option,ModelWarp,echartsBoxId,changeBtnId,titles){
		ModelWarp.empty();
		this.ModelCreact(Item,Url,Option,ModelWarp,echartsBoxId,changeBtnId,titles);
		this.refreshEchart(Item,Url,Option,ModelWarp,echartsBoxId,changeBtnId,titles);
	},
	EchartsWarp:function(){
		var echartsTable="<div class='echartsWarp'></div>";
		return echartsTable;
	},
	changeNav:function(changeBtnId){
		if (changeBtnId) {
			var changeNav="<div class='changes_nav'>"
		                 +"<div class='changes_nav_one'><a href='javascript:;'>查看</a></div>"
		                 +"<div class='changes_nav_two' id='"+changeBtnId+"'><span class='spactive'>一天</span><span>一周</span><span>一个月</span><span>一个学期</span></div>"
		              +"</div>";
		
		    return changeNav;
		} else{
			var changeNav="<div class='changes_nav'>"
		                 +"<div class='changes_nav_one'>查看</div>"
		                 +"<div class='changes_nav_two'><span class='spactive'>一天</span><span>一周</span><span>一个月</span><span>一个学期</span></div>"
		              +"</div>";
		
		    return changeNav;
		}    
	},
	echartsList:function(echartsBoxId){
		if (echartsBoxId) {
			var echartsList="<div style='display:inline-block;height: 300px;width:100%' class='echartsList' id='"+echartsBoxId+"'></div>";
			return echartsList;
		} else{
			var echartsList="<div class='echartsList'></div>";
			return echartsList;
		}
	},
	ModelCreact:function(Item,Url,Option,ModelWarp,echartsBoxId,changeBtnId,titles){
		var that=this;
		//生成元素并放入相应li中
		ModelWarp.empty();//插入元素前清空
		changeBtnId1=changeBtnId.replace('#','');
		ModelWarp.append(this.changeNav(changeBtnId1));
		ModelWarp.append(this.EchartsWarp());
		
		//点击不同的时期按钮展现不一样数据的图表
	    var TimeChangeSpan = $(changeBtnId).find('span');
	    //给每一个点击按钮设置不一样的属性
	    for (var i=0;i<TimeChangeSpan.length;i++) {
	    	var dateId="dateType"+i;
	    	TimeChangeSpan.eq(i).attr("data-url",dateId);	
	    }
	    
	    //点击切换变化数据
	    $(changeBtnId).find('span').each(function(){
	    	$(this).on('click',function(e){
	    		e.stopPropagation();
	    		$(this).addClass('spactive').siblings().removeClass('spactive');
	    		var daurl=$(this).attr("data-url");
	    		console.log(daurl);
	    		$(this).parents('.echarts').find(".echartsWarp").find(echartsBoxId).remove();
	    		$(this).parents('.echarts').find(".echartsWarp").empty();
	    		that.refreshEchart(Item,"js/datas1.json",Option,ModelWarp,echartsBoxId,changeBtnId,titles);
	    		return false;
	    	});
	    });
	    
		//this.refreshEchart(Item,Url,Option,ModelWarp,echartsBoxId,changeBtnId);
	},
	refreshEchart:function(Item,Url,Option,ModelWarp,echartsBoxId,changeBtnId,titles){
		//获取图表包裹层id
		var $echartsWarp=ModelWarp.find(".echartsWarp");
		$echartsWarp.empty();
		var echartsBoxId1=echartsBoxId.replace('#','');
		$echartsWarp.append(this.echartsList(echartsBoxId1))
		var echarts_id = document.getElementById(echartsBoxId1);
        var myCharts = echarts.init(echarts_id);
        myCharts.clear();//每次生成的echarts都要清空缓存
		//展现空模板
	    myCharts.setOption(Option,true);
	    //加载动画
	    myCharts.showLoading();
	    //动态加载数据
	    this.echartsAjax(Item,Url,Option,ModelWarp,echartsBoxId,changeBtnId,titles,myCharts,$echartsWarp);
	    
	},
	echartsAjax:function(Item,Url,Option,ModelWarp,echartsBoxId,changeBtnId,titles,myCharts,$echartsWarp){
		var that=this;//防止this指向发生变化
		//动态加载数据
    	$.ajax({
	    	type:"get",
	    	url:Url,
	    	async:true,
	    	dataType:'json',
	    	success:function(datas){
	    		
	    		var dataLists = datas.dataList;
	    		var xAxis=datas.xAxis;
	    		//console.log(xAxis);
	    		
	    		
	            var Legends=[];
	            var Series=[];
	            for (var i=0;i<dataLists.length;i++) {
	            	var Datas,Istem=new Item();
	            	Istem.name=dataLists[i].names;
	            	Legends.push(dataLists[i].names);
	            	
	            	Datas=dataLists[i].datas;
	            	//console.log(Datas.length)
	            	for (var j in Datas) {
	            		Istem.data.push(Datas[j])
	            	}
	            	Series.push(Istem);
	            }
	            
	            //补充完整图表上的信息
	            Option.title.text=titles.texts; //主标题
	            Option.title.subtext=titles.subtext, //副标题
	            Option.xAxis[0].data = datas.xAxis; //因为x轴有两条轴要取[0]
	            Option.legend.data=Legends;   //导航栏信息
	            Option.series=Series;    //实际展示的数据
	            var Times = setTimeout(function(){
	            	myCharts.hideLoading();  //隐藏加载动画
	            	myCharts.setOption(Option,true);
	            	clearTimeout(Times);
	            },500)
	            
	           
	            //设置随着屏幕大小变化而改变图表
			    window.addEventListener("resize",function(){
					myCharts.resize();
			    });
	            
	    	},
	    	error:function(){
	    		confirm('网络异常请稍后重试!')
	    	}
	    });
	}
}


//每个li中时间改变和点击查看的点击函数
   function clickChange(){
   	  //点击此处查看表格数据
	   $(".changes_nav_one").each(function(){
	   	 var clickNums=0;
	   	 $(this).click(function(){
	   	 	if(clickNums%2==0){
	   	 		$(this).parents('.echarts').find('.echartsList').hide();
	   	 		$(this).parents('.echarts').find('table').show();
	   	 	}else{
	   	 		$(this).parents('.echarts').find('.echartsList').show();
	   	 		$(this).parents('.echarts').find('table').hide();
	   	 	}
	   	    //console.log(clickNums)
	   	 	clickNums++;
	   	 	return false;
	   	 })
	   })
	   
	   //每个阶段选项的代码变化
	   $(".changes_nav_two").each(function(){
	   	  $(this).find('span').eq(0).addClass('spactive');
	   	  $(this).find('span').each(function(){
	   	  	 $(this).click(function(){
	   	  	 	$(this).addClass('spactive').siblings().removeClass('spactive');
	   	  	 })
	   	  })
	   });
   }
   //暂时使用，后续删除
   //clickChange();

