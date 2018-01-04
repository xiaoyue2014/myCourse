	//设置标题
	$(".head_title").html('高一课时变化趋势图');
	
	
	//图标模块代码
	var Grids={
        x: "6%",
        y: "14%",
        x2:"6%",
        y2:"10%"
    };
    var chartName='课时次';
    var xAxisdata=["2017/11/01","2017/11/02","2017/11/03","2017/11/04","2017/11/05","2017/11/06","2017/11/07","2017/11/08","2017/11/09","2017/11/10","2017/11/11"]
    var Interval=Math.floor((xAxisdata.length-3)/2);
    var seriesdata=["5","6","10","20","15","20","2","4","8","4","9"];
    //echart数据模板
	var ChartOption = {
	    tooltip : {
	        trigger: 'axis'
	    },
	    legend: {
	    	orient : 'vertical',//vertical horizontal
	        x : 'left',
	        y : 'top',
	        itemWidth:20,
	        itemHeight:12,
	        data:[chartName]
	    },
	    grid: Grids,
	    toolbox: {
	        show : true,
	        orient : 'horizontal',
	        feature : {
	            mark : {show: true},
	            dataView : {show: true, readOnly: false},
	            magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
	            restore : {show: true},
	            saveAsImage : {show: true}
	        }
	    },
	    calculable : true,
	    xAxis : [
	        {
	            type : 'category',
	            name:'日期',
	            boundaryGap : true,
	            axisLabel:{
	                 //X轴刻度配置
	                 interval:Interval //0：表示全部显示不间隔；auto:表示自动根据刻度个数和宽度自动设置间隔个数
	            },
	            data:xAxisdata
	        }
	    ],
	    yAxis : [
	        {
	            type : 'value',
                name:'单位（次）',
                nameGap:30	//坐标轴名字里坐标系的距离
	        }
	    ],
	    series : [
	    	{
	            name:chartName,
	            symbol:'none',  //这句就是去掉点的  
       			smooth:true,  //这句就是让曲线变平滑的 
	            type:'line',
	            data:seriesdata
	        }
	    ]
	};
    

	
	//动态创建
	var chartFn=function(ChartOption){
		var ChartDiv = document.getElementById('ChartDiv');
	    var ChartDiv_init = echarts.init(ChartDiv);
	    ChartDiv_init.clear();//每次生成的echarts都要清空缓存
		ChartDiv_init.setOption(ChartOption,true);
	    //加载动画
	    ChartDiv_init.showLoading();
	    
	    ChartDiv_init.setOption(ChartOption);
	    var Times = setTimeout(function(){
        	ChartDiv_init.hideLoading();  //隐藏加载动画
        	ChartDiv_init.setOption(ChartOption,true);
        	clearTimeout(Times);
        },500);
        
	    //屏幕宽度发生变化时从新加载图表
		window.addEventListener("resize",function(){
	        ChartDiv_init.resize();
	    });
		
	}
	chartFn(ChartOption);
	
