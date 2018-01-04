   //每个li中时间改变和点击查看的点击函数
   //clickChange();
   
   
    
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
   
    option1 = {
	    title : {
	        text: '课时数与年级比例图',
	        subtext: '学生次点击"查看按钮"',
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
	            name:'课时次',
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
		                   formatter: '{a}：{c}\n({d}%)' //'{b}:{c}({d}%)'其中 {b}为数据名称，{c}数据数值，\n为换行,{d}为数据所占百分比
		                }, 
		                labelLine :{show:true} //数据引导线是否显示
		            } 
		        }
	        }
	    ] 
	};
	
	
	option2 = {
		title : {
	        text: '课时次学生次与班级柱形图',
	        subtext: '课时次前10班级',
	        x:'center',
	        textStyle:{
	        	 fontSize: 12
	        }
	    },
	    grid:[ //此处确定图大小以及所占位置
                {x:'13%',y:'20%',width:'80%',height:'60%'},
                {x2:'7%',y:'0%',width:'80%',height:'60%'}
        ],
	    tooltip : {
	        trigger: 'axis'
	    },
	    legend: {
	        orient : 'horizontal',//horizontal vertical
	        top: '12%',
	        left : '0',
	        itemWidth:14,
	        itemHeight:8,
	        data:['课时次','学生次']
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
		            rotate: 45, //x文字轴旋转角度
		            margin:5,
		            interval:0  //x轴文字：全部显示0
		        },
		        boundaryGap: true,
		        axisTick: {length:5},
	            type : 'category',
	            data : ['高一（1）班','高二（3）班','高一（4）班','高三（5）班','高二（2）班','高三（1）班','高三（3）班','高一（3）班','高三（6）班','高二（5）班']
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
	            data:[35,49,90,23,95,67,36,80,60,50],
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
	            data:[200,359,190,264,287,207,586,210,350,160],
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
	
	option3 = {
	    title : {
	        text: '教学活动数与年级比例图',
	        subtext: '学生次点击"查看按钮"',
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
	            name:'课时次',
	            type:'pie',
	            radius : '40%',
	            center: ['50%', '60%'],
	            data:[
	                {value:60, name:'高一'},
	                {value:80, name:'高二'},
	                {value:30, name:'高三'},
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
	
	option4 = {
		title : {
	        text: '教学活动次数学生次与班级柱形图',
	        subtext: '教学活动数前10班级',
	        x:'center',
	        textStyle:{
	        	 fontSize: 12
	        }
	    },
	    grid:[ //此处确定图大小以及所占位置
                {x:'13%',y:'20%',width:'80%',height:'60%'},
                {x2:'7%',y:'0%',width:'80%',height:'60%'}
        ],
	    tooltip : {
	        trigger: 'axis'
	    },
	    legend: {
	        orient : 'horizontal',//horizontal vertical
	        top: '12%',
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
		            rotate: 45, //x文字轴旋转角度
		            margin:5,
		            interval:0  //x轴文字：全部显示0
		        },
		        boundaryGap: true,
		        axisTick: {length:5},
	            type : 'category',
	            data : ['高一（1）班','高二（3）班','高一（4）班','高三（5）班','高二（2）班','高三（1）班','高三（3）班','高一（3）班','高三（6）班','高二（5）班']
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
	            data:[55,49,70,23,25,67,36,80,60,50],
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
	            data:[200,159,190,264,287,207,186,210,150,160],
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
	
	
	option5 = {
		title : {
	        text: '学生日常各项指标（平均值/h）',
	        subtext: '',
	        x:'center',
	        textStyle:{
	        	 fontSize: 12
	        }
	    },
	    grid:[ //此处确定图大小以及所占位置
                {x:'13%',y:'20%',width:'80%',height:'60%'},
                {x2:'7%',y:'0%',width:'80%',height:'60%'}
        ],
	    tooltip : {
	        trigger: 'axis'
	    },
	    legend: {
	        orient : 'horizontal',//horizontal vertical
	        top: '12%',
	        left : '0',
	        itemWidth:14,
	        itemHeight:8,
	        data:['高一','高二','高三','全校']
	    },
	    toolbox: {
	        show : true,
	        orient : 'vertical',
	        feature : {
	            mark : {show: true},
	            dataView : {show: true, readOnly: false},
	            magicType : {show: true, type: ['bar', 'line']},
	            restore : {show: true},
	            saveAsImage : {show: true}
	        }
	    },
	    calculable : true,
	    xAxis : [
	        {
	        	axisLabel: {
		            rotate: 0, //x文字轴旋转角度
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
	            name:'高一',
	            barWidth:8,
	            type:'line',
	            data:[1.5,7.5,8],
	            barGap:"50%",//x轴上每个栏目之间的柱间距
	            itemStyle : { normal: {label : {show: true, position: 'top'}}}
//	            markLine : {
//	                data : [
//	                    {type : 'average', name: '平均值'}
//	                ]
//	            }
	        },
	        {
	            name:'高二',
	            type:'line',
	            barWidth:8,
	            data:[1.2,7,7.5],
	            barGap:"50%",
	            itemStyle : { normal: {label : {show: true, position: 'top'}}}
//	            markLine : {
//	                data : [
//	                    {type : 'average', name : '平均值'}
//	                ]
//	            }
	        },
	        {
	            name:'高三',
	            type:'line',
	            barWidth:8,
	            data:[1,6,7],
	            barGap:"50%",
	            itemStyle : { normal: {label : {show: true, position: 'top'}}}
//	            markLine : {
//	                data : [
//	                    {type : 'average', name : '平均值'}
//	                ]
//	            }
	        },
	        {
	            name:'全校',
	            type:'line',
	            barWidth:8,
	            data:[1.3,7.2,7.3],
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
    myChartFour.setOption(option4);
    myChartFive.setOption(option5);
    
    
    //屏幕宽度发生变化时从新加载图表
	window.addEventListener("resize",function(){
        myChartOne.resize();
		myChartTwo.resize();
		myChartThree.resize();
		myChartFour.resize();
		myChartFive.resize();
    });
    

    
    //设置无数据图表模板option
    //学生日常状况图表模板设置
	option6=option7 = {
		title : {
	        text: '',
	        subtext: '',
	        x:'center',
	        textStyle:{
	        	 fontSize: 12
	        }
	    },
	    grid:[ //此处确定图大小以及所占位置
	            {x:'13%',y:'20%',width:'80%',height:'60%'},
	            {x2:'7%',y:'0%',width:'80%',height:'60%'}
	    ],
	    tooltip : {
	        trigger: 'axis'
	    },
	    legend: {
	        orient : 'horizontal',//horizontal vertical
	        top: '12%',
	        left : '0',
	        itemWidth:14,
	        itemHeight:8,
	        data:[] //'运动时长','睡眠时长','未带眼镜时长'
	    },
	    toolbox: {
	        show : true,
	        orient : 'vertical',
	        feature : {
	            mark : {show: true},
	            dataView : {show: true, readOnly: false},
	            magicType : {show: true, type: ['bar', 'line']},
	            restore : {show: true},
	            saveAsImage : {show: true}
	        }
	    },
	    calculable : false,
	    animation: false,
	    xAxis : [
	        {
	        	axisLabel: {
		            rotate: 0, //x文字轴旋转角度
		            margin:5,
		            interval:0  //x轴文字：全部显示0
		        },
		        boundaryGap: true,
		        axisTick: {length:5},
	            type : 'category',
	            data : [] //'一年级','二年级','三年级','四年级','五年级','六年级','全校'
	        }
	    ],
	    yAxis : [
	        {
	            type : 'value'
	        }
	    ],
	    series : []
	};
	var Item6=Item7 = function(){
		return {
            name:'',
            barWidth:8,
            type:'bar',
            barGap:"50%",//x轴上每个栏目之间的柱间距
            itemStyle : { normal: {label : {show: true, position: 'top'}}},
            data:[]
        }
	};
	//准确获取要生成的图表所要放进的包裹层
	var echartsLiSix=$(".echarts_list_contont").eq(1).find('.sortable .echarts').eq(1);
	var echartsLiSeven=$(".echarts_list_contont").eq(1).find('.sortable .echarts').eq(2);
	
	function EchartsAjax(Url,Option,echarts_Li){
		//生成元素并放入相应li中
		//console.log(creactEle.echartsList('echarts_six'))
		echartsLi.empty();//插入元素前清空
		echartsLi.append(creactEle.changeNav('changes_nav_two_six'));
		echartsLi.append(creactEle.echartsList('echarts_six'));
		
		
		//点击不同的时期按钮展现不一样数据的图表
	    var TimeChangeSpan = $("#changes_nav_two_six span");
	    //给每一个点击按钮设置不一样的属性
	    for (var i=0;i<TimeChangeSpan.length;i++) {
	    	var dataUrl="js/datas.json?id="+i;
	    	TimeChangeSpan.eq(i).attr("data-url",dataUrl);	
	    }
	    //点击切换变化数据
	    TimeChangeSpan.each(function(){
	    	$(this).on('click',function(e){
	    		e.stopPropagation();
	    		$(this).addClass('spactive').html('aa').siblings().removeClass('spactive');
	    		var daurl=$(this).attr("data-url");
	    		//console.log(daurl);
	    		$(this).parents('.echarts').empty();
	    		EchartsAjax('js/Private/datas1.json',Option);
	    	});
	    });
	    
	    
		//获取图表包裹层id
		var echarts_six = document.getElementById('echarts_six');
        var myChartSix = echarts.init(echarts_six);
		//展现空模板
	    myChartSix.setOption(Option);
	    //加载动画
	    myChartSix.showLoading();
	    //动态加载数据
    	$.ajax({
	    	type:"get",
	    	url:Url,
	    	async:true,
	    	dataType:'json',
	    	success:function(datas){
	    		var Item = function(){
	    			return {
			            name:'',
			            barWidth:8,
			            type:'bar',
			            barGap:"50%",//x轴上每个栏目之间的柱间距
			            itemStyle : { normal: {label : {show: true, position: 'top'}}},
			            data:[]
			        }
	    		};
	    		var Shuju = datas.shuju;
	    		var xAxis=datas.xAxis;
	    		//console.log(xAxis);
	    		
	    		//动态创建表格
	    		var Table=$("<table class='table table-condensed table-striped table_item'></table>");
	    		//var Table=$("#echarts_six").parent('.echarts').find('table');
	    		var tr_th=$("<tr><th>类别</th></tr>");
	    		for (var i=0;i<xAxis.length;i++) {
	    			var th=$("<th></th>");
	    			th.html(xAxis[i]);
	    			tr_th.append(th);
	    		}
	    		Table.append(tr_th);
	    		
	            var Legends=[];
	            var Series=[];
	            for (var i=0;i<Shuju.length;i++) {
	            	var Istem=new Item();
	            	Istem.name=Shuju[i].grade;
	            	Legends.push(Shuju[i].grade);
	            	Istem.data.push(Shuju[i].movementTime);
	            	Istem.data.push(Shuju[i].sleepTime);
	            	Istem.data.push(Shuju[i].TimeWithoutGlasses);
	            	Series.push(Istem);
	            	
	            	var tr_td=$("<tr><td>"+Shuju[i].grade+"</td><td>"+Shuju[i].movementTime+"</td><td>"+Shuju[i].sleepTime+"</td><td>"+Shuju[i].TimeWithoutGlasses+"</td></tr>");
	            	Table.append(tr_td);
	            }
	            
	            Table.insertAfter($("#echarts_six"));
	            
	            
	            Option.xAxis[0].data = datas.xAxis; //因为x轴有两条轴要取[0]
	            Option.legend.data=Legends;
	            Option.series=Series;
	            setTimeout(function(){
	            	myChartSix.hideLoading();  //隐藏加载动画
	            	myChartSix.setOption(Option);
	            },1000)
	            
	            //设置随着屏幕大小变化而改变图表
			    window.addEventListener("resize",function(){
					myChartSix.resize();
			    });
	            
	            creactEle.chakanChange();//时间变化及点击查看的变化代码
	            
			    
			    
	    	},
	    	error:function(){
	    		confirm('网络异常请稍后重试!')
	    	}
	    });
    }
	//运行函数加载图表
    //EchartsAjax('js/datas.json',option6,echartsLi);
	
	//Item6,'js/datas.json',option6,echartsLiSix,"#echarts_six","#changeBtnSix",{text:'学生日常各项指标（平均值/h）1',subtext:'111'}
    
    //封装调用示例
	EchartModel.init(
    	Item6,  //图表每个栏目的相关数据
    	'js/datas.json', //数据地址
    	option6,  //图表模板
    	echartsLiSix, //图表外包裹层
    	"#echarts_six", //图表放置包裹层id
    	"#changeBtnSix", //每个图表时间点击外包裹层id
    	{texts:'学生日常各项指标（平均值/h）2',subtext:'222'} //主标题和副标题
    );
    EchartModel.init(Item7,'js/datas.json',option7,echartsLiSeven,"#echarts_seven","#changeBtnSeven",{texts:'学生日常各项指标（平均值/h）2',subtext:'222'});
    

    
    
    

    
    