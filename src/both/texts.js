Texts = new Mongo.Collection('texts');

Texts.allow({
    insert: function() {
        return (Meteor.userId() ? true : false);
    },
    update: function() {
        return (Meteor.userId() ? true : false);
    },
    remove: function() {
        return (Meteor.userId() ? true : false);
    }
});
