   //每个阶段选项的代码变化
   $(".changes_nav_two").each(function(){
   	  $(this).find('span').eq(0).addClass('spactive');
   	  $(this).find('span').each(function(){
   	  	 $(this).click(function(){
   	  	 	$(this).addClass('spactive').siblings().removeClass('spactive');
   	  	 })
   	  })
   });
   
   //图表教学部分
   var teach_echarts_one = document.getElementById('teach_echarts_one');
   var teach_echarts_two = document.getElementById('teach_echarts_two');
   var teach_echarts_three = document.getElementById('teach_echarts_three');
   var teach_echarts_four = document.getElementById('teach_echarts_four');
   var teach_echarts_five = document.getElementById('teach_echarts_five');
   var teach_echarts_six = document.getElementById('teach_echarts_six');
   
   var teach_myChartOne = echarts.init(teach_echarts_one);
   var teach_myChartTwo = echarts.init(teach_echarts_two);
   var teach_myChartThree = echarts.init(teach_echarts_three);
   var teach_myChartFour = echarts.init(teach_echarts_four);
   var teach_myChartFive = echarts.init(teach_echarts_five);
   var teach_myChartSix = echarts.init(teach_echarts_six);
   
   //图表健康部分
   var health_echarts_one = document.getElementById('health_echarts_one');
   var health_echarts_two = document.getElementById('health_echarts_two');
   
   var health_myChartOne = echarts.init(health_echarts_one);
   var health_myChartTwo = echarts.init(health_echarts_two);
   
   //空气品质
   var airQuality_echarts_one = document.getElementById('airQuality_echarts_one');
   var airQuality_myChartOne = echarts.init(airQuality_echarts_one);
   
   //安防   
   var security_echarts_one = document.getElementById('security_echarts_one');
   var security_myChartOne = echarts.init(security_echarts_one);
   
   	var Grids={
        x: "7%",
        y: "20%",
        x2:"8%",
        y2:"20%"
    },
   
    teach_option1 = {
	    title : {
	        text: '课时记录学科占比统计图',
	        subtext: '',
	        x:'center',
	        textStyle:{
	        	 fontSize: 12
	        }
	    },
	    tooltip : {
	        trigger: 'item',
	        formatter: "{a} <br/>{b} : {c} ({d}%)"
	    },
	    legend: {
	        x : 'center',
	        y : 'bottom',
	        itemWidth:20,
	        itemHeight:12,
	        data:['语文','数学','英语','历史','生物','地理','化学']
	    },
	    toolbox: {
	        show : true,
	        orient : 'vertical',
	        right:'0px',
	        y:'top',
	        feature : {
	            mark : {show: true},
	            dataView : {show: true, readOnly: false},
	            magicType : {
	                show: true,
	                orient : 'horizontal',//vertical
	                type: ['pie']
	            },
	            restore : {show: true},
	            saveAsImage : {show: true}
	        }
	    },
	    calculable : true,
	    series : [
	        {
	            name:'课时次',
	            type:'pie',
	            radius : ['15%','40%'],
	            center: ['50%', '45%'],
	            roseType : 'area',
	            x: '50%',               // for funnel
	            max: 40,                // for funnel
	            sort : 'ascending',     // for funnel
	            data:[
	                {value:20, name:'语文'},
	                {value:25, name:'数学'},
	                {value:35, name:'英语'},
	                {value:25, name:'历史'},
	                {value:20, name:'生物'},
	                {value:35, name:'地理'},
	                {value:30, name:'化学'}
	            ],
			    itemStyle:{ 
		            normal:{ 
		                label:{ 
		                   show: true,
		                   //position:'inner', //显示位置
		                   formatter: '{b}：{c}\n({d}%)' //'{b}:{c}({d}%)'其中 {b}为数据名称，{c}数据数值，{d}为数据所占百分比
		                }, 
		                labelLine :{show:true}
		            },
		            emphasis : { //数遍移上去的labelLine辅助效果
	                    label : {
	                        show : false 
	                    },
	                    labelLine : {
	                        show : false
	                    }
	                }
		        }
	        }
	        
	    ]
	};
	
	teach_option2 = {
	    title : {
	        text: '教学活动学科占比统计图',
	        subtext: '',
	        x:'center',
	        textStyle:{
	        	 fontSize: 12
	        }
	    },
	    tooltip : {
	        trigger: 'item',
	        formatter: "{a} <br/>{b} : {c} ({d}%)"
	    },
	    legend: {
	        x : 'center',
	        y : 'bottom',
	        itemWidth:20,
	        itemHeight:12,
	        data:['语文','数学','英语','历史','生物','地理','化学']
	    },
	    toolbox: {
	        show : true,
	        orient : 'vertical',
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
	    series : [
	        {
	            name:'教学次数',
	            type:'pie',
	            radius : '40%',
	            center: ['50%', '45%'],
	            data:[
	                {value:99, name:'语文'},
	                {value:60, name:'数学'},
	                {value:50, name:'英语'},
	                {value:55, name:'历史'},
	                {value:44, name:'生物'},
	                {value:77, name:'地理'},
	                {value:23, name:'化学'}
	            ],
			    itemStyle:{ 
		            normal:{ 
		                label:{ 
		                   show: true,
		                   //position:'inner', //显示位置
		                   formatter: '{a}：{c}\n({d}%)' //'{b}:{c}({d}%)'其中 {b}为数据名称，{c}数据数值，{d}为数据所占百分比
		                }, 
		                labelLine :{show:true}
		            } 
		        }
	        }
	    ] 
	};
	
	teach_option3 = {
	    title : {
	        text: '资源学科占比统计图',
	        subtext: '',
	        x:'center',
	        textStyle:{
	        	 fontSize: 12
	        }
	    },
	    tooltip : {
	        trigger: 'item',
	        formatter: "{a} <br/>{b} : {c} ({d}%)"
	    },
	    legend: {
	        x : 'center',
	        y : 'bottom',
	        itemWidth:20,
	        itemHeight:12,
	        data:['语文','数学','英语','历史','生物','地理','化学']
	    },
	    toolbox: {
	        show : true,
	        orient : 'vertical',
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
	    series : [
	        {
	            name:'资源数',
	            type:'pie',
	            radius : '40%',
	            center: ['50%', '45%'],
	            data:[
	                {value:5, name:'语文'},
	                {value:7, name:'数学'},
	                {value:11, name:'英语'},
	                {value:3, name:'历史'},
	                {value:5, name:'生物'},
	                {value:9, name:'地理'},
	                {value:5, name:'化学'}
	            ],
			    itemStyle:{ 
		            normal:{ 
		                label:{ 
		                   show: true,
		                   //position:'inner', //显示位置
		                   formatter: '{a}：{c}\n({d}%)' //'{b}:{c}({d}%)'其中 {b}为数据名称，{c}数据数值，{d}为数据所占百分比
		                }, 
		                labelLine :{show:true}
		            } 
		        }
	        }
	    ] 
	};
	
	teach_option4 = {
	    title : {
	        text: '课时记录年级占比统计图',
	        subtext: '',
	        x:'center',
	        textStyle:{
	        	 fontSize: 12
	        }
	    },
	    tooltip : {
	        trigger: 'item',
	        formatter: "{a} <br/>{b} : {c} ({d}%)"
	    },
	    legend: {
	        orient : 'horizontal',
	        x : 'center',
	        y : 'bottom',
	        itemWidth:20,
	        itemHeight:12,
	        data:['高一','高二','高三']
	    },
	    toolbox: {
	        show : true,
	        orient : 'vertical',
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
	    series : [
	        {
	            name:'课时次',
	            type:'pie',
	            radius : '40%',
	            center: ['50%', '45%'],
	            data:[
	                {value:50, name:'高一'},
	                {value:60, name:'高二'},
	                {value:50, name:'高三'},
	            ],
			    itemStyle:{ 
		            normal:{ 
		                label:{ 
		                   show: true,
		                   //position:'inner', //显示位置
		                   formatter: '{a}：{c}\n({d}%)' //'{b}:{c}({d}%)'其中 {b}为数据名称，{c}数据数值，\n为换行,{d}为数据所占百分比
		                }, 
		                labelLine :{show:true} //数据引导线是否显示
		            } 
		        }
	        }
	    ] 
	};                    
                    
	teach_option5 = {
		title : {
	        text: '教师课时记录统计图',
	        subtext: '课时次前10老师',
	        x:'center',
	        textStyle:{
	        	 fontSize: 12
	        }
	    },
	    grid: Grids,
	    tooltip : {
	        trigger: 'axis',
	    },
	    legend: {
	        orient : 'vertical',//horizontal vertical
	        y: 'top',
	        x:'left',
	        itemWidth:20,
	        itemHeight:12,
	        data : ['课时次']
	    },
	    toolbox: {
	        show : true,
	        orient : 'vertical',
	        x:'right',
	        y:'top',
	        feature : {
	            mark : {show: true},
	            dataView : {show: true, readOnly: false},
	            magicType : {show: true, type: ['line', 'bar']},
	            restore : {show: true},
	            saveAsImage : {show: true}
	        }
	    },
	    calculable : true,
	    xAxis : [
	        {
	        	axisLabel: {
		            rotate: 45, //x文字轴旋转角度
		            margin:5,
		            interval:0  //x轴文字：全部显示0
		        },
		        boundaryGap: true,
		        axisTick: {length:5},
	            type : 'category',
	            data : ['教师1','教师2','教师3','教师4','教师5','教师6','教师7','教师8','教师9','教师10']
	        }
	    ],
	    yAxis : [
	        {
	            type : 'value'
	        }
	    ],
	    series : [
	        {
	            name:'课时次',
	            barWidth:8,
	            type:'bar',
	            data:[66,55,54,50,45,42,40,38,35,30],
	            barGap:"50%",//x轴上每个栏目之间的柱间距
	            itemStyle : { normal: {label : {show: true, position: 'top'}}}
//	            markLine : {
//	                data : [
//	                    {type : 'average', name: '平均值'}
//	                ]
//	            }
	        }
	    ]
	};
	
	teach_option6 = {
		title : {
	        text: '资源类型占比统计图',
	        subtext: '',
	        x:'center',
	        textStyle:{
	        	 fontSize: 12
	        }
	    },
	    tooltip : {
	        trigger: 'item',
	        formatter: "{a} <br/>{b} : {c} ({d}%)"
	    },
	    legend: {
	        orient : 'horizontal',
	        x : 'center',
	        y : 'bottom',
	        itemWidth:20,
	        itemHeight:12,
	        data:['资源1','资源2','资源3','资源4','资源5']
	    },
	    toolbox: {
	        show : true,
	        orient : 'vertical',
	        x:'right',
	        y:'top',
	        feature : {
	            mark : {show: true},
	            dataView : {show: true, readOnly: false},
	            magicType : {
	                show: true, 
	                type: ['pie'],
	                option: {
	                    funnel: {
	                        x: '25%',
	                        width: '50%',
	                        funnelAlign: 'center',
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
	            name:'资源数',
	            type:'pie',
	            radius : ['30%', '50%'],
	            center: ['50%', '45%'],
	            itemStyle : {
	                normal : {
	                    label : {
	                        show : true,
	                        formatter: '{a}：{c}\n({d}%)'
	                    },
	                    labelLine : {
	                        show : true
	                    }
	                },
	                emphasis : {
	                    label : {
	                        show : true,
	                        position : 'center',
	                        textStyle : {
	                            fontSize : '12',
	                            fontWeight : 'bold'
	                        }
	                    }
	                }
	            },
	            data:[
	                {value:22, name:'资源1'},
	                {value:30, name:'资源2'},
	                {value:35, name:'资源3'},
	                {value:25, name:'资源4'},
	                {value:40, name:'资源5'}
	            ]
	        }
	    ]
	};
    
    health_option1 = {
		title : {
	        text: '全校健康状况展示',
	        subtext: '（平均值/h）',
	        x:'center',
	        textStyle:{
	        	 fontSize: 12
	        }
	    },
	    grid: Grids,
	    tooltip : {
	        trigger: 'axis',
	        formatter: "{a} <br/>{b} : {c}h"
	    },
	    legend: {
	        orient : 'horizontal',//horizontal vertical
	        y: 'top',
	        x : 'left',
	        itemWidth:20,
	        itemHeight:12,
	        data:['时长']
	    },
	    toolbox: {
	        show : true,
	        orient : 'vertical',
	        feature : {
	            mark : {show: true},
	            dataView : {show: true, readOnly: false},
	            magicType : {show: true, type: ['line', 'bar']},
	            restore : {show: true},
	            saveAsImage : {show: true}
	        }
	    },
	    calculable : true,
	    xAxis : [
	        {
	        	axisLabel: {
		            rotate: 30, //x文字轴旋转角度
		            margin:5,
		            interval:0  //x轴文字：全部显示0
		        },
		        boundaryGap: true,
		        axisTick: {length:5},
	            type : 'category',
	            data : ['运动时长','睡眠时长','未佩戴眼镜时长']
	        }    
	    ],
	    yAxis : [
	        {
	            type : 'value'
	        }
	    ],
	    series : [
	        {
	            name:'时长',
	            barWidth:8,
	            type:'bar',
	            data:[0.9,8,11],
	            barGap:"50%",//x轴上每个栏目之间的柱间距
	            itemStyle : { normal: {label : {show: true, position: 'top'}}}
	        }
	    ]
	};
    
    health_option2 = {
    	title : {
	        text: '全校各年级健康状况展示',
	        subtext: '（平均值/h）',
	        x:'center',
	        textStyle:{
	        	 fontSize: 10
	        }
	    },
	    grid: Grids,
	    tooltip : {
	        trigger: 'axis',
	        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
	            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
	        }
	    },
	    legend: {
	        y:'bottom',
	    	x:'center',
	        data:['运动时间','睡眠时间','未戴眼镜时间']
	    },
	    toolbox: {
	        show : true,
	        orient: 'vertical',
	        x: 'right',
	        y: 'top',
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
	        	axisLabel: {
		            rotate: 30, //x文字轴旋转角度
		            margin:0,
		            interval:0,  //x轴文字：全部显示0
		            textStyle:{
		               fontSize:8,
		               color:'#111'
		            }
		        },
		        boundaryGap: [1, 1],            // 坐标轴两端空白策略，数组内数值代表百分比
	            splitNumber: 7,                      // 数值轴用，分割段数，默认为5
	            type : 'category',
	            data : ['全校','一年级','二年级','三年级','四年级','五年级','六年级']
	        }
	    ],
	    yAxis : [
	        {
	            type : 'value'
	        }
	    ],
	    series : [
	        {
	            name:'运动时间',
	            type:'line',
	            barWidth:8,
	            itemStyle : { normal: {label : {show: true, position: 'top'}}},
	            data:[2, 2.1, 2.5, 1.5, 1, 1.1, 1.2]
	        },
	        {
	            name:'睡眠时间',
	            type:'line',
	            barWidth:8,
	            itemStyle : { normal: {label : {show: true, position: 'top'}}},
	            data:[8, 7, 6.5, 6.8, 7, 8.5, 7]
	        },
	        {
	            name:'未戴眼镜时间',
	            type:'line',
	            barWidth:8,
	            itemStyle : { normal: {label : {show: true, position: 'top'}}},
	            data:[12,13,11,13.1,14.2,10.6,12.5]
	        }
	    ]
	};
                    
    air_option1={
		title : {
	        text: '全校各时间段空气状况展示',
	        subtext: '单位：μg/m³、mg/m3、mL',
	        x:'center',
	        textStyle:{
	        	 fontSize: 12
	        }
	    },
	    grid: Grids,
	    tooltip : {
	        trigger: 'axis',
	        formatter: "{a} <br/>{b} : {c}"
	    },
	    legend: {
	        orient : 'horizontal',//horizontal vertical
	        y: 'top',
	        x : 'left',
	        itemWidth:20,
	        itemHeight:12,
	        data:['空气品质']
	    },
	    toolbox: {
	        show : true,
	        orient : 'vertical',
	        feature : {
	            mark : {show: true},
	            dataView : {show: true, readOnly: false},
	            magicType : {show: true, type: ['line', 'bar']},
	            restore : {show: true},
	            saveAsImage : {show: true}
	        }
	    },
	    calculable : true,
	    xAxis : [
	        {
	        	axisLabel: {
		            //rotate: 30, //x文字轴旋转角度
		            margin:5,
		            interval:0  //x轴文字：全部显示0
		        },
		        boundaryGap: true,
		        axisTick: {length:5},
	            type : 'category',
	            data : ['PM2.5','VOC','CO₂']
	        }    
	    ],
	    yAxis : [
	        {
	            type : 'value'
	        }
	    ],
	    series : [
	        {
	            name:'空气品质',
	            barWidth:8,
	            type:'bar',
	            data:[0.9,0.6,0.7],
	            barGap:"50%",//x轴上每个栏目之间的柱间距
	            itemStyle : { normal: {label : {show: true, position: 'top'}}}
	        }
	    ]
	};
    
    security_option1={
		title : {
	        text: '全校各类别安防发生占比统计图',
	        subtext: '',
	        x:'center',
	        textStyle:{
	        	 fontSize: 12
	        }
	   },
	    tooltip : {
	        trigger: 'item',
	        formatter: "{a} <br/>{b} : {c} ({d}%)"
	    },
	    legend: {
	        orient : 'horizontal',
	        x : 'center',
	        y : 'bottom',
	        itemWidth:20,
	        itemHeight:12,
	        data:['security1','security2','security3','security4','security5']
	    },
	    toolbox: {
	        show : true,
	        orient : 'vertical',
	        x:'right',
	        y:'top',
	        feature : {
	            mark : {show: true},
	            dataView : {show: true, readOnly: false},
	            magicType : {
	                show: true, 
	                type: ['pie'],
	                option: {
	                    funnel: {
	                        x: '25%',
	                        width: '50%',
	                        funnelAlign: 'center',
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
	            name:'发生次数',
	            type:'pie',
	            radius : ['30%', '50%'],
	            center: ['50%', '45%'],
	            itemStyle : {
	                normal : {
	                    label : {
	                        show : true,
	                        formatter: '{a}：{c}\n({d}%)'
	                    },
	                    labelLine : {
	                        show : true
	                    }
	                },
	                emphasis : {
	                    label : {
	                        show : true,
	                        position : 'center',
	                        textStyle : {
	                            fontSize : '12',
	                            fontWeight : 'bold'
	                        }
	                    }
	                }
	            },
	            data:[
	                {value:2, name:'security1'},
	                {value:3, name:'security2'},
	                {value:0, name:'security3'},
	                {value:5, name:'security4'},
	                {value:4, name:'security5'}
	            ]
	        }
	    ]
	};
    
	// 为echarts对象加载数据 
	//myChartOne.showLoading();
	teach_myChartOne.setOption(teach_option1);
    teach_myChartTwo.setOption(teach_option2);
    teach_myChartThree.setOption(teach_option3);
    teach_myChartFour.setOption(teach_option4);
    teach_myChartFive.setOption(teach_option5);
    teach_myChartSix.setOption(teach_option6);
    
    health_myChartOne.setOption(health_option1);
    health_myChartTwo.setOption(health_option2);
    
    airQuality_myChartOne.setOption(air_option1);
    
    security_myChartOne.setOption(security_option1);
    
    //屏幕宽度发生变化时从新加载图表
	window.addEventListener("resize",function(){
        teach_myChartOne.resize();
		teach_myChartTwo.resize();
		teach_myChartThree.resize();
		teach_myChartFour.resize();
		teach_myChartFive.resize();
		teach_myChartSix.resize();
		
		health_myChartOne.resize();
		health_myChartTwo.resize();
		
		airQuality_myChartOne.resize();
		security_myChartOne.resize();
    });
    
    
