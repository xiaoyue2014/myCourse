var echarts_one=document.getElementById('echarts_one');
var myChartOne=echarts.init(echarts_one);
var option1 = {
	title : {
        text: '教学活动次、课时次、学生次/学校比例图',
        subtext: '单位/次',
        x:'center',
        textStyle:{
        	 fontSize: 12
        }
    },
    grid:[ //此处确定图大小以及所占位置
            {x:'13%',y:'28%',width:'80%',height:'50%'},
            {x2:'7%',y2:'20%',width:'80%',height:'50%'}
    ],
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        orient : 'horizontal',//horizontal vertical
        top: '13%',
        left : '0',
        itemWidth:14,
        itemHeight:8,
        data:['教学活动次数','教学活动学生次','课时次','课时学生次']
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
	            interval:0,  //x轴文字：全部显示0
	            textStyle:{
	               fontSize:8,
	               color:'#111'
	            }
	        },
	        boundaryGap: true,
	        axisTick: {length:5},
            type : 'category',
            data : ['昆山市葛江中学1','昆山市葛江中学2','昆山市葛江中学3','昆山市葛江中学4','昆山市葛江中学5','昆山市葛江中学6','昆山市葛江中学7','昆山市葛江中学8','昆山市葛江中学9','昆山市葛江中学10']
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
            barWidth:3,
            type:'bar',
            data:[55, 49, 70, 232, 256, 67, 136,56,100,120],
            barGap:"50%",//x轴上每个栏目之间的柱间距
            //itemStyle : { normal: {label : {show: true, position: 'top'}}}
//	            markLine : {
//	                data : [
//	                    {type : 'average', name: '平均值'}
//	                ]
//	            }
        },
        {
            name:'教学活动学生次',
            type:'bar',
            barWidth:3,
            data:[26, 59, 90, 264, 287, 207, 116,200,400,300],
            barGap:"50%",
            //itemStyle : { normal: {label : {show: true, position: 'top'}}}
//	            markLine : {
//	                data : [
//	                    {type : 'average', name : '平均值'}
//	                ]
//	            }
        },
        {
            name:'课时次',
            type:'bar',
            barWidth:3,
            data:[26, 90, 20, 16,50,44,32,22,66,99],
            barGap:"50%",
            //itemStyle : { normal: {label : {show: true, position: 'top'}}}
//	            markLine : {
//	                data : [
//	                    {type : 'average', name : '平均值'}
//	                ]
//	            }
        },
        {
            name:'课时学生次',
            type:'bar',
            barWidth:3,
            data:[206, 159, 190, 288, 27, 207, 106,100,201,150],
            barGap:"50%",
            //itemStyle : { normal: {label : {show: true, position: 'top'}}}
//	            markLine : {
//	                data : [
//	                    {type : 'average', name : '平均值'}
//	                ]
//	            }
        }
    ]
};
myChartOne.setOption(option1);


var echarts_one=document.getElementById('echarts_two');
var myChartTwo=echarts.init(echarts_two);
var option2 = {
	title : {
        text: '资源数、学科数/学校比例图',
        subtext: '',
        x:'center',
        textStyle:{
        	 fontSize: 10
        }
    },
    grid:[ //此处确定图大小以及所占位置
            {x:'13%',y:'25%',width:'80%',height:'50%'},
            {x2:'7%',y2:'20%',width:'80%',height:'50%'}
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
        data:['资源数','学科数']
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
	            interval:0,  //x轴文字：全部显示0
	            textStyle:{
	               fontSize:8,
	               color:'#111'
	            }
	        },
	        boundaryGap: true,
	        axisTick: {length:5},
            type : 'category',
            data : ['昆山市葛江中学1','昆山市葛江中学2','昆山市葛江中学3','昆山市葛江中学4','昆山市葛江中学5','昆山市葛江中学6','昆山市葛江中学7','昆山市葛江中学8','昆山市葛江中学9','昆山市葛江中学10']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'资源数',
            barWidth:6,
            type:'bar',
            data:[55, 49, 70, 32, 56, 67, 88,56,77,66],
            barGap:"50%",//x轴上每个栏目之间的柱间距
            itemStyle : { normal: {label : {show: true, position: 'top',orient : 'vertical' }}}
//	            markLine : {
//	                data : [
//	                    {type : 'average', name: '平均值'}
//	                ]
//	            }
        },
        {
            name:'学科数',
            type:'bar',
            barWidth:6,
            data:[8, 9, 12, 11, 10, 8, 9,12,13,7],
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
myChartTwo.setOption(option2);

var echarts_one=document.getElementById('echarts_three');
var myChartThree=echarts.init(echarts_three);
var option3 = {
	title : {
        text: '测验次学生次/学校条形图',
        subtext: '',
        x:'left',
        textStyle:{
        	 fontSize: 10
        }
    },
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
    	top:'8%',
    	left:'0',
        data:['测验次', '学生次']
    },
    grid:[ //此处确定图大小以及所占位置
            {x:'27%',y:'20%',width:'70%',height:'70%'},
            {x2:'3%',y2:'5%',width:'70%',height:'70%'}
    ],
    toolbox: {
        show : true,
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
            type : 'value'
        }
    ],
    yAxis : [
        {
            type : 'category',
            axisTick : {show: false},
            data : ['昆山市葛江中学1','昆山市葛江中学2','昆山市葛江中学3','昆山市葛江中学4','昆山市葛江中学5','昆山市葛江中学6','昆山市葛江中学7','昆山市葛江中学8','昆山市葛江中学9','昆山市葛江中学10']
        }
    ],
    series : [
        {
            name:'测验次',
            type:'bar',
            itemStyle : { normal: {label : {show: true, position: 'right'}}},
            data:[20, 55, 44, 66, 77, 88, 33,45,66,54]
        },
        {
            name:'学生次',
            type:'bar',
            itemStyle : { normal: {label : {show: true, position: 'right'}}},
            data:[120, 132, 101, 134, 190, 230, 210,300,200,250]
        }
    ]
};
myChartThree.setOption(option3);

