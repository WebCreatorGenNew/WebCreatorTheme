'use strict'

angular.module('webCreatorThemeApp')
.config(function($stateProvider) {
  $stateProvider
  .state('about', {
    url: '/about',
    templateUrl: 'client/about/about.view.ng.html',
    controller: 'AboutCtrl'
  });
});