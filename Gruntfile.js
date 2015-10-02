module.exports = function (grunt) {
    'use strict';

    var gruntMod = function (mod) {return require('./src/grunt/' + mod); };

    var paths = gruntMod('paths')(grunt),

        banner = '/* Liftr */\n'
            + '/* <%= grunt.template.today("yyyy-mm-dd") %> */\n';

    paths.server = paths.js.module.concat(paths.other);
    paths.specs = paths.js.spec.concat(paths.specsServer);
    grunt.file.write("src/public/vendor/bootstrap/css/bootstrap.css.map");

    //require("./src/grunt/modules.js")(grunt);

    grunt.initConfig({
        jslint: require('./src/grunt/jslint')(paths),

        //~ jsdoc: {
            //~ dist: {
                //~ src: 'src/public_html/module/**/*.js',
                //~ options: {
                    //~ destination: 'build/documentation'
                //~ }
            //~ }
        //~ },

        template: require('./src/grunt/template')(grunt, paths),

        //jasmine: require('./src/grunt/jasmine'),

        uglify: {
            vendor: {
                files: { 'build/public_html/js/vendor.min.js': paths.vendor }
            },
            scripts: {
                options: { banner: banner },
                files: { 'build/public_html/js/scripts.min.js': paths.scripts }
            }
        },

        cssmin: {
            vendor: {
                files: { 'build/public_html/css/vendor.min.css': paths.css.vendor }
            },
            styles: {
                options: { banner: banner },
                files: { 'build/public_html/css/styles.min.css': paths.css.styles }
            }
        },

        htmlmin: {
            options: {
                removeComments:       true,
                collapseWhitespace:   true,
                conservativeCollapse: true,
                preserveLineBreaks:   true
            },
            build: {
                files: [ {
                    expand: true,
                    cwd:    'src/public_html/module/',
                    src:    '**/partial/**/*.html',
                    dest:   'build/public_html/module/'
                } ]
            }
        },

        copy: {
            build: {
                files: [
                    {
                        expand: true,
                        cwd:    'src/public_html/module/',
                        src:    '**/img/**/*',
                        dest:   'build/public_html/module/'
                    },
                    {
                        expand: true,
                        cwd:    'src/public_html/vendor/bootstrap/fonts/',
                        src:    '*',
                        dest:   'build/public_html/fonts/'
                    }
                ]
            }
        }
    });

    grunt.config('watch', require('./src/grunt/watch')(grunt));

    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-eol');
    //grunt.loadNpmTasks('grunt-execute');
    grunt.loadNpmTasks('grunt-jasmine-node');
    //grunt.loadNpmTasks('grunt-jsdoc');
    grunt.loadNpmTasks('grunt-jslint');
    grunt.loadNpmTasks('grunt-template');

    // Default task
    grunt.registerTask('default', [ 'build' ]);

    grunt.registerTask('install', [
        'bower',
        'copy:install',
        'template'
    ]);

    grunt.registerTask('build', [
        'template',    // Populate templates with lists of source files
        'jasmine',     // Run client unit tests with Jasmine
        'jslint',      // Check code with JSLint
        'uglify',      // Concatenate and minify code
        'cssmin',      // Concatenate and minify styles
        'htmlmin',     // Copy and minify partials
        'copy'         // Copy images and fonts
    ]);
};
