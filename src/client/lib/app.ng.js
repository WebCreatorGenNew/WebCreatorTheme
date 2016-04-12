angular.module('webCreatorThemeApp', [
  'angular-meteor',
  'ui.router',
  'accounts.ui'
]);

onReady = function() {
  angular.bootstrap(document, ['webCreatorThemeApp']);
};
  
if(Meteor.isCordova) {
  angular.element(document).on('deviceready', onReady);
} else {
  angular.element(document).ready(onReady);
}