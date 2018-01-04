    var option2 = {
	    tooltip : {
	        trigger: 'item',
	        backgroundColor:'#fff',
	        borderColor:'#000',
	        textStyle: {
                color: '#666666',
                fontSize:'14'
            },
            padding:'16',
	        formatter:''  
	    },
	    dataRange: {
	        x: 'left',
	        y: 'bottom',
	        show:false,
	        splitList: [
	            {start: 0, end: 0},
	            {start: 1}
	        ],
	        color: ['#92cc7a','#6ab54b']
	    },
	    series : []
	};
    
    
    var mapfn=function(Urls,Option,mapBoxId){
    	var mapBox = document.getElementById(mapBoxId);
		var myChartmapBox = echarts.init(mapBox);
		$.ajax({
	    	type:"get",
	    	url:Urls,
	    	async:true,
	    	success:function(result){
	    		//console.log(result);
	    		var Item = function(){
	    			return {
			            name: '',
			            type: 'map',
			            mapType: 'china',
			            roam: false,
			            itemStyle: {
					        normal: {
					            // color: 各异,
					            borderColor: '#c0e1b3',
					            borderWidth: 1,
					            areaStyle: {
					                color: '#6ab54b'
					            },
					            label: {
					                show: true,
					                textStyle: {
					                    color: '#fff',
					                    fontSize:'14'
					                }
					            }
					        },
					        emphasis: {                 // 也是选中样式
					            // color: 各异,
					            borderColor: '#c0e1b3',
					            borderWidth: 1,
					            areaStyle: {
					                color: 'rgba(255,255,255,1)'
					            },
					            label: {
					                show: true,
					                textStyle: {
					                    color: '#1183dd',
					                    fontSize:'14',
					                    fontWeight:'bold'
					                }
					            }
					        }
					    },
			            data:[],
			        }
	    		};
	    		var Series=[];
			    for (var i=0;i<result.length;i++) {
			    	var Istem=new Item();
			    	Item.name=result[i].listname;
			    	//Istem.data.push(result[i].listdata);
			    	var listDatas=result[i].listdata;
			    	var list=[];
		    		for (var j=0;j<listDatas.length;j++) {
		    			//console.log("name:"+"'"+listDatas[j].name+"'"+","+"value:"+"'"+listDatas[j].value+"'")
		    			list.push({name:listDatas[j].name,value:listDatas[j].value});
			    	}
		    		//console.log(list);
		    		Istem.data=list;
			    	Series.push(Istem);
			    }
			    //#6ab54b
			    Option.series=Series;
			    Option.tooltip.formatter=function(params) {  
			    	var res='';
		            res +="<span style='color:#1183dd'>"+params.name+"</span>"+"<br/>";  
		            var myseries = Option.series;
		            var units=['所','个','人'];
		            var listclass=['学校','班级','学生'];
		            for (var i = 0; i < units.length; i++) {  
			            res+= listclass[i];
			            for(var j=0;j<myseries[i].data.length;j++){  
				            if(myseries[i].data[j].name==params.name){  
				            	res+=' : '+myseries[i].data[j].value+units[i]+'</br>';
				            }  
			            }         
		            }  
		              return res;  
		        }
			    
			    myChartmapBox.setOption(Option,true);
			    window.addEventListener("resize",function(){
			        myChartmapBox.resize();
			    });
	    	}
	    });
    	
    	
    }
    mapfn('asideNav_banner/mapInfo.json',option2,'mapBox')
    


//	var mapBox = document.getElementById('mapBox');
//	var myChartmapBox = echarts.init(mapBox);
	
