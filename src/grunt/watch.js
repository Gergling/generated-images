module.exports = {
  gruntfile: {
      files: [ 'Gruntfile.js' ],
      tasks: [ 'jslint:grunt' ]
  },
  src: {
      files: paths.src,
      tasks: [ 'template:dev', 'jslint:client', 'jasmine' ]
  },
  test: {
      files: paths.test,
      tasks: [ 'jasmine', 'jslint:test' ]
  }
};
