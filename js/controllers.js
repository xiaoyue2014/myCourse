angular.module('starter.controllers', [])
.controller('sourcesCtrl', function($scope) {})
.controller('collectCtrl', function($scope, $ionicModal) {	
	$scope.cData = [{
    id: 0,
    name: '老师',
    lastText: 'You on your way?',
    content: '2018中考语文总复习（安徽专版）名师课件：1.4 专题四 语文综合应用 （共122张PPT）',
    time: '2017-12-26 17:21',
    tags: ['收藏','语文试卷']
  }, {
    id: 1,
    name: '学生',
    lastText: 'Hey, it\'s me',
    content: '2018中考语文总复习（安徽专版）名师课件：1.4 专题四 语文综合应用 （共122张PPT）',
    time: '2017-12-26 17:21',
    tags: ['收藏']
  }, {
    id: 2,
    name: '家长',
    lastText: 'Did you get the ice cream?',
    content: '2018中考语文总复习（安徽专版）名师课件：1.4 专题四 语文综合应用 （共122张PPT）',
    time: '2017-12-26 17:21',
    tags: ['收藏']
  }];
})
.controller('ErrorsCtrl', function($scope, $ionicModal) {
    $scope.eData = [{
    id: 0,
    name: '老师',
    lastText: 'You on your way?',
    content: '2018中考语文总复习（安徽专版）名师课件：1.4 专题四 语文综合应用 （共122张PPT）',
    time: '2017-12-26 17:21',
    tags: ['错题']
  }, {
    id: 1,
    name: '学生',
    lastText: 'Hey, it\'s me',
    content: '2018中考语文总复习（安徽专版）名师课件：1.4 专题四 语文综合应用 （共122张PPT）',
    time: '2017-12-26 17:21',
    tags: ['错题']
  }, {
    id: 2,
    name: '家长',
    lastText: 'Did you get the ice cream?',
    content: '2018中考语文总复习（安徽专版）名师课件：1.4 专题四 语文综合应用 （共122张PPT）',
    time: '2017-12-26 17:21',
    tags: ['错题']
  }];
})
.controller('NotesCtrl', function($scope, $ionicModal) {
   $scope.nData = [{
    id: 0,
    name: '老师',
    lastText: 'You on your way?',
    content: '2018中考语文总复习（安徽专版）名师课件：1.4 专题四 语文综合应用 （共122张PPT）',
    time: '2017-12-26 17:21',
    tags: ['笔记']
  }, {
    id: 1,
    name: '学生',
    lastText: 'Hey, it\'s me',
    content: '2018中考语文总复习（安徽专版）名师课件：1.4 专题四 语文综合应用 （共122张PPT）',
    time: '2017-12-26 17:21',
    tags: ['笔记']
  }, {
    id: 2,
    name: '家长',
    lastText: 'Did you get the ice cream?',
    content: '2018中考语文总复习（安徽专版）名师课件：1.4 专题四 语文综合应用 （共122张PPT）',
    time: '2017-12-26 17:21',
    tags: ['笔记']
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
.controller('collectDetailCtrl', function($scope, $stateParams) {})
.controller('errorsDetailCtrl', function($scope, $stateParams) {})
.controller('notesDetailCtrl', function($scope, $stateParams) {})
.controller('editCtrl', function($scope) {})
.controller('AccountCtrl', function($scope) {
   $scope.groups = [{name:"老师",face: '../img/teacher.svg',num:3,items:["李老师", "王老师", "张老师"]},
				    {name:"学生",face: '../img/student.svg',num:3,items:["李一", "李二", "李三"]},
				    {name:"家长",face: '../img/parents.svg',num:3,items:["李一妈妈", "李二妈妈", "李三妈妈"]}];
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
