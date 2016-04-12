'use strict'

angular.module('webCreatorThemeApp')
.controller('MainCtrl', function($scope) {

    
  $scope.helpers({
    things: function() {
      return Things.find({});
    }
  });
                  
  $scope.subscribe('things', function() {
    return [{}, $scope.getReactively('search')];
  });

  $scope.save = function() {
    if ($scope.form.$valid) {
      Things.insert($scope.newThing);
      $scope.newThing = undefined;
    }
  };
                  
  $scope.remove = function(thing) {
    Things.remove({_id: thing._id});
  };
});