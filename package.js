Package.describe({
  name: 'msamoylov:missing-helpers',
  summary: 'Missing Meteor UI helpers',
  version: '1.0.0',
  git: 'https://github.com/msamoylov/meteor-missing-helpers.git'
});

Package.onUse(function(api) {
  // Dependencies
  api.versionsFrom('1.0');

  api.addFiles('utility.js');
  api.addFiles(['helpers.js'], 'client');

  api.export('MissingUtility');
});

Package.onTest(function(api) {
  api.use(['msamoylov:missing-helpers', 'tinytest']);
  api.addFiles('tests/utility-tests.js');
});