//	option1 = {
////	    title : {
////	        text: 'iphone销量',
////	        subtext: '纯属虚构',
////	        x:'center'
////	    },
//	    tooltip : {
//	        trigger: 'item',
//	        backgroundColor:'#fff',
//	        borderColor:'#333',
//	        textStyle: {
//              color: '#666666',
//              fontSize:'14'
//          },
//          padding:'16',
//	        formatter: function(params) {
//	        	var res='';
//	            //res = '省市 : '+params.name+'<br/>';  
//	            var myseries = option1.series;  
//	            for (var i = 0; i < myseries.length; i++) {  
//		            res+= myseries[i].name;
//		            var units=['所','个','人'];
//		            for(var j=0;j<myseries[i].data.length;j++){  
//			            if(myseries[i].data[j].name==params.name){  
//			            	res+=' : '+myseries[i].data[j].value+units[i]+'</br>';
//			            }  
//		            }         
//	            }  
//	              return res;  
//	        }  
//	    },
////	    legend: {
////	        orient: 'vertical',
////	        x:'left',
////	        data:['学校','班级','学生']
////	    },
////	    dataRange: {
////	        min: 0,
////	        max: 2500,
////	        show:false,
////	        x: 'left',
////	        y: 'bottom',
////	        text:['高','低'],           // 文本，默认为数值文本
////	        calculable : true
////	    },
////	    toolbox: {
////	        show: true,
////	        orient : 'vertical',
////	        x: 'right',
////	        y: 'center',
////	        feature : {
////	            mark : {show: true},
////	            dataView : {show: true, readOnly: false},
////	            restore : {show: true},
////	            saveAsImage : {show: true}
////	        }
////	    },
////	    roamController: {
////	        show: true,
////	        x: 'right',
////	        mapTypeControl: {
////	            'china': true
////	        }
////	    },
//	    series : [
//	        {
//	            name: '学校',
//	            type: 'map',
//	            mapType: 'china',
//	            roam: false,
//	            itemStyle: {
//			        normal: {
//			            // color: 各异,
//			            borderColor: '#c0e1b3',
//			            borderWidth: 1,
//			            areaStyle: {
//			                color: 'rgba(146,204,122,1)'
//			            },
//			            label: {
//			                show: true,
//			                textStyle: {
//			                    color: '#fff',
//			                    fontSize:'14'
//			                }
//			            }
//			        },
//			        emphasis: {                 // 也是选中样式
//			            // color: 各异,
//			            borderColor: '#c0e1b3',
//			            borderWidth: 1,
//			            areaStyle: {
//			                color: 'rgba(255,255,255,1)'
//			            },
//			            label: {
//			                show: true,
//			                textStyle: {
//			                    color: '#1183dd',
//			                    fontSize:'14',
//			                    fontWeight:'bold'
//			                }
//			            }
//			        }
//			    },
//	            data:[
//	                {name: '北京',value: Math.round(Math.random()*1000)},
//	                {name: '天津',value: Math.round(Math.random()*1000)},
//	                {name: '上海',value: Math.round(Math.random()*1000)},
//	                {name: '重庆',value: Math.round(Math.random()*1000)},
//	                {name: '河北',value: Math.round(Math.random()*1000)},
//	                {name: '河南',value: Math.round(Math.random()*1000)},
//	                {name: '云南',value: Math.round(Math.random()*1000)},
//	                {name: '辽宁',value: Math.round(Math.random()*1000)},
//	                {name: '黑龙江',value: Math.round(Math.random()*1000)},
//	                {name: '湖南',value: Math.round(Math.random()*1000)},
//	                {name: '安徽',value: Math.round(Math.random()*1000)},
//	                {name: '山东',value: Math.round(Math.random()*1000)},
//	                {name: '新疆',value: Math.round(Math.random()*1000)},
//	                {name: '江苏',value: Math.round(Math.random()*1000)},
//	                {name: '浙江',value: Math.round(Math.random()*1000)},
//	                {name: '江西',value: Math.round(Math.random()*1000)},
//	                {name: '湖北',value: Math.round(Math.random()*1000)},
//	                {name: '广西',value: Math.round(Math.random()*1000)},
//	                {name: '甘肃',value: Math.round(Math.random()*1000)},
//	                {name: '山西',value: Math.round(Math.random()*1000)},
//	                {name: '内蒙古',value: '25'},
//	                {name: '陕西',value: Math.round(Math.random()*1000)},
//	                {name: '吉林',value: Math.round(Math.random()*1000)},
//	                {name: '福建',value: Math.round(Math.random()*1000)},
//	                {name: '贵州',value: Math.round(Math.random()*1000)},
//	                {name: '广东',value: Math.round(Math.random()*1000)},
//	                {name: '青海',value: Math.round(Math.random()*1000)},
//	                {name: '西藏',value: Math.round(Math.random()*1000)},
//	                {name: '四川',value: Math.round(Math.random()*1000)},
//	                {name: '宁夏',value: Math.round(Math.random()*1000)},
//	                {name: '海南',value: Math.round(Math.random()*1000)},
//	                {name: '台湾',value: Math.round(Math.random()*1000)},
//	                {name: '香港',value: Math.round(Math.random()*1000)},
//	                {name: '澳门',value: Math.round(Math.random()*1000)}
//	            ]
//	        },
//	        {
//	            name: '班级',
//	            type: 'map',
//	            mapType: 'china',
//	            itemStyle:{
//	                normal:{label:{show:true}},
//	                emphasis:{label:{show:true}}
//	            },
//	            data:[
//	                {name: '北京',value: Math.round(Math.random()*1000)},
//	                {name: '天津',value: Math.round(Math.random()*1000)},
//	                {name: '上海',value: Math.round(Math.random()*1000)},
//	                {name: '重庆',value: Math.round(Math.random()*1000)},
//	                {name: '河北',value: Math.round(Math.random()*1000)},
//	                {name: '河南',value: Math.round(Math.random()*1000)},
//	                {name: '云南',value: Math.round(Math.random()*1000)},
//	                {name: '辽宁',value: Math.round(Math.random()*1000)},
//	                {name: '黑龙江',value: Math.round(Math.random()*1000)},
//	                {name: '湖南',value: Math.round(Math.random()*1000)},
//	                {name: '安徽',value: Math.round(Math.random()*1000)},
//	                {name: '山东',value: Math.round(Math.random()*1000)},
//	                {name: '新疆',value: Math.round(Math.random()*1000)},
//	                {name: '江苏',value: Math.round(Math.random()*1000)},
//	                {name: '浙江',value: Math.round(Math.random()*1000)},
//	                {name: '江西',value: Math.round(Math.random()*1000)},
//	                {name: '湖北',value: Math.round(Math.random()*1000)},
//	                {name: '广西',value: Math.round(Math.random()*1000)},
//	                {name: '甘肃',value: Math.round(Math.random()*1000)},
//	                {name: '山西',value: Math.round(Math.random()*1000)},
//	                {name: '内蒙古',value: '25'},
//	                {name: '陕西',value: Math.round(Math.random()*1000)},
//	                {name: '吉林',value: Math.round(Math.random()*1000)},
//	                {name: '福建',value: Math.round(Math.random()*1000)},
//	                {name: '贵州',value: Math.round(Math.random()*1000)},
//	                {name: '广东',value: Math.round(Math.random()*1000)},
//	                {name: '青海',value: Math.round(Math.random()*1000)},
//	                {name: '西藏',value: Math.round(Math.random()*1000)},
//	                {name: '四川',value: Math.round(Math.random()*1000)},
//	                {name: '宁夏',value: Math.round(Math.random()*1000)},
//	                {name: '海南',value: Math.round(Math.random()*1000)},
//	                {name: '台湾',value: Math.round(Math.random()*1000)},
//	                {name: '香港',value: Math.round(Math.random()*1000)},
//	                {name: '澳门',value: Math.round(Math.random()*1000)}
//	            ]
//	        },
//	        {
//	            name: '学生',
//	            type: 'map',
//	            mapType: 'china',
//	            itemStyle:{
//	                normal:{label:{show:true}},
//	                emphasis:{label:{show:true}}
//	            },
//	            data:[
//	                {name: '北京',value: Math.round(Math.random()*1000)},
//	                {name: '天津',value: Math.round(Math.random()*1000)},
//	                {name: '上海',value: Math.round(Math.random()*1000)},
//	                {name: '重庆',value: Math.round(Math.random()*1000)},
//	                {name: '河北',value: Math.round(Math.random()*1000)},
//	                {name: '河南',value: Math.round(Math.random()*1000)},
//	                {name: '云南',value: Math.round(Math.random()*1000)},
//	                {name: '辽宁',value: Math.round(Math.random()*1000)},
//	                {name: '黑龙江',value: Math.round(Math.random()*1000)},
//	                {name: '湖南',value: Math.round(Math.random()*1000)},
//	                {name: '安徽',value: Math.round(Math.random()*1000)},
//	                {name: '山东',value: Math.round(Math.random()*1000)},
//	                {name: '新疆',value: Math.round(Math.random()*1000)},
//	                {name: '江苏',value: Math.round(Math.random()*1000)},
//	                {name: '浙江',value: Math.round(Math.random()*1000)},
//	                {name: '江西',value: Math.round(Math.random()*1000)},
//	                {name: '湖北',value: Math.round(Math.random()*1000)},
//	                {name: '广西',value: Math.round(Math.random()*1000)},
//	                {name: '甘肃',value: Math.round(Math.random()*1000)},
//	                {name: '山西',value: Math.round(Math.random()*1000)},
//	                {name: '内蒙古',value: '25'},
//	                {name: '陕西',value: Math.round(Math.random()*1000)},
//	                {name: '吉林',value: Math.round(Math.random()*1000)},
//	                {name: '福建',value: Math.round(Math.random()*1000)},
//	                {name: '贵州',value: Math.round(Math.random()*1000)},
//	                {name: '广东',value: Math.round(Math.random()*1000)},
//	                {name: '青海',value: Math.round(Math.random()*1000)},
//	                {name: '西藏',value: Math.round(Math.random()*1000)},
//	                {name: '四川',value: Math.round(Math.random()*1000)},
//	                {name: '宁夏',value: Math.round(Math.random()*1000)},
//	                {name: '海南',value: Math.round(Math.random()*1000)},
//	                {name: '台湾',value: Math.round(Math.random()*1000)},
//	                {name: '香港',value: Math.round(Math.random()*1000)},
//	                {name: '澳门',value: Math.round(Math.random()*1000)}
//	            ]
//	        }
//	    ]
//	};

//  myChartmapBox.setOption(option1);
//  window.addEventListener("resize",function(){
//      myChartmapBox.resize();
//  });