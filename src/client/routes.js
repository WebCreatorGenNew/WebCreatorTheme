'use strict';

angular.module('webCreatorThemeApp')

.config(function($stateProvider,$urlRouterProvider, $locationProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      controller:"HomeCtrl",
      templateUrl: 'client/home/view.html'
    })
	.state('login', {
      url: '/login',
      controller:"LoginCtrl",
      templateUrl: 'client/login/login.html'
    });
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');
}).run(['$rootScope', '$state', function($rootScope, $state) {
  $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
    switch(error) {
      case 'AUTH_REQUIRED':
      case 'FORBIDDEN':
      case 'UNAUTHORIZED':
        $state.go('home');
        break;
    }
  });
}]);
