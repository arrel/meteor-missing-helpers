if (Meteor.isClient) {
    /*
     * @param {String} input - Input string with tags
     * @param {String} allowedTags - Allowed tags (optional)
     * @returns {String}
     *
     * Removes HTML tags from a given string. It skips the allowed tags.
     */
    Template.registerHelper('stripTags', function (input, allowedTags) {
        return MissingUtility.stripTags(input, allowedTags);
    });

    /*
     * @returns {Number}
     *
     * Returns current year.
     */
    Template.registerHelper('currentYear', function () {
        var d = new Date();
        return d.getFullYear();
    });

    /*
     * @param {Date} rawDate - Date object
     * @param {String} formatString (otional)
     *
     * @returns {String}
     *
     * Returns a formatted date according to http://momentjs.com/docs/#/displaying/
     */
    Template.registerHelper('formatDateTime', function (rawDate, formatString) {
        if (!_.isDate(rawDate))
            return '';  // Fail silently

        if (_.isString(formatString))
            return moment(rawDate).format(formatString);
        else
            return moment(rawDate).format();
    });

    /*
     * @param {Date} rawDate - Date object
     * @returns {String}
     *
     * Returns relative time since a given date. A wrapper for http://momentjs.com/docs/#/displaying/fromnow/
     */
    Template.registerHelper('timeSince', function (rawDate) {
        if (!_.isDate(rawDate))
            return '';  // Fail silently

        return moment(rawDate).fromNow();
    });

    /*
     * @param {Object} user - User instance
     * @returns {Boolean}
     *
     * Determines if a used has verified his email address.
     */
    Template.registerHelper('hasVerifiedEmail', function(user) {
        return MissingUtility.hasVerifiedEmail(user || Meteor.user());
    });

    /*
     * @param {String} input - Input string
     * @param {Number} length - Number of characters to truncate after.
     * @returns {String}
     *
     * Truncates a string after a certain number of characters.
     */
    Template.registerHelper('truncateChars', function(input, length) {
        return MissingUtility.truncateChars(input, length);
    });
}