module.exports = function (paths) {
    'use strict';

    return {
        bin: {
            src: [ 'bin/*.js' ],
            directives: {
                predef: [ 'module', 'require', 'process' ]
            }
        },
        grunt: {
            src: [ 'Gruntfile.js', 'src/grunt/*.js' ],
            directives: {
                unparam: true,
                predef: [ 'module', 'require', 'process' ]
            }
        },
        client: {
            src: paths.client,
            browser: true,
            directives: {
                predef: [
                    '$',
                    'angular',
                    'jQuery',
                    'window'
                ]
            },
            options: { checkstyle: 'build/logs/checkstyle.xml' }
        },
        server: {
            src: paths.other,
            directives: {
                unparam: true,
                predef: [ 'module', 'require', 'process' ]
            }
        },
        module: {
            src: paths.module,
            directives: {
                predef: [ 'module', 'require' ]
            }
        },
        specs: {
            src: paths.specs,
            directives: {
                predef: [
                    'afterEach',
                    'angular',
                    'beforeEach',
                    'describe',
                    'expect',
                    'it',
                    'inject',
                    'jasmine',
                    'module',
                    'require'
                ]
            }
        }
    };
};
