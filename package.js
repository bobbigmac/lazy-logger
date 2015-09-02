Package.describe({
  name: 'bobbigmac:lazy-logger',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: 'Display console.log, .warn and .error messages in the page body (reduce need for console)',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/bobbigmac/lazy-logger',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.1');
  api.addFiles('lazy-logger.js', ['client']);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('bobbigmac:lazy-logger');
  api.addFiles('lazy-logger-tests.js');
});
