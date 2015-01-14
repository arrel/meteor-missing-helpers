if (Meteor.isClient) {
    Template.registerHelper('stripTags', function (input, allowedTags) {
        return MissingUtility.stripTags(input, allowedTags);
    });

    Template.registerHelper('currentYear', function() {
        var d = new Date();
        return d.getFullYear();
    });
}