	//轮播图鼠标移上停止切换,移出恢复切换封装
	//swiperClaass为轮播图的类名，swiperFn的执行函数
	var swiperStartStop=function(swiperClaass,swiperFn){
		$(swiperClaass).mouseenter(function(){
		    swiperFn.stopAutoplay();
	    }).mouseleave(function(){
	    	swiperFn.startAutoplay();
	    });
	}
	
	var swiperbig = new Swiper('.banner_box .swiper-container', {
	    pagination: '.banner_box .swiper-pagination',
	    paginationClickable: '.banner_box .swiper-pagination',
	    autoplay : 2000,
	    speed:1000,
	    loop:true,
	    spaceBetween: 300,
	    autoplayDisableOnInteraction: false,
	    effect: 'fade'
	});
	swiperStartStop('.banner_box .swiper-container',swiperbig);
	
	//侧边导航栏的效果
	function AsideNav_fn(){
		//获取轮播图高度
		var bannerH=$(".banner_box").height();
		var bannerW=$(".banner_box").width();
		console.log(bannerH+'--aaa');
		//判断侧边导航栏是否存在
		if ( $("#AsideNav_box>.childList_box").exist()) {
			$("#AsideNav_box,.AsideNav_list_content").css({"height":bannerH});
			var $list_childW=(bannerW-182)+'px';
			$(".AsideNav_list_child").css({"width":$list_childW});
			//获取导航栏子菜单个数
			var Aside_a_length=$("#AsideNav_box>.childList_box").length;
			//设置侧边导航栏每个子栏目样式
			var Aside_aH=(bannerH+1)/Aside_a_length;
			var Aside_aHpx=(bannerH+1)/Aside_a_length+"px";
			console.log(Aside_aH);
			$("#AsideNav_box>.childList_box").css({"height":Aside_aHpx,"line-height":Aside_aHpx});
			
			$(".childList_box").each(function(){
				var $index=$(this).index();
				var otherH=bannerH-Aside_aH*$index;
				var $that=$(this);
				$.ajax({
					type:"get",
					url:"../js/navListChild.json",
					async:true,
					success:function(result){
						$that.find('.AsideNav_list_child').each(function(){
							for (var i in result) {
								console.log(result[i].listTitle);
								var $dl=$("<dl class='LiChild_dl'><dt class='child_li_title'>"+result[i].listTitle+"</dt><dd class='child_li_content'></dd></dl>");
								$(this).append($dl);		
								var dd_content=result[i].listContent;
								for (var j in dd_content) {
									var $dd_a=$("<a href='javascript:;'>"+dd_content[j]+"</a>");
									$dl.find('.child_li_content').append($dd_a);
								}
							}
							var listchildH=$(this).outerHeight();
							var $top=otherH-listchildH;
							console.log(otherH-listchildH);
							if ($top<0) {
								$top=$top+'px';
								console.log('$p_top:'+$top);
								$(this).css({'top':$top});
							}
						})
						
					}
				});
			})
			
		}
	}
	
	AsideNav_fn();