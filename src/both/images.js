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
    insert: function() {
        return true;
    },
    update: function() {
        return true;
    },
    remove: function() {
        return true;
    },
    download: function() {
        return true;
    }
});
