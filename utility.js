MissingUtility = {
    /**
     * @method MissingUtility.stripTags
     * @public
     * @param {String} input - Input string with tags
     * @param {String} allowedTags - Allowed tags (optional)
     * @returns {String}
     *
     * Returns HTML tags from a given string. It skips the allowed tags
     *
     * Inspired by http://phpjs.org/functions/strip_tags/
     */
    stripTags: function(input, allowedTags) {
        allowedTags = (((allowedTags || '') + '')
            .toLowerCase()
            .match(/<[a-z][a-z0-9]*>/g) || [])
            .join(''); // making sure the allowedTags arg is a string containing only tags in lowercase (<a><b><c>)

        var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi, commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;

        return input.replace(commentsAndPhpTags, '')
            .replace(tags, function ($0, $1) {
                return allowedTags.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : '';
            });
    }
};