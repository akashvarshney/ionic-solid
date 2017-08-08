// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })
  .state('app.share', {
    url: '/share',
    views: {
      'menuContent': {
        templateUrl: 'templates/share.html'
      }
    }
  })
  .state('app.rate-us', {
      url: '/rate-us',
      views: {
        'menuContent': {
          templateUrl: 'templates/rate-us.html'
        }
      }
    })
    .state('app.home', {
      url: '/home',
      views: {
        'menuContent': {
          templateUrl: 'templates/home.html'
        }
      }
    })    
    .state('app.srp', {
      url: '/home/design-principle/srp',
      views: {
        'menuContent': {
          templateUrl: 'templates/design-principle/srp.html'
        }
      }
    })
    .state('app.ocp', {
      url: '/home/design-principle/ocp',
      views: {
        'menuContent': {
          templateUrl: 'templates/design-principle/ocp.html'
        }
      }
    })
    .state('app.lsp', {
      url: '/home/design-principle/lsp',
      views: {
        'menuContent': {
          templateUrl: 'templates/design-principle/lsp.html'
        }
      }
    })
    .state('app.isp', {
      url: '/home/design-principle/isp',
      views: {
        'menuContent': {
          templateUrl: 'templates/design-principle/isp.html'
        }
      }
    })
    .state('app.dip', {
      url: '/home/design-principle/dip',
      views: {
        'menuContent': {
          templateUrl: 'templates/design-principle/dip.html'
        }
      }
    })
    
    
    
    ;

  
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
