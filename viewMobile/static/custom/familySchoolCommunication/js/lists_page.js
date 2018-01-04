//排序功能
var sortFn=function(callbackFn){
	$("#icon_sort").bind('click',function(){
		actionSheetFn(['时间排序升序','时间排序降序'],callbackFn);
	});
}

//时间选择
var dateSelect=function($this,defaultValueTime,callbackfn){
	var $defaultValue=[2017, 06, 06];
	var $startTime=1990;
	if (defaultValueTime!=undefined) {
		$defaultValue=defaultValueTime;
	}
	weui.datePicker({
	    start: $startTime,
	    end: new Date(),
	    defaultValue: $defaultValue,
	    onChange: function(result){
	        //console.log(result);
	    },
	    onConfirm: function(result){
	        //console.log(result);
	        var dateTime='';
	        for (var i=0;i<result.length;i++) {
	        	//console.log(result[i].value)
	        	if (i!=0) {
	        		dateTime+='-'+result[i].value;
	        	}else{
	        		dateTime+=result[i].value;
	        	}
	        }
	        $this.html(dateTime);
	        callbackfn();
	        
	    },
	    id: 'datePicker'
	});
}