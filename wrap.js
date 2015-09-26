var command = process.argv.slice(2).join(' ').replace(/\//g,'\\\\');
var isWin = /^win/.test(process.platform);

console.log('Wrap: Executing', command);

require('child_process').exec(command, function(error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    if (error !== null) {
        console.log('exec error: ' + error);
    }
});
