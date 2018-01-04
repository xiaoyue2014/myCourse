//页面引入公共模块
var CommonModelImport=function(){
	//引入头部
	$("#header").load('../../comm/header/header.html');
	
	//引入侧边导航栏
	if ($("#AsideMenu").exist()) {
		$("#AsideMenu").load('../aside/AsideNav.html',function(){
			$.getScript("../../../static/comm/js/modelAsideNav.js");
			setMinHeight(0);
		});
	}
	
	//引入底部
	$("#footer").load('../../comm/footer/footer.html');
	
	setMinHeight(0);
}

//页面需要预加载部分
$(document).ready(function(){
	//给侧边栏和主体部分设置一个最低高度
	CommonModelImport();
});

//表格排序封装
function tableSort(){
	//排序按钮点击排序
    $(".paixuBtn").each(function(){
    	$(this).bind('click',function(){
    		var $index=$(this).parents('th').index();
    		var $parentTable=$(this).parents('.CommonShowTable');
    		if ($(this).hasClass('Rotate_180')) {
    			$(this).removeClass('Rotate_180');
    			//console.log('大到小');
    			var trlength=$parentTable.find("tr").length;
    			for(var i=1;i<trlength-1;i++){  
			        for(var j=i+1;j<trlength;j++){
			        	if ($parentTable.find("tr").eq(i).find('td').eq($index).find('a').exist()) {
			        		var $tdhtml_i=$parentTable.find("tr").eq(i).find('td').eq($index).find('a').eq(0).html();
				        	var $tdhtml_j=$parentTable.find("tr").eq(j).find('td').eq($index).find('a').eq(0).html();
				        	var flag=$tdhtml_i-$tdhtml_j;
				        	//console.log(flag)
				            if(flag<0){//如果前面的数据比后面的小就交换
				            	//console.log($tdhtml_i+"...."+$tdhtml_j)
				                $parentTable.find("tr").eq(i).before($parentTable.find("tr").eq(j));
				            }
			        	}else{
			        		var $tdhtml_i=$parentTable.find("tr").eq(i).find('td').eq($index).html();
				        	var $tdhtml_j=$parentTable.find("tr").eq(j).find('td').eq($index).html();
				        	var flag=$tdhtml_i-$tdhtml_j;
				        	//console.log(flag)
				            if(flag<0){//如果前面的数据比后面的小就交换
				            	//console.log($tdhtml_i+"...."+$tdhtml_j)
				                $parentTable.find("tr").eq(i).before($parentTable.find("tr").eq(j));
				            }
			        	}
			        }  
			    }
    		}else{
    			$(this).addClass('Rotate_180');
    			//console.log('小到大');
    			var trlength=$parentTable.find("tr").length;
    			//console.log(trlength);
    			for(var i=1;i<trlength-1;i++){  
			        for(var j=i+1;j<trlength;j++){
			        	if ($parentTable.find("tr").eq(i).find('td').eq($index).find('a').exist()) {
			        		var $tdhtml_i=$parentTable.find("tr").eq(i).find('td').eq($index).find('a').eq(0).html();
				        	var $tdhtml_j=$parentTable.find("tr").eq(j).find('td').eq($index).find('a').eq(0).html();
				        	var flag=$tdhtml_i-$tdhtml_j;
				        	//console.log(flag)
				            if(flag>0){//如果前面的数据比后面的大就交换
				            	//console.log($tdhtml_i+"...."+$tdhtml_j)
				                $parentTable.find("tr").eq(i).before($parentTable.find("tr").eq(j));
				            }
			        	} else{
			        		var $tdhtml_i=$parentTable.find("tr").eq(i).find('td').eq($index).html();
				        	var $tdhtml_j=$parentTable.find("tr").eq(j).find('td').eq($index).html();
				        	var flag=$tdhtml_i-$tdhtml_j;
				        	//console.log(flag)
				            if(flag>0){//如果前面的数据比后面的大就交换
				            	//console.log($tdhtml_i+"...."+$tdhtml_j)
				                $parentTable.find("tr").eq(i).before($parentTable.find("tr").eq(j));
				            }
			        	}
			        }  
			    }
    		}
    	})
    })
			    	
}