var echarts_four=document.getElementById('echarts_four');
var myChartFour=echarts.init(echarts_four);
var option4 = {
	title : {
        text: '教师登录学生登录与学校折线图',
        subtext: '',
        x:'center',
        textStyle:{
        	 fontSize: 10
        }
    },
    grid:[ //此处确定图大小以及所占位置
            {x:'18%',y:'25%',width:'77%',height:'50%'},
            {x2:'5%',y2:'20%',width:'77%',height:'50%'}
    ],
    tooltip : {
        trigger: 'axis'
    },
    legend: {
    	top:'10%',
        data:['教师登录次','学生登录次']
    },
    toolbox: {
        show : true,
        orient : 'vertical',
        left:'0',
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
	            margin:5,
	            interval:0,  //x轴文字：全部显示0
	            textStyle:{
	               fontSize:8,
	               color:'#111'
	            }
	        },
	        boundaryGap: true,
	        axisTick: {length:5},
            type : 'category',
            boundaryGap : false,
            data : ['昆山市葛江中学1','昆山市葛江中学2','昆山市葛江中学3','昆山市葛江中学4','昆山市葛江中学5','昆山市葛江中学6','昆山市葛江中学7','昆山市葛江中学8','昆山市葛江中学9','昆山市葛江中学10']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'教师登录次',
            type:'line',
            stack: '总量',
            itemStyle : { normal: {label : {show: true, position: 'top'}}},
            data:[120, 132, 101, 134, 90, 230, 210,100,200,300]
        },
        {
            name:'学生登录次',
            type:'line',
            stack: '总量',
            itemStyle : { normal: {label : {show: true, position: 'top'}}},
            data:[220, 182, 191, 234, 290, 330, 310,250,150,350]
        }
    ]
};
myChartFour.setOption(option4);
// 为echarts对象加载数据 
//myChartOne.showLoading();

var echarts_five=document.getElementById('echarts_five');
var myChartFive=echarts.init(echarts_five);
var option5 = {
    title : {
        text: '随堂测验与科目比例图',
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
            name:'测验次',
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
	                   formatter: '{a}：{c}\n({d}%)' //'{b}:{c}({d}%)'其中 {b}为数据名称，{c}数据数值，{d}为数据所占百分比
	                }, 
	                labelLine :{show:true}
	            } 
	        }
        }
    ] 
};                  
myChartFive.setOption(option5);                   

