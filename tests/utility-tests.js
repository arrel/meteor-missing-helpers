Tinytest.add('Missing Helpers - MissingUtility - stripTags', function (test) {
  test.equal(MissingUtility.stripTags('<strong>Test string</strong>'), 'Test string');
  test.equal(MissingUtility.stripTags('<div><strong>Test string</strong></div>', '<strong>'),
      '<strong>Test string</strong>');
});

Tinytest.add('Missing Helpers - MissingUtility - hasVerifiedEmail', function (test) {
    var user;

    if (Meteor.isServer) {
        Meteor.publish('allUsers', function () {
            return Meteor.users.find({}, {fields: {'emails': 1}});
        });

        user = Meteor.users.findOne();

        if (!user) {
            Accounts.createUser({username: 'test', email: 'test@test.com', password: 'test'});
            user = Meteor.users.findOne();
        }

        test.isNotNull(user);
        test.equal(MissingUtility.hasVerifiedEmail(user), false);

        _.each(user.emails, function (email) {
            email.verified = true;
        });

        test.equal(MissingUtility.hasVerifiedEmail(user), true);
    }
    else if (Meteor.isClient) {
        Meteor.subscribe('allUsers');

        user = Meteor.users.findOne();

        if (!user) {
            Accounts.createUser({username: 'test', email: 'test@test.com', password: 'test'});
            user = Meteor.users.findOne();
        }

        user = Meteor.users.findOne();

        test.isNotNull(user);
        test.equal(MissingUtility.hasVerifiedEmail(user), false);
    }

    if (user)
        Meteor.users.remove();
});

Tinytest.add('Missing Helpers - MissingUtility - truncateChars', function (test) {
    test.equal(MissingUtility.truncateChars('ABCDEFG'), 'ABCDEFG');
    test.equal(MissingUtility.truncateChars('ABCDEFG', 3), 'ABC');
    test.equal(MissingUtility.truncateChars(10, 2), '');
});

Tinytest.add('Missing Helpers - MissingUtility - nl2br', function (test) {
    test.equal(MissingUtility.nl2br('A\nB\nC\nDEFG', true), {"string": 'A<br>B<br>C<br>DEFG'});
    test.equal(MissingUtility.nl2br('A\nB\nC\nDEFG'), {"string": 'A<br>\nB<br>\nC<br>\nDEFG'});
    test.equal(MissingUtility.nl2br('ABC'), {"string": 'ABC'});
    test.equal(MissingUtility.nl2br(10), {"string": ''});
});