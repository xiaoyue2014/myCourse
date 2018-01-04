   //点击此处查看表格数据
   $(".changes_nav_one").each(function(){
   	 var clickNums=0;
   	 $(this).click(function(){
   	 	if(clickNums%2==0){
   	 		$(this).parents('.echarts').find('.echartsList').hide();
   	 		$(this).parents('.echarts').find('table').show();
   	 	}else{
   	 		$(this).parents('.echarts').find('.echartsList').show();
   	 		$(this).parents('.echarts').find('table').hide();
   	 	}
   	    console.log(clickNums)
   	 	clickNums++;
   	 	return false;
   	 })
   })
   
   //每个阶段选项的代码变化
   $(".changes_nav_two").each(function(){
   	  $(this).find('span').eq(0).addClass('spactive');
   	  $(this).find('span').each(function(){
   	  	 $(this).click(function(){
   	  	 	$(this).addClass('spactive').siblings().removeClass('spactive');
   	  	 })
   	  })
   });
   
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
   
   option1 = {
	    title : {
	        text: '课时数年级比例图',
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
	        orient : 'vertical',
	        left : '0',
	        itemWidth:14,
	        itemHeight:8,
	        data:['高一','高二','高三']
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
	                orient : 'horizontal',
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
	            radius : '40%',
	            center: ['50%', '60%'],
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
		                   formatter: '课时次：{c}\n({d}%)' //'{b}:{c}({d}%)'其中 {b}为数据名称，{c}数据数值，\n为换行,{d}为数据所占百分比
		                }, 
		                labelLine :{show:true} //数据引导线是否显示
		            } 
		        }
	        }
	    ] 
	};
	
	
	option2 = {
	    title : {
	        text: '课时数科目比例图',
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
	        orient : 'vertical',
	        left : '0',
	        itemWidth:14,
	        itemHeight:8,
	        data:['语文','数学','英语','历史','生物','地理','化学']
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
	                orient : 'horizontal',
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
	            radius : '40%',
	            center: ['50%', '60%'],
	            data:[
	                {value:50, name:'语文'},
	                {value:60, name:'数学'},
	                {value:50, name:'英语'},
	                {value:55, name:'历史'},
	                {value:66, name:'生物'},
	                {value:77, name:'地理'},
	                {value:88, name:'化学'}
	            ],
			    itemStyle:{ 
		            normal:{ 
		                label:{ 
		                   show: true,
		                   //position:'inner', //显示位置
		                   formatter: '{d}%' //'{b}:{c}({d}%)'其中 {b}为数据名称，{c}数据数值，{d}为数据所占百分比
		                }, 
		                labelLine :{show:true}
		            } 
		        }
	        }
	    ] 
	};
	
	option3 = {
		title : {
	        text: '教学活动次数学生次与学科',
	        subtext: '',
	        x:'center',
	        textStyle:{
	        	 fontSize: 12
	        }
	    },
	    grid:[ //此处确定图大小以及所占位置
                {x:'13%',y:'20%',width:'80%',height:'70%'},
                {x2:'7%',y:'0%',width:'80%',height:'70%'}
        ],
	    tooltip : {
	        trigger: 'axis'
	    },
	    legend: {
	        orient : 'horizontal',//horizontal vertical
	        top: '10%',
	        left : '0',
	        itemWidth:14,
	        itemHeight:8,
	        data:['教学活动次数','学生次']
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
	            data : ['语文','数学','英语','历史','生物','地理','化学']
	        }
	    ],
	    yAxis : [
	        {
	            type : 'value'
	        }
	    ],
	    series : [
	        {
	            name:'教学活动次数',
	            barWidth:8,
	            type:'bar',
	            data:[55, 49, 70, 232, 256, 67, 136],
	            barGap:"50%",//x轴上每个栏目之间的柱间距
	            itemStyle : { normal: {label : {show: true, position: 'top'}}}
//	            markLine : {
//	                data : [
//	                    {type : 'average', name: '平均值'}
//	                ]
//	            }
	        },
	        {
	            name:'学生次',
	            type:'bar',
	            barWidth:8,
	            data:[26, 59, 90, 264, 287, 207, 116],
	            barGap:"50%",
	            itemStyle : { normal: {label : {show: true, position: 'top'}}}
//	            markLine : {
//	                data : [
//	                    {type : 'average', name : '平均值'}
//	                ]
//	            }
	        }
	    ]
	};
                    
	                    
                    
	
	// 为echarts对象加载数据 
	//myChartOne.showLoading();
	myChartOne.setOption(option1);
    myChartTwo.setOption(option2);
    myChartThree.setOption(option3);
    myChartFour.setOption(option1);
    myChartFive.setOption(option1);
    
    //屏幕宽度发生变化时从新加载图表
	window.addEventListener("resize",function(){
        myChartOne.resize();
		myChartTwo.resize();
		myChartThree.resize();
		myChartFour.resize();
		myChartFive.resize();
    });
    
    
