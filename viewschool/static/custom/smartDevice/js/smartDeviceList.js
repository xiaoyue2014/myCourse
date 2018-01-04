(function($){
	$(function(){
	    //do anything
	    //选中智能
	    var $url=location.href;
	    var selectListFn=function($Arrays){
	    	var $selectListBtn=$("#selectListBtn");
			if (IsPC()) {
				//console.log(IsPC());
				var $select_ol=$("<ol class='select_ol' id='select_ol'></ol>");
				for (var i in $Arrays) {
					var $li=$("<li data-list="+$Arrays[i].value+"><a href='javascript:;'>"+$Arrays[i].text+"</a></li>")
					$select_ol.append($li);
				}
				//智能项目加入页面
				$selectListBtn.parent().append($select_ol);
				//下拉点击
				$selectListBtn.bind('click',function(){
					if ($(this).find('i').hasClass('Rotate_180')) {
						$("#select_ol").slideUp();
						$(this).find('i').removeClass("Rotate_180");
					}else{
						$("#select_ol").slideDown();
						$(this).find('i').addClass("Rotate_180");
					}
				});
				//每一项智能项目点击
				$("#select_ol li").each(function(){
					$(this).bind('click',function(){
						$(this).parent().slideUp();
						$selectListBtn.find('i').removeClass("Rotate_180");
						$selectListBtn.find('span').html($(this).find('a').html());
						var $list_n=$(this).attr('data-list');
						//console.log($list_n)
						loadContentFn($list_n);
					});
				})
			} else{
				var pickerFn=function($Arrays,callbackFn){
					var picker = new mui.PopPicker();
					picker.setData($Arrays);
					//picker.pickers[0].setSelectedIndex(4, 2000);
					picker.pickers[0].setSelectedValue('fourth', 2000);
					$selectListBtn.bind('click',function(){
						picker.show(function(SelectedItem) {
							//console.log(SelectedItem[0].text);
							$selectListBtn.find('span').html(SelectedItem[0].text);
							callbackFn(SelectedItem[0].value);
							//释放组件
							picker.hide();
						});
					});
				}
				pickerFn($Arrays,function(listid){
					//console.log(listid)
					loadContentFn(listid);
				});
					
			}
	    }
	    
	    var contentBoxImportFn=function(){
	    	var $chancelId=$url.split('chancelId=')[1];
    		//var n=$chancelId.split('_')[1]*1;
    		//console.log($chancelId);
    		loadContentFn($chancelId)
	    }
	    
	    var loadContentFn=function($chancelId){
	    	$("#contentBox .contentBox_bt").empty();
	    	switch($chancelId){
    			case "list1_1":
	    			//console.log($chancelId);
	    			$("#selectListBtn>span").html('教学数据');
	    			break;
	    		case "list1_2":
	    			//console.log($chancelId);
	    			$("#selectListBtn>span").html('考试报表');
	    			break;
	    		case "list1_3":
	    			//console.log($chancelId);
	    			$("#selectListBtn>span").html('课时报表');
	    			break;	
	    		case "list2_1":
	    			//console.log($chancelId);
	    			$("#selectListBtn>span").html('光感传感器');
	    			break;
	    		case "list2_2":
	    			//console.log($chancelId);
	    			$("#contentBox .contentBox_bt").load('./pageContent/smartSwitch.html');
	    			$("#selectListBtn>span").html('智能开关');
	    			break;
	    		case "list2_3":
	    			//console.log($chancelId);
	    			$("#selectListBtn>span").html('一氧化碳侦测器');
	    			break;
	    		case "list2_4":
	    			//console.log($chancelId);
	    			$("#selectListBtn>span").html('智能可燃气体报警器');
	    			break;
	    		case "list2_5":
	    			//console.log($chancelId);
	    			$("#contentBox .contentBox_bt").load('./pageContent/TempWetnessSensor.html');
	    			$("#selectListBtn>span").html('智能温度探测器');
	    			break;
	    		case "list2_6":
	    			////console.log($chancelId);
	    			$("#selectListBtn>span").html('智能门磁探测器');
	    			break;
	    	}
	    }
	    
	    $(document).ready(function(){
	    	var $list_=$url.split('chancelId=')[1].split('_')[0];
	    	if ($list_=='list1') {
	    		$(".small_nav #smartName").html('教学数据监控');
	    		var Arrays=[{value: "list1_1",text: "教学数据"},{value: "list1_2",text: "考试报表"},{value: "list1_3",text: "课时报表"}];
	    		selectListFn(Arrays);
	    	}else if($list_=='list2'){
	    		$(".small_nav #smartName").html('智能终端监控');
	    		var Arrays=[{value: "list2_1",text: "光感传感器"},{value: "list2_2",text: "智能开关"},{value: "list2_3",text: "一氧化碳侦测器"},
							{value: "list2_4",text: "智能可燃气体报警器"},{value: "list2_5",text: "智能温度探测器"},{value: "list2_6",text: "智能门磁探测器"}]
	    		selectListFn(Arrays);
	    	}
    		contentBoxImportFn();
	    })
		        
    })
})(jQuery);