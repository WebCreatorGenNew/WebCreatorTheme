angular.module('webCreatorThemeApp').controller('HeaderCtrl',function($scope, $rootScope, $state){

  $scope.menus = [
      {id:'menu_1',name:'Home'},
      {id:'menu_2',name:'About'},
      {id:'menu_3',name:'Our Menu'},
      {id:'menu_4',name:'Contract'}
  ]
});
