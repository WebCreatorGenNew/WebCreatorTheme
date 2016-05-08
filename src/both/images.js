//var imageStore = new FS.Store.GridFS("images");
var imageStore = new FS.Store.FileSystem("images", {
  path: "~/uploads", //optional, default is "/cfs/files" path within app container
});
Images = new FS.Collection("images", {
    stores: [imageStore],
    // filter: {
    //  maxSize: 10000000,
    //   allow: {
    //     contentTypes: ['image/*']
    //   }
    // }
});
Images.deny({
    insert: function() {
        return false;
    },
    update: function() {
        return false;
    },
    remove: function() {
        return false;
    },
    download: function() {
        return false;
    }
});

Images.allow({
    insert: function(userId) {
        return ( userId ? true : false);
    },
    update: function(userId) {
        return ( userId ? true : false);
    },
    remove: function(userId) {
        return ( userId ? true : false);
    },
    download: function() {
        return true;
    }
});
