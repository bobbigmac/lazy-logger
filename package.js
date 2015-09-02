Package.describe({
  name: 'bobbigmac:lazy-logger',
  version: '0.1.0',
  // Brief, one-line summary of the package.
  summary: 'Simple logging wrapper for client-side to display console.log, console.warn and console.error messages in the page body (reduce need to have the console open)',
  // URL to the Git repository containing the source code for this package.
  git: '',
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
