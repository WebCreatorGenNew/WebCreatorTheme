angular.module('webCreatorThemeApp').controller('LoginCtrl', function($scope, $rootScope, $state,$window) {

    $scope.loginRequest = {
        username: 'admin',
        password:''
    }
    $scope.login = function() {
        //send the login request
        Accounts.callLoginMethod({
            methodArguments: [$scope.loginRequest],
            userCallback: function(err,result){
                if(Meteor.userId() && !err){
                        //$state.go('home');
                        $window.location.href = '/';
                }
            }
        });
    }
});