var echarts_six=document.getElementById('echarts_six');
var myChartSix=echarts.init(echarts_six);
var option6 = {
	title : {
        text: '各学校学生相关状况折线图',
        subtext: '按睡眠时间排名(单位：/h)',
        x:'center',
        textStyle:{
        	 fontSize: 10
        }
    },
    grid:[ //此处确定图大小以及所占位置
            {x:'18%',y:'25%',width:'80%',height:'50%'},
            {x2:'2%',y2:'20%',width:'80%',height:'50%'}
    ],
    tooltip : {
        trigger: 'axis',
        
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
    	top:'14%',
    	left:'0%',
        data:['运动时间','睡眠时间','未戴眼镜时间']
    },
    toolbox: {
        show : true,
        orient: 'vertical',
        x: 'left',
        y: 'center',
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
	            margin:5,
	            interval:0,  //x轴文字：全部显示0
	            textStyle:{
	               fontSize:8,
	               color:'#111'
	            }
	        },
	        boundaryGap: [1, 1],            // 坐标轴两端空白策略，数组内数值代表百分比
            splitNumber: 10,                      // 数值轴用，分割段数，默认为5
            type : 'category',
            data : ['昆山市葛江中学1','昆山市葛江中学2','昆山市葛江中学3','昆山市葛江中学4','昆山市葛江中学5','昆山市葛江中学6','昆山市葛江中学7','昆山市葛江中学8','昆山市葛江中学9','昆山市葛江中学10']
        }
    ],
    yAxis : [
        {
            type : 'value',
            //name:'单位：/h',
            splitNumber: 4                      // 数值轴用，分割段数，默认为5
        }
    ],
    series : [
        {
            name:'运动时间',
            type:'bar',
            barWidth:8,
            itemStyle : { normal: {label : {show: true, position: 'top'}}},
            data:[2, 2.1, 2.5, 1.5, 1, 1.1, 1.2,1.4,1.6,0.8]
        },
        {
            name:'睡眠时间',
            type:'bar',
            barWidth:8,
            itemStyle : { normal: {label : {show: true, position: 'top'}}},
            data:[8, 7, 6.5, 6.8, 7, 8.5, 7,6.9,7.1,7.8]
        },
        {
            name:'未戴眼镜时间',
            type:'bar',
            barWidth:8,
            itemStyle : { normal: {label : {show: true, position: 'top'}}},
            data:[12,13,11,13.1,14.2,10.6,12.5,12.8,11.5,13.6]
        }
    ]
};
myChartSix.setOption(option6);

var echarts_seven=document.getElementById('echarts_seven');
var myChartSeven=echarts.init(echarts_seven);
var option7 = {
	title : {
        text: '学科评测平均分/学校比例图',
        subtext: '',
        x:'center',
        textStyle:{
        	 fontSize: 10
        }
    },
    grid:[ //此处确定图大小以及所占位置
            {x:'18%',y:'25%',width:'77%',height:'50%'},
            {x2:'5%',y2:'20%',width:'77%',height:'50%'}
    ],
    tooltip : {
        trigger: 'axis'
    },
    legend: {
    	left:'6%',
    	top:'10%',
        data:['语文','数学','英语','历史','生物','地理','化学'],
        selected:{
            '语文':true,
            '数学':true,
            '英语':true,
            '历史':false,
            '生物':false,
            '地理':false,
            '化学':false
        }
    },
    toolbox: {
        show : true,
        orient : 'vertical',
        left:'0',
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
	            margin:5,
	            interval:0,  //x轴文字：全部显示0
	            textStyle:{
	               fontSize:8,
	               color:'#111'
	            }
	        },
	        boundaryGap: true,
	        axisTick: {length:5},
            type : 'category',
            boundaryGap : false,
            data : ['昆山市葛江中学1','昆山市葛江中学2','昆山市葛江中学3','昆山市葛江中学4','昆山市葛江中学5','昆山市葛江中学6','昆山市葛江中学7','昆山市葛江中学8','昆山市葛江中学9','昆山市葛江中学10']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'语文',
            type:'line',
            stack: '总量',
            itemStyle : { normal: {label : {show: true, position: 'top'}}},
            data:[120, 132, 101, 134, 90, 230, 210,100,200,300]
        },
        {
            name:'数学',
            type:'line',
            stack: '总量',
            itemStyle : { normal: {label : {show: true, position: 'top'}}},
            data:[220, 182, 191, 234, 290, 330, 310,250,150,350]
        },
        {
            name:'英语',
            type:'line',
            stack: '总量',
            itemStyle : { normal: {label : {show: true, position: 'top'}}},
            data:[120, 132, 101, 134, 90, 230, 210,100,200,300]
        },
        {
            name:'历史',
            type:'line',
            stack: '总量',
            itemStyle : { normal: {label : {show: true, position: 'top'}}},
            data:[220, 182, 191, 234, 290, 330, 310,250,150,350]
        },
        {
            name:'生物',
            type:'line',
            stack: '总量',
            itemStyle : { normal: {label : {show: true, position: 'top'}}},
            data:[120, 132, 101, 134, 90, 230, 210,100,200,300]
        },
        {
            name:'地理',
            type:'line',
            stack: '总量',
            itemStyle : { normal: {label : {show: true, position: 'top'}}},
            data:[220, 182, 191, 234, 290, 330, 310,250,150,350]
        },
        {
            name:'化学',
            type:'line',
            stack: '总量',
            itemStyle : { normal: {label : {show: true, position: 'top'}}},
            data:[120, 132, 101, 134, 90, 230, 210,100,200,300]
        }
    ]
};
myChartSeven.setOption(option7);
//屏幕宽度发生变化时从新加载图表
window.addEventListener("resize",function(){
    myChartOne.resize();
	myChartTwo.resize();
	myChartThree.resize();
	myChartFour.resize();
	myChartFive.resize();
	myChartSix.resize();
	myChartSeven.resize();
});