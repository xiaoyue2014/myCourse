var ModelDilogBox=function(Arrays,fn){
	var parameter={
		title:'提示信息', //提示框标题
		Linkhref:'',//tips文件所在的文件夹路径
		marginTop:'45%',
		marginLeft:'',
		borderRadius: '5px',
		width:'70%',
		warpBox:'',//放入的地方
		clickBtn:'', //点击调用弹窗
		Times:'3000',//回调函数延时执行时间
		tipsText:'正在加载中. . .'
	};
	
	var objects = $.extend({}, parameter, Arrays);
	
	function tipsBoxShow(){
		var mgLeft,Width=objects.width;
		if (objects.marginLeft!='') {
			mgLeft=objects.marginLeft;
		}else{
			if (Width.indexOf('%')!=-1&&objects.marginLeft=='') {
				mgLeft=(100-Width.replace('%',''))/2+'%';
			}
		}
		//console.log(mgLeft);
		//生成提示框
		var tipsBox=$("<div class='modelDialogWarp'><div class='modelDialog'><div class='title'>"+objects.title+"</div><div class='modelContent'>"+objects.tipsText+"</div><div class='modalBtn'><span id='clickBtn'>确定</span></div></div>");
		$(objects.warpBox).append(tipsBox);
		$(".modelDialog").css({
			'margin-top':objects.marginTop,
			'width':objects.width,
			'margin-left':mgLeft,
			'border-radius':objects.borderRadius
		});
		$("#clickBtn").bind('click',function(){
			$(".modelDialogWarp").empty().remove();
			if (fn) {
				setTimeout(function(){
					fn();
				},objects.Times);
			}
		});
	}
	tipsBoxShow();
}
//调用实例
function tipsDialog(tipsText,fn){
	ModelDilogBox({
		marginTop:'45%', //中间加载部分距离顶部高度
		marginLeft:'', //中间加载部分距离左侧宽度、不设置，则横向居中
		width:'70%', //中间加载部分的宽度，单位必须%
		clickBtn:'', //点击触发的按钮的class、id,未设置时直接显示
		Times:'1000',//回调函数延时执行时间
		warpBox:'.Con_Main',//要放入的包裹层的类名、id
		tipsText:tipsText //提示信息
	},fn);
}

