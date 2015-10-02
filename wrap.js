//var command = process.argv.slice(2).join(' ').replace(/\//g,'\\\\');
var command = process.argv[2];
var isWin = /^win/.test(process.platform);
var grunt = require('grunt');
var args = process.argv.slice(3).join(' ').replace(/\//g,'\\\\');

console.log('Wrap: Executing', command, args);

switch(command) {
case 'grunt':
    var grunt = require('grunt');
    require('./Gruntfile')(grunt);
    grunt.tasks(args);
    break;
case 'bower':
    break;
}

/*require('child_process').exec(command, function(error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    if (error !== null) {
        console.log('exec error: ' + error);
    }
});*/
