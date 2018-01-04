//调用弹窗的函数
function dialogmodel(url,title,btnclass,Width,Hight){
	$(btnclass).click(function(e){
		e.stopPropagation();
		// 通过options参数，控制iframe对话框
		dialog = jDialog.iframe(url,{
			title : title,
			width : Width,
			height : Hight
		});
//		art.dialog.open(url, {
//			id : "preAdd",
//			background: 'black',
//		    opacity: 0.2, 
//		    padding: 0,
//		    width : '40%', 
//		    height : '65%', 
//		    drag:true, 
//		    lock: true,
//		    title: title,
//		    resize: true
//		 });
	})
}
//关闭弹窗
function dialogClose (){
	dialog.close();
}