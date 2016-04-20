angular.module('webCreatorThemeApp').directive('imageResource', function($rootScope) {
    return {
        restrict: 'AE',
        scope: {
            'defaultImage': '@',
            'key': '@'
        },
        template: '<div><img src="{{image}}" /><button class="mask-button">Change</button><input style="display:none;margin-top:50px" type="file" /></div>',
        link: function(scope, element, attrs) {
            scope.helpers({
                image: (key) => {
                    var img = Images.findOne({key:scope.getReactively('key')});
                    if(img){return img.url()};
                    return null;
                }
            });
            function reload(){
                if (!scope.image) {
                    scope.image = scope.defaultImage;
                } else {

                }
            }
            reload();
            var button = angular.element('button.mask-button');
            button.click(function(){
                angular.element(element).find('input[type="file"]').trigger('click');
            })
            angular.element(element).find('input[type="file"]').bind('change', function(event) {
                if(!event.target.files[0]) return;
                scope.file = event.target.files[0];
                var newFile = new FS.File(scope.file);
                newFile.key = scope.key;
                Meteor.call('deleteOld', scope.key, function(err, data) {
                    console.log(err);
                    if (err) return;
                    Images.insert(newFile, function(err, fileObj) {
                        if (err) {
                            console.log(err)
                        } else {
                            //scope.image = fileObj;
                            console.log(fileObj);
                            //reload();
                        }
                    });
                })

            });
        }
    }
})
.directive("contenteditable", function() {
  return {
    restrict: "A",
    require: "ngModel",
    link: function(scope, element, attrs, ngModel) {

      function read() {
        ngModel.$setViewValue(element.html());
      }

      ngModel.$render = function() {
        element.html(ngModel.$viewValue || "");
      };

      element.bind("blur keyup change", function() {
        scope.$apply(read);
      });
    }
  };
});;
