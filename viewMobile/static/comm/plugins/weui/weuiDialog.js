var weuiDialogFn=function(Arrays,callbackfn){
	var parameter={
		title:'我是头部',
		msg:'我是内容',
		btnNums:'2',
		btnText1:'确定',
		btnText2:'取消'
	};
	console.log(parameter);
	var objects = $.extend({}, parameter, Arrays);
	console.log(objects);
	var weuiDialog1,weuiDialog2;
	weuiDialog1='<div class="js_dialog" id="weuiDialog" style="opacity: 1;">'
		            +'<div class="weui-mask"></div>'
		            +'<div class="weui-dialog weui-skin_android">'
		            	+'<div class="weui-dialog__hd"><strong class="weui-dialog__title">'+objects.title+'</strong></div>'
		                +'<div class="weui-dialog__bd">'+objects.msg+'</div>'
		                +'<div class="weui-dialog__ft">'
		                    +'<a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary">'+objects.btnText1+'</a>'
		                    +'<a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_default">'+objects.btnText2+'</a>'
		                +'</div>'
		            +'</div>'
		        +'</div>';
	weuiDialog2='<div class="js_dialog" id="weuiDialog" style="opacity: 1;">'
		            +'<div class="weui-mask"></div>'
		            +'<div class="weui-dialog weui-skin_android">'
		                +'<div class="weui-dialog__bd">'+objects.msg+'</div>'
		                +'<div class="weui-dialog__ft" style="text-align: center; border-top: 1px solid #E1E1E1; padding:0">'
		                    +'<a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary">'+objects.btnText1+'</a>'
		                +'</div>'
		            +'</div>'
		        +'</div>';
	
	weuiDialog3='<div class="js_dialog" id="weuiDialog" style="opacity: 1;">'
		            +'<div class="weui-mask"></div>'
		            +'<div class="weui-dialog weui-skin_android">'
		                +'<div class="weui-dialog__bd">'+objects.msg+'</div>'
		            +'</div>'
		        +'</div>';
		        
	if (objects.btnNums==2) {
		$("body").append(weuiDialog1);
		$(".weui-dialog__btn_primary").click(function(){
			callbackfn(function(){
				$("#weuiDialog").remove();
			});
		});
	} else if(objects.btnNums==1){
		$("body").append(weuiDialog2);
		$(".weui-dialog__btn_primary").click(function(){
			$("#weuiDialog").remove();
		})
	}else{
		$("body").append(weuiDialog3);
		setTimeout(function(){
			$("#weuiDialog").fadeOut(function(){
				$("#weuiDialog").remove();
			});
		},2000);
	}
	
	$(".weui-dialog__btn_default").click(function(){
		$("#weuiDialog").remove();
	});
}

var actionSheetFn=function(Arrays,callbackfn){
	var parameter=['时间升序','时间降序'];//如果没有传入选择则使用该数组
	var menuHtml='';
	if (Arrays==undefined) {
		for (var i in parameter) {
			menuHtml+='<div class="weui-actionsheet__cell" data-id="ID.'+i+'">'+parameter[i]+'</div>'
		}
	} else{
		for (var i in Arrays) {
			menuHtml+='<div class="weui-actionsheet__cell" data-id="ID.'+i+'">'+Arrays[i]+'</div>'
		}
	}
	var actionSheetMenuStr ='<div id="actionSheet_wrap">'
							    +'<div class="weui-mask" id="iosMask" style="opacity: 1;"></div>'
							    +'<div class="weui-actionsheet" id="iosActionsheet">'
							        +'<div class="weui-actionsheet__menu">'
							        +'</div>'
							        +'<div class="weui-actionsheet__action">'
							            +'<div class="weui-actionsheet__cell" id="iosActionsheetCancel">取消</div>'
							        +'</div>'
							    +'</div>'
							+'</div>';
	//操作						
    $(function(){
    	var $actionSheet_wrap=$("#actionSheet_wrap");
    	if(!$actionSheet_wrap.length){  
	        $('body').append(actionSheetMenuStr);
	        $('.weui-actionsheet__menu').html(menuHtml);
	    }  
	    
        var $iosActionsheet = $('#iosActionsheet');
        var $iosMask = $('#iosMask');
		
		$iosMask.fadeIn(200);
		$iosActionsheet.addClass('weui-actionsheet_toggle');
		
        function hideActionSheet() {
            $iosActionsheet.removeClass('weui-actionsheet_toggle');
            $iosMask.fadeOut(200);
            //$actionSheet_wrap.remove();
        }

        $iosMask.on('click', hideActionSheet);
        $('#iosActionsheetCancel').on('click', hideActionSheet);
        $(".weui-actionsheet__menu .weui-actionsheet__cell").each(function(){
        	$(this).on("click", function(){
	            //var $id=$(this).attr('data-id').split('.')[1];
	            callbackfn($(this).index()*1);
	            hideActionSheet();
	        });
        })
    });
}

							