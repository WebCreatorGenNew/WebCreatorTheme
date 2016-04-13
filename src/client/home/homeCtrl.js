angular.module('webCreatorThemeApp').controller('HomeCtrl',function(){
  (function ($) {
      var o = $('#camera');
      if (o.length > 0) {


          $(document).ready(function () {
              o.camera({
                  autoAdvance: true,
                  height: '38.6830%',
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
