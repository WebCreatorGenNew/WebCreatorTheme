Meteor.methods({
    deleteOld: function(key, callback) {
        Images.remove({
            key: key
        }, function(err) {
            callback(err);
        });
    }
});
