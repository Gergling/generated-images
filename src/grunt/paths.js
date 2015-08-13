module.exports = {
  vendor: [
      // Must be included first
      'src/public/vendor/jquery/jquery.js',
      'src/public/vendor/angular/angular.js',
      'src/public/vendor/lodash/lodash.compat.js',

      // Everything else
      'src/public/vendor/*/*.js',

      // Exclusions from standard vendor libraries
      '!src/public/vendor/angular-mocks/angular-mocks.js',
      'src/public/vendor/bootstrap/bootstrap.js'
  ],

  scripts: [
      'src/public_html/module/**/module.js',
      'src/public_html/module/**/*.js'
  ],
  client: [
      'src/public/modules/**/module.js',
      'src/public/modules/**/*.js'
  ],
  module: [ 'src/module/**/*.js' ],

  helpers: [ 'src/public/vendor/angular-mocks/*.js' ],
  spec: grunt.file.expand('spec/client/**/*.js')
};
