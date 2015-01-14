Tinytest.add('Missing Helpers - MissingUtility - stripTags', function (test) {
  test.equal(MissingUtility.stripTags('<strong>Test string</strong>'), 'Test string');
  test.equal(MissingUtility.stripTags('<div><strong>Test string</strong></div>', '<strong>'),
      '<strong>Test string</strong>');
});
