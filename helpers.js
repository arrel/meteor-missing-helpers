if (Meteor.isClient) {
    Template.registerHelper('stripTags', function (input, allowedTags) {
        return MissingUtility.stripTags(input, allowedTags);
    });

    Template.registerHelper('currentYear', function () {
        var d = new Date();
        return d.getFullYear();
    });

    Template.registerHelper('formatDateTime', function (rawDate, formatString) {
        if (_.isString(formatString))
            return moment(rawDate).format(formatString);
        else
            return moment(rawDate).format();
    });

    Template.registerHelper('timeSince', function (rawDate) {
        return moment(rawDate).fromNow();
    });

    Template.registerHelper('hasVerifiedEmail', function(user) {
        return MissingUtility.hasVerifiedEmail(user || Meteor.user());
    });
}