Package.describe({
  name: 'yourorg:mypackage',
  version: '0.0.3',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md',
});

Package.onUse(function onUse(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.addFiles(['logger.js', 'mypackage.js'], ['server']);
  api.export('Logger');
});

Package.onTest(function onTest(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.addFiles(['logger.js', 'mypackage-tests.js'], ['server']);
  api.export('Logger');
});

Npm.depends({
  'bunyan': '1.5.1',
});
