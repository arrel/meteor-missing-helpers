if (Meteor.isClient) {
    Template.registerHelper('stripTags', function (input, allowedTags) {
        return MissingUtility.stripTags(input, allowedTags);
    });
}