angular.module('webCreatorThemeApp').controller('AppCtrl',function($scope){

    $scope.helpers({
     images: () => {
       return Images.find({});
     }
   });
});
