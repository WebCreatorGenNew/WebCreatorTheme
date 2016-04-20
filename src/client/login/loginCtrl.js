angular.module('webCreatorThemeApp').controller('LoginCtrl',function($scope, $rootScope, $state){

  $scope.credentials = {
    username: '',
    password: ''
  };

  $scope.login = function (credentials) {
    if(credentials.username === 'admin' && credentials.password === 'password')
    {
      $rootScope.isAuthenticated = true;
      $state.go('home');
    }
  };

  (function ($) {
      var o = $('#camera');
      if (o.length > 0) {


          $(document).ready(function () {
              o.camera({
                  autoAdvance: true,
                  height: '18.6830%',
                  minHeight: 'px',
                  pagination: false,
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
