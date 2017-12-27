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

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
