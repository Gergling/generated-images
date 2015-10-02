module.exports = function (grunt, paths) {
    'use strict';

    // Generate the module files based on the available folders.
    var modules = [
        {
            name: 'application',
            required: [ ]
        }
    ];

    grunt.file.expand('./src/public/module/*/').forEach(function (path) {
        var moduleName = path.split('/')[4];
        modules[0].required.push(moduleName);
        modules.push({name: moduleName});
    });

    //var replace = function (path) {return path.replace("src/public/", "");};
    return {
        dev: {
            options: {
                data: {
                    paths: {
                        js: grunt.file.expand(paths.js.vendor.concat(paths.js.client)),
                        css: grunt.file.expand(paths.css.vendor.concat(paths.css.styles))
                    },
                    expand: true,
                    modules: modules
                }
            },
            files: {
                'src/public/index.html': 'src/template/index.html.tpl'
            }
        }
    };
};
