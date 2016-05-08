angular.module('webCreatorThemeApp').controller('AppCtrl', function($rootScope, $scope, $state, $meteor,$window) {
    $rootScope.logout = function() {
        Meteor.logout();
        $window.location.reload();
    }
	$meteor.autorun($rootScope, function() {
		$rootScope.currentUser = Meteor.user();
	});
});
