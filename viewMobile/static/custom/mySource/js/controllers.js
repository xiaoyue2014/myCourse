angular.module('starter.controllers', [])
.controller('headCtrl', function($scope,$ionicHistory) {
  $scope.goback=function(){
    $ionicHistory.goBack();
  }
})
.controller('sourcesCtrl', function($scope) {
  $scope.tags=['重点','难点','经典案例','考点','2018高考重难点'];
  $scope.deleteTag=function($event){
    $($event.target).addClass("checked");  
  }
})
.controller('collectCtrl', function($scope, $ionicModal) {	
	$scope.cData = [{
    id: 0,
    content: '2018中考语文总复习（安徽专版）名师课件：1.4 专题四 语文综合应用 （共122张PPT）',
    time: '2017-12-26 17:21',
    tags: ['收藏','语文试卷']
  }, {
    id: 1,
    content: '2018中考语文总复习（安徽专版）名师课件：1.4 专题四 语文综合应用 （共122张PPT）',
    time: '2017-12-26 17:21',
    tags: ['收藏']
  }, {
    id: 2,
    content: '2018中考语文总复习（安徽专版）名师课件：1.4 专题四 语文综合应用 （共122张PPT）',
    time: '2017-12-26 17:21',
    tags: ['收藏']
  }];
})
.controller('ErrorsCtrl', function($scope, $ionicModal) {
    $scope.eData = [{
    id: 0,
    content: '设竖直方向上为y轴正方向，如图曲线为一质点沿轴运动的位置——时间（y-t）图像，则下图由图可知（）。',
    time: '2017-12-26 17:21',
    tags: ['错题']
  }, {
    id: 1,
    content: '如图直线是一条河..是两个村庄，计划在上的某处修建一个水泵站，向..两地供水。现有如下四种铺设方案（图中实线表示铺设的......',
    time: '2017-12-26 17:21',
    tags: ['错题']
  }, {
    id: 2,
    content: '2018中考数学总复习（安徽专版）名师课件：1.4 专题四 数学综合应用 （共122张PPT）',
    time: '2017-12-26 17:21',
    tags: ['错题']
  }];
})
.controller('NotesCtrl', function($scope, $ionicModal) {
   $scope.nData = [{
    id: 0,
    content: '设竖直方向上为y轴正方向，如图曲线为一质点沿轴运动的位置——时间（y-t）图像，则下图由图可知（）。',
    size: '100kb',
    time: '2017-12-26 17:21',
    tags: ['笔记','数学']
  }, {
    id: 1,
    content: '数学第一单元测试重点',
    size: '100kb',
    time: '2017-12-26 17:21',
    tags: ['笔记','数学']
  }, {
    id: 2,
    content: '设竖直方向上为y轴正方向，如图曲线为一质点沿轴运动的位置——时间（y-t）图像，则下图由图可知（）。',
    size: '100kb',
    time: '2017-12-26 17:21',
    tags: ['笔记','数学']
  }];
})
.controller('selectSubject', function($scope, $ionicModal) {	
	/*open modal*/
	  $scope.subjects = ["语文","数学","英语","物理","化学","生物","地理","历史","政治"];
	  $ionicModal.fromTemplateUrl('templates/modal.html', {
	    scope: $scope
	  }).then(function(modal) {
	    $scope.modal = modal;
	  });
	  /*click subject*/
	  $scope.selectSubject=function(item){
	  		$scope.subject=$scope.subjects[item];
	  		$scope.modal.hide();
	  }
	})
.controller('collectDetailCtrl', function($scope, $stateParams) {
  $scope.toggleGroup = function(group) {
    if ($scope.isGroupShown(group)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = group;
    }
  };
  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  };
})
.controller('errorsDetailCtrl', function($scope, $stateParams) {})
.controller('notesDetailCtrl', function($scope, $stateParams) {})
.controller('editCtrl', function($scope,$state) {
  $scope.tags=['重点','难点','经典案例','考点','2018高考重难点'];
  $scope.saveTag=function(){
    $state.go('tab.collect');
  }
})
.controller('AccountCtrl', function($scope) {
   $scope.groups = [{name:"老师",face: '../../../../static/custom/mySource/img/teacher.svg',num:3,items:["李老师", "王老师", "张老师"]},
				    {name:"学生",face: '../../../../static/custom/mySource/img/student.svg',num:3,items:["李一", "李二", "李三"]},
				    {name:"家长",face: '../../../../static/custom/mySource/img/parents.svg',num:3,items:["李一妈妈", "李二妈妈", "李三妈妈"]}];
  $scope.toggleGroup = function(group) {
    if ($scope.isGroupShown(group)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = group;
    }
  };
  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  };
});
