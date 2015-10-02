module.exports = function (grunt) {
    'use strict';

    return {
        gruntfile: {
            files: grunt.config('jslint.grunt').src,
            tasks: [ 'jslint:grunt' ]
        },
        bin: {
            files: grunt.config('jslint.bin').src,
            tasks: [ 'jslint:bin' ]
        },
        src: {
            files: grunt.config('jslint.client').src,
            tasks: [ 'template:dev', 'jslint:client' ]
        }
    };
};
