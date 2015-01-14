if (Meteor.isClient) {
    UI.registerHelper('stripTags', function (input, allowedTags) {
        return MissingUtility.stripTags(input, allowedTags);
    });
}