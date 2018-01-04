   //点击此处查看表格数据
   $(".changes").each(function(){
   	 var clickNums=0;
   	 $(this).click(function(){
   	 	if(clickNums%2==0){
   	 		$(this).parent().find('.echartsList').hide();
   	 		$(this).parent().find('table').show();
   	 	}else{
   	 		$(this).parent().find('.echartsList').show();
   	 		$(this).parent().find('table').hide();
   	 	}
   	 	clickNums++;
   	 	return false;
   	 })
   })
   
   // 拖拽部分代码
   $('.sortable').sortable();
    
   //图标echarts_one部分
   var echarts_one = document.getElementById('echarts_one');
   var echarts_two = document.getElementById('echarts_two');
   var echarts_three = document.getElementById('echarts_three');
   var echarts_four = document.getElementById('echarts_four');
   var echarts_five = document.getElementById('echarts_five');
   
   var myChartOne = echarts.init(echarts_one);
   var myChartTwo = echarts.init(echarts_two);
   var myChartThree = echarts.init(echarts_three);
   var myChartFour = echarts.init(echarts_four);
   var myChartFive = echarts.init(echarts_five);
   option = {
	    title : {
	        text: '课时记录学科比例图',
	        subtext: '',
	        x:'center'
	    },
	    tooltip : {
	        trigger: 'item',
	        formatter: "{a} <br/>{b} : {c} ({d}%)"
	    },
	    legend: {
	        orient : 'vertical',
	        left : '20px',
	        data:['语文','数学','英语','历史','生物','地理，化学']
	    },
	    toolbox: {
	        show : true,
	        orient : 'vertical',
	        right:'15px',
	        y:'top',
	        feature : {
	            mark : {show: true},
	            dataView : {show: true, readOnly: true},
	            magicType : {
	                show: true,
	                orient : 'vertical',
	                type: ['pie', 'funnel'],
	                option: {
	                    funnel: {
	                        x: '25%',
	                        width: '50%',
	                        funnelAlign: 'left',
	                        max: 1548
	                    }
	                }
	            },
	            restore : {show: true},
	            saveAsImage : {show: true}
	        }
	    },
	    calculable : true,
	    series : [
	        {
	            name:'课时次数',
	            type:'pie',
	            radius : '55%',
	            center: ['50%', '60%'],
	            data:[
	                {value:50, name:'语文'},
	                {value:60, name:'数学'},
	                {value:50, name:'英语'},
	                {value:55, name:'历史'},
	                {value:66, name:'生物'},
	                {value:77, name:'地理'},
	                {value:88, name:'化学'}
	            ]
	        }
	    ]
	};
	                    
                    
	
	// 为echarts对象加载数据 
	//myChartOne.showLoading();
	myChartOne.setOption(option);
    myChartTwo.setOption(option);
    myChartThree.setOption(option);
    myChartFour.setOption(option);
    myChartFive.setOption(option);
    
    //屏幕宽度发生变化时从新加载图表
	window.addEventListener("resize",function(){
        myChartOne.resize();
		myChartTwo.resize();
		myChartThree.resize();
		myChartFour.resize();
		myChartFive.resize();
    });
    
    
    
//  $("#main_content").onresize = function(){
//	   myChart.setOption(option);
//	}