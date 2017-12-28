angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $ionicModal) {	  
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
.controller('ErrorsCtrl', function($scope) {})
.controller('NotesCtrl', function($scope) {})
.controller('ChatsCtrl', function($scope, Chats) {

})
.controller('editCtrl', function($scope, Chats) {

})
.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope,Chats) {
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
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
});
