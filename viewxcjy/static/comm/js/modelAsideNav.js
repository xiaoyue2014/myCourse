	//主侧边栏点击效果
	var Aside_main={
		init:function(){
			this.Aside_init();
			this.Aside_show();
			this.Aside_list_imgChange();
			this.Aside_list();
		},
		Aside_init:function(){
			var Aside_show_btnNums = sessionStorage.getItem("aside");
			var url = window.location.href;
			if (url.indexOf('search') != -1){
				return;
			}
			if(Aside_show_btnNums == undefined || Aside_show_btnNums == "close"){
				$(".MainContent").css({'padding-left':'150px'});
				$(".AsideBtn_tp").css({width:'25%'});
				$(".AsideBtn_bt").css({width:'75%'});
				$(".AsideMenu").css({width:'150px'});
				$(".list_icon").css({width:'25%'});
				$(".list_name_right").css({width:'75%',fontSize:'14px'});
				sessionStorage.setItem("aside","close");
			}else{
				$(".AsideBtn_tp").css({width:'100%'});
				$(".AsideBtn_bt").css({width:'0%'});
				$(".list_name_right").css({width:'0',fontSize:'0rem'});
				$(".AsideMenu").css({width:'4.16%'});
				$(".MainContent").css({'padding-left':'4.16%'});
				$(".list_icon").css({width:'100%'});
				sessionStorage.setItem("aside","open");
			}
			
		},
		Aside_show:function(){
			//var Aside_show_btnNums=0; 
			$(".Aside_show_btn").on('click',function(e){
				var Aside_show_btnNums = sessionStorage.getItem("aside"); 
				if (Aside_show_btnNums == "open") {
					//$(this).animate({width:'12%'},500);
					$(".MainContent").animate({'padding-left':'150px'},500);
					$(".AsideBtn_tp").animate({width:'25%'},500);
					$(".AsideBtn_bt").animate({width:'75%'},500);
					$(".AsideMenu").animate({width:'150px'},500);
					$(".list_icon").animate({width:'25%'},500);
					$(".list_name_right").animate({width:'75%',fontSize:'14px'},700);
					sessionStorage.setItem("aside","close");
				} else{
					//$(this).animate({width:'3%'},500);
					$(".AsideBtn_tp").animate({width:'100%'},500);
					$(".AsideBtn_bt").animate({width:'0%'},500);
					$(".list_name_right").animate({width:'0',fontSize:'0rem'},280);
					$(".AsideMenu").animate({width:'4.16%'},500);
					$(".MainContent").animate({'padding-left':'4.16%'},500);
					$(".list_icon").animate({width:'100%'},500);
					sessionStorage.setItem("aside","open");
				}
				Aside_show_btnNums++;
				e.stopPropagation();
			})
		},
		Aside_list_imgChange:function(){
			$(".Aside_list_li").each(function(){
				var $ImgSrc=$(this).find('.list_icon>img').attr('src');
				$(this).mouseenter(function(){
					//console.log($ImgSrc);
					var $ImgSrcOn=$ImgSrc.split('.')[0];
					//console.log($ImgSrcOn);
					$(this).find('.list_icon>img').attr({src:$ImgSrcOn+'_on.png'});
				}).mouseleave(function(){
					$(this).find('.list_icon>img').attr({src:$ImgSrc});
				})
			})
		},
		Aside_list:function(){
			$(".Aside_list_li").click(function(){ 
				sessionStorage.setItem("active",$(this).index());
				console.log($(this).index())
			})
		}
	}
	Aside_main.init();