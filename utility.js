MissingUtility = {
    /**
     * @method MissingUtility.stripTags
     * @public
     * @param {String} input - Input string with tags
     * @param {String} allowedTags - Allowed tags (optional)
     * @returns {String}
     *
     * Removes HTML tags from a given string. It skips the allowed tags.
     *
     * Inspired by http://phpjs.org/functions/strip_tags/
     */
    stripTags: function(input, allowedTags) {
        if (!_.isString(input))
            return '';  // Fail silently

        allowedTags = (((allowedTags || '') + '')
            .toLowerCase()
            .match(/<[a-z][a-z0-9]*>/g) || [])
            .join(''); // making sure the allowedTags arg is a string containing only tags in lowercase (<a><b><c>)

        var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi, commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;

        return input.replace(commentsAndPhpTags, '')
            .replace(tags, function ($0, $1) {
                return allowedTags.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : '';
            });
    },

    /**
     * @method MissingUtility.hasVerifiedEmail
     * @public
     * @param {Object} user - Meteor user
     * @returns {Boolean}
     *
     * Determines if a user has verified his email address.
     */
    hasVerifiedEmail: function(user) {
        if (!_.isObject(user) || !user)
            return false;  // Fail silently

        // Pick the first unverified address
        var email = _.find(user.emails || [], function (email) {
            return !email.verified;
        });

        var address =  (email || {}).address;

        if (!address)
            return true;
        else
            return false;
    },

    /**
     * @method MissingUtility.truncateChars
     * @public
     * @param {String} input - Input string
     * @param {Number} length - Number of characters to truncate after.
     * @returns {String}
     *
     * Truncates a string after a certain number of characters.
     */
    truncateChars: function(input, length) {
        if (!_.isString(input))
            return '';   // Fail silently

        if (!_.isFinite(length))
            return input;  // Fail silently

        return input.substring(0, length);
    },

    /**
     * @method MissingUtility.nl2br
     * @public
     * @param {String} input - Input string
     * @returns {String}
     *
     * Converts all newlines in a piece of plain text to HTML line breaks (<br>).
     */
    nl2br: function(input, removeNewLines) {
        if (!_.isString(input))
            return Spacebars.SafeString('');   // Fail silently

        var replacement = replacement = '$1' + '<br>';
        if (!removeNewLines || removeNewLines == undefined)
            replacement += '$2';

        return new Spacebars.SafeString(input.replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, replacement));
    }
};