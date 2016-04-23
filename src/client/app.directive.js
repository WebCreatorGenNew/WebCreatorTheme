angular.module('webCreatorThemeApp').directive('imageResource', function($rootScope) {
    return {
        restrict: 'AE',
        scope: {
            'defaultImage': '@',
            'key': '@',
            'target':'=',
            'type':'@' //css, atribute
        },
        transclude: true,
        replace:true,
        template: '<div ng-transclude></div>',
        link: function(scope, element, attrs) {
            // var target = element.find(scope.target);
            element.append('<div class="upload-image-control"><div class="upload-image-container"><button class="mask-button">Change Image</button><input style="display:none;margin-top:50px" type="file" /></div></div>');
            var control = angular.element(element).find('.upload-image-control');
            var target = scope.target;
            function reload(img){
                if (!img) {
                    scope.image = scope.defaultImage;
                    img = scope.defaultImage;
                }
                img = escape(img);
                for(i in target){
                    var t = target[i];
                    var elem = t.element =='.' ? element : element.find(t.element);
                    if(!elem || elem.length == 0){
                        elem = angular.element(t.element);
                    }
                    if(t.type =='css'){
                        elem.css({
                            'background':'url('+img+')'
                        });
                    } else {
                        elem.attr(t.type,img);
                    }
                }

            }
            scope.helpers({
                image: (key) => {
                    var img = Images.findOne({key:scope.getReactively('key')});
                    if(img){
                        if(img.url()) reload(img.url());

                        return img.url();
                    } else {
                        reload(scope.defaultImage);
                    }

                    return null;
                }
            });
            var container = angular.element(element).find('.upload-image-container');

            var button = angular.element(container).find('button.mask-button');
            button.click(function(){
                angular.element(container).find('input[type="file"]').trigger('click');
            })
            angular.element(container).find('input[type="file"]').bind('change', function(event) {
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
