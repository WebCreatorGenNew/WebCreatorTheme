angular.module('webCreatorThemeApp').controller('HomeCtrl',function($scope){
  $scope.isAuthenticated = null;
  if (Meteor.userId() === null) {
    $scope.isAuthenticated = false;
    //console.log($scope.isAuthenticated);
  }
  else
  {
    $scope.isAuthenticated = true;
    //console.log($scope.isAuthenticated);
  }
  (function ($) {
      var o = $('#camera');
      if (o.length > 0) {


          $(document).ready(function () {
              o.camera({
                  autoAdvance: false,
                  height: '38.6830%',
                  minHeight: 'px',
                  pagination: false,
                  overlayer: true,
                  thumbnails: false,
                  playPause: false,
                  hover: true,
                  loader: 'none',
                  navigation: true,
                  navigationHover: false,
                  mobileNavHover: true,
                  fx: 'simpleFade'
              })
          });
      }
  })(jQuery);
});
