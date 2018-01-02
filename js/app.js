// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
	    $ionicConfigProvider.platform.ios.tabs.style('standard'); 
        $ionicConfigProvider.platform.ios.tabs.position('bottom');
        $ionicConfigProvider.platform.android.tabs.style('standard');
        $ionicConfigProvider.platform.android.tabs.position('standard');

        $ionicConfigProvider.platform.ios.navBar.alignTitle('center'); 
        $ionicConfigProvider.platform.android.navBar.alignTitle('left');

        $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
        $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');        

        $ionicConfigProvider.platform.ios.views.transition('ios'); 
        $ionicConfigProvider.platform.android.views.transition('android');
        //隐藏ion-nav-back-button文字
    $ionicConfigProvider.backButton.text("");
    $ionicConfigProvider.backButton.previousTitleText(false);
  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  // Each tab has its own nav history stack:
    .state('tab.sources', {
      url: '/sources',
      views: {
        'tab-sources': {
          templateUrl: 'templates/tab-sources.html',
          controller: 'sourcesCtrl'
        }
      }
    })

  .state('tab.collect', {
    url: '/collect',
    views: {
      'tab-collect': {
        templateUrl: 'templates/tab-collect.html',
        controller: 'collectCtrl'
      }
    }
  })
  .state('tab.errors', {
    url: '/errors',
    views: {
      'tab-errors': {
        templateUrl: 'templates/tab-errors.html',
        controller: 'ErrorsCtrl'
      }
    }
  })
  .state('tab.notes', {
    url: '/notes',
    views: {
      'tab-notes': {
        templateUrl: 'templates/tab-notes.html',
        controller: 'NotesCtrl'
      }
    }
  })

  .state('tab.edit', {
      url: '/edit',
      views: {
        'tab-edit': {
          templateUrl: 'templates/tab-edit.html',
          controller: 'editCtrl'
        }
      }
    })
    .state('tab.collect-detail', {
      url: '/collect/:cDataId',
      views: {
        'tab-collect': {
          templateUrl: 'templates/collect-detail.html',
          controller: 'collectDetailCtrl'
        }
      }
    })
.state('tab.errors-detail', {
      url: '/errors/:eDataId',
      views: {
        'tab-errors': {
          templateUrl: 'templates/errors-detail.html',
          controller: 'errorsDetailCtrl'
        }
      }
    })
.state('tab.notes-detail', {
      url: '/notes/:nDataId',
      views: {
        'tab-notes': {
          templateUrl: 'templates/notes-detail.html',
          controller: 'notesDetailCtrl'
        }
      }
    })
  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/sources');

});
