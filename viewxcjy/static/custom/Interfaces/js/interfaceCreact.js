(function($){
	$(function(){
	    //do anything
	    var addParamsFn=function(){
	    	//点击叉叉去掉当前参数
	    	function removeLiFn(){
	    		$(".Info_ul .removeParamsBtn").each(function(){
					$(this).bind('click',function(){
						$(this).parents('li').remove();
						if ($(this)) {
							
						}
					});
				})
	    	}
	    	
	    	//var $select=$(this).parent('li').find('select');
	    	//Headers参数添加
	    	var HeadersFn=function(){
	    		//初始化
	    		var $input2=$("<li><input type='text' placeholder='请填写参数名' /><b>：</b><input type='text' placeholder='请填写参数值' /><i class='addParamsBtn'></i><i class='removeParamsBtn'></i><span class='tips'></span></li>");
	    		$(".HeadersInfo").append($input2);
	    		$(".HeadersInfo .addParamsBtn").each(function(){
		    		$(this).bind('click',function(){
		    			var $input=$(this).parent('li').find('input');
			    		if ($input.eq(0).val().length==0) {
		    				$(this).parent('li').find('.tips').html('*请填写参数名');
		    			}else if($input.eq(1).val().length==0){
		    				$(this).parent('li').find('.tips').html('*请填写参数值');
		    			}else if($input.eq(0).val().length==0&&$input.eq(1).val().length==0){
		    				$(this).parent('li').find('.tips').html('*请填写参数名');
		    			}else if($input.eq(0).val().length>0&&$input.eq(1).val().length>0){
		    				$(this).parent('li').find('.tips').html('');
		    				$(".HeadersInfo").append($input2);
		    				if ($(this).parent('li').index()==0) {
		    					$(this).parent('li').find('.removeParamsBtn').show();
		    					//$(this).after("<i class='removeParamsBtn'></i>");
		    				}
		    				$(this).hide();
		    				HeadersFn();
		    				removeLiFn();
		    			}
		    		});
		    	});
	    	}
	    	HeadersFn();
	    }
	    addParamsFn();
    })
})(jQuery);		