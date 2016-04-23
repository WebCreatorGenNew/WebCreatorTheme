angular.module('webCreatorThemeApp').controller('HeaderCtrl',function($scope, $rootScope, $state){
  $rootScope.isAuthenticated = false;

  $scope.helpers({
	      menus() {
	      	console.log(JSON.stringify(Menus.find({})));
	        return Menus.find({});
	      }
	  });
});
