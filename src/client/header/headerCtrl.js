angular.module('webCreatorThemeApp').controller('HeaderCtrl',function($scope, $rootScope, $state){
  $rootScope.isAuthenticated = false;

  $scope.helpers({
	      menus() {
	      	console.log(JSON.stringify(Menus.find({})));
	        return Menus.find({});
	      },
	      logos() {
	      	var logos = Logos.find({});
	      	console.log(JSON.stringify(logos));
	      	return logos[0];
	      }
	  });
});
