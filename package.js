Package.describe({
  name: 'msamoylov:missing-helpers',
  summary: 'Missing Meteor UI helpers',
  version: '1.0.5',
  git: 'https://github.com/msamoylov/meteor-missing-helpers.git'
});

Package.onUse(function(api) {
  // Dependencies
  api.versionsFrom('1.0');

  api.use([
        'livedata',
        'underscore',
        'deps',
        'templating',
        'ui',
        'blaze',
        'ejson',
        'reactive-var',
        'accounts-base',
        'accounts-ui'
      ],
      'client');

  api.use('momentjs:moment@2.8.4', 'client');
  api.use('mrt:moment-timezone@0.2.1', 'client', {weak: true});

  api.addFiles('utility.js');
  api.addFiles(['helpers.js'], 'client');

  api.export('MissingUtility');
});

Package.onTest(function(api) {
  api.use([
        'livedata',
        'underscore',
        'deps',
        'templating',
        'ui',
        'blaze',
        'ejson',
        'reactive-var',
        'accounts-base',
        'accounts-password',
        'accounts-ui',
        'msamoylov:missing-helpers',
        'tinytest'
      ]);

  api.use(['msamoylov:missing-helpers', 'tinytest']);
  api.addFiles(['tests/utility-tests.js', 'tests/helpers-tests.js']);
});
