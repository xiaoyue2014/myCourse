    var app = angular.module('app', ['ui.bootstrap']);
    app.controller('staticsController', function ($scope, $window,$echartsConfig,$filter) {
        /*tabpanel*/
        $scope.tabs = [
          { title: '日', content: '日' },
          { title: '周', content: '周'},
          { title: '月', content: '月' },
          { title: '全部', content: '全部'}
        ];
        var selected=$scope.selected=0;
        $scope.show=function(index){
          $scope.selected=index;
        };
        /*calendar*/
        $scope.date={datStart1:new Date(),datEnd1:new Date()}
        $scope.datStart2 = new Date();
        $scope.datEnd2 = new Date();
        $scope.format = "yyyy-MM-dd";
        $scope.altInputFormats = ['yyyy/M!/d!'];
        $scope.apply=function(){
            $scope.date.datStart1 = $filter('date')($scope.date.datStart1, 'yyyy-MM-dd');
            $scope.date.datEnd1= $filter('date')($scope.date.datEnd1, 'yyyy-MM-dd');
            console.log($scope.date.datStart1+"------"+$scope.date.datEnd1);
        }
        $scope.popup1 = {
            opened: false
        };
        $scope.open1 = function () {
            $scope.popup1.opened = true;
        };
        $scope.popup2 = {
            opened: false
        };
        $scope.open2 = function () {
            $scope.popup2.opened = true;
        };
        $scope.popup3 = {
            opened: false
        };
        $scope.open3 = function () {
            $scope.popup3.opened = true;
        };
        $scope.popup4 = {
            opened: false
        };
        $scope.open4 = function () {
            $scope.popup4.opened = true;
        };
        /*years*/
        var date = new Date(); //实例一个时间对象；
        $scope.y=date.getFullYear();   //获取系统的年；
        $scope.years = ["2010", "2011", "2012","2013", "2014", "2015","2016", "2017", "2018"];
        /*weeks*/
        $scope.weeks = ["1", "2", "3","4","5","6","7"];
        var d1 = new Date();
        var d2 = new Date();
        d2.setMonth(0);
        d2.setDate(1);
        var rq = d1-d2;
        var s1 = Math.ceil(rq/(24*60*60*1000));
        var s2 = Math.ceil(s1/7);
        //alert("今天是本年第"+s1+"天，第"+s2+"周");//周日做为下周的开始计算
        $scope.w=s2;
        /*months*/
        $scope.months = ["1", "2", "3","4","5","6","7","8","9","10","11","12"];
        /*show weeks*/
        $scope.showWeeksTab=false;
        $scope.showCurrentWeek=true;
        $scope.showWeeks=function(){
          $scope.showWeeksTab=true;
        };
        $scope.selectWeek=function(num){
          $scope.showCurrentWeek=false;
          $scope.showWeeksTab=false;
          $scope.weekNum=num;
        };

        //图标模块代码
        var Grids={x: "6%",y: "20%",x2:"6%",y2:"15%"};
        var chartName='课程数量';
        /*数据源1*/
        var xAxisdata1=["一年级","二年级","三年级","四年级","五年级","六年级","七年级","八年级","九年级"];
        var seriesdata1=["5","1","2","3","4","1","6","2","8","1"];
        $scope.option1 = {
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
                    name:'',
                    boundaryGap : true,
                    axisLabel:{
                     //X轴刻度配置
                     interval:0 //0：表示全部显示不间隔；auto:表示自动根据刻度个数和宽度自动设置间隔个数
                    },
                    data : xAxisdata1
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    name:'',
                    nameGap:30  //坐标轴名字里坐标系的距离                   
                }
            ],
            series : [ 
               {
                    name:chartName,
                    symbol:'none',  //去掉点的 
                    smooth:true,  //让曲线变平滑 
                    barWidth:15,
                    barGap:"50%",//x轴上每个栏目之间的柱间距
                    type:'bar',
                    data:seriesdata1
                }
            ]
        };
        /*数据源2*/
        var xAxisdata2=["语文","数学","英语","物理","化学","生物","地理","历史","政治"];
        var seriesdata2=["8","6","5","6","4","5","3","2","1","3"];
        $scope.option2 = {
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
                    name:'',
                    boundaryGap : true,
                    axisLabel:{
                     //X轴刻度配置
                     interval:0 //0：表示全部显示不间隔；auto:表示自动根据刻度个数和宽度自动设置间隔个数
                    },
                    data : xAxisdata2
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    name:'',
                    nameGap:30  //坐标轴名字里坐标系的距离                   
                }
            ],
            series : [ 
               {
                    name:chartName,
                    symbol:'none',  //去掉点的 
                    smooth:true,  //让曲线变平滑 
                    barWidth:15,
                    barGap:"50%",//x轴上每个栏目之间的柱间距
                    type:'bar',
                    data:seriesdata2
                }
            ]
        };
        var Grids3={x: "6%",y: "15%",x2:"6%",y2:"20%"};
        /*数据源3*/
        var xAxisdata3=["一年级","二年级","三年级","四年级","五年级","六年级","七年级","八年级","九年级"];
        var seriesdata3=["8","10","9","6","9","5","3","2","1","3"];
        $scope.option3 = {
            tooltip : {
                trigger: 'axis'
            },
            legend: {
                orient : 'horizontal',//vertical horizontal
                x : 'center',
                y : 'bottom',
                itemWidth:20,
                itemHeight:12,
                data:["语文","数学","英语","物理","化学","生物"]
            },
            grid: Grids3,
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
                    name:'',
                    boundaryGap : true,
                    axisLabel:{
                     //X轴刻度配置
                     interval:0 //0：表示全部显示不间隔；auto:表示自动根据刻度个数和宽度自动设置间隔个数
                    },
                    data : xAxisdata3
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    name:chartName,
                    nameGap:30  //坐标轴名字里坐标系的距离                   
                }
            ],
            series : [ 
               {
                    name:"语文",
                    symbol:'none',  //去掉点的 
                    smooth:true,  //让曲线变平滑 
                    barWidth:13,
                    barGap:"50%",//x轴上每个栏目之间的柱间距
                    type:'bar',
                    data:["8","8","8","8","8","8","8","8","8","8"]
                },
                {
                    name:"数学",
                    symbol:'none',  //去掉点的 
                    smooth:true,  //让曲线变平滑 
                    barWidth:13,
                    barGap:"50%",//x轴上每个栏目之间的柱间距
                    type:'bar',
                    data:["6","7","7","7","7","7","9","9","9","9"]
                },
                {
                    name:"英语",
                    symbol:'none',  //去掉点的 
                    smooth:true,  //让曲线变平滑 
                    barWidth:13,
                    barGap:"50%",//x轴上每个栏目之间的柱间距
                    type:'bar',
                    data:["2","4","4","4","4","5","8","8","8","9"]
                },
                {
                    name:"物理",
                    symbol:'none',  //去掉点的 
                    smooth:true,  //让曲线变平滑 
                    barWidth:13,
                    barGap:"50%",//x轴上每个栏目之间的柱间距
                    type:'bar',
                    data:["0","0","0","0","0","0","4","5","6","7"]
                },
                {
                    name:"化学",
                    symbol:'none',  //去掉点的 
                    smooth:true,  //让曲线变平滑 
                    barWidth:13,
                    barGap:"50%",//x轴上每个栏目之间的柱间距
                    type:'bar',
                    data:["0","0","0","0","0","0","5","6","7","8"]
                },
                {
                    name:"生物",
                    symbol:'none',  //去掉点的 
                    smooth:true,  //让曲线变平滑 
                    barWidth:13,
                    barGap:"50%",//x轴上每个栏目之间的柱间距
                    type:'bar',
                    data:["0","0","0","0","0","0","0","1","2","3"]
                }
            ]
        };
    });
    