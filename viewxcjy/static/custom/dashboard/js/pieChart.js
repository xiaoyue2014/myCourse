	//设置标题
	$(".head_title").html('高一课年级占比');
	
	//图标模块代码
	var Grids={
        x: "10%",
        y: "10%",
        x2:"10%",
        y2:"10%"
    };
	
	
	ChartOption = {
	    tooltip : {
	        trigger: 'item',
	        formatter: "{a} <br/>{b} : {c} ({d}%)"
	    },
	    legend: {
	        x : 'left',
	        y : 'top',
	        orient : 'vertical',
	        itemWidth:20,
	        itemHeight:12,
	        data:[]
	    },
	    toolbox: {
	        show : true,
	        orient : 'horizontal',
	        x:'right',
	        y:'top',
	        feature : {
	            mark : {show: true},
	            dataView : {show: true, readOnly: true},
	            magicType : {
	                show: true,
	                orient : 'horizontal',
	                type: ['pie']
	            },
	            restore : {show: true},
	            saveAsImage : {show: true}
	        }
	    },
	    calculable : true,
	    series : [] 
	};
	
    var chartFn=function(ChartOption){
    	var ChartDiv = document.getElementById('ChartDiv');
	    var ChartDiv_init = echarts.init(ChartDiv);
		ChartDiv_init.clear();//每次生成的echarts都要清空缓存
		ChartDiv_init.setOption(ChartOption,true);
	    //加载动画
	    ChartDiv_init.showLoading();
	    
	    $.ajax({
	    	type:"get",
	    	url:"../../../static/custom/dashboard/js/gradeData.json",
	    	async:true,
	    	success:function(data){
	    		//console.log(data[0].grade);
	    		var timeSlottitle=['0~10','11~20','21~30','31~45','45以上'];
	    		var Item=function(){
	    			return ({
			            name:'',
			            type:'pie',
			            radius : '40%',
			            center: ['50%', '45%'],
			            data:[],
					    itemStyle:{ 
				            normal:{ 
				                label:{ 
				                   show: true,
				                   //position:'inner', //显示位置
				                   formatter: '{a}：\n{c}次(占比{d}%)' //'{b}:{c}({d}%)'其中 {b}为数据名称，{c}数据数值，{d}为数据所占百分比
				                }, 
				                labelLine :{show:true}
				            } 
				        }
			        })
	    		};
	    		var list=[];
	    		var Item=new Item();
	    		Item.name=data[0].grade;
	    		var timeSlot0=data[0].timeSlot;
	    		for (var i in timeSlot0) {
	    			list.push({name:timeSlottitle[i],value:timeSlot0[i]});
	    		}
	    		Item.data=list;
	    		
	    		ChartOption.series.push(Item);
	    		ChartOption.legend.data=timeSlottitle;
	    		
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
	    });
		
    }
    chartFn(ChartOption)
    
    
    
				            
