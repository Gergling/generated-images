module.exports = function (grunt) {
    // Generate the module files based on the available folders.
    var modules = [
        {
            name: 'application',
            required: [ ]
        }
    ];

    grunt.file.expand('./src/public/module/*/').forEach(function (path) {
        var moduleName = path.split('/')[4];
        modules[0].required.push(moduleName)
        moduleNames.push({name: moduleName});
    });

    return {
        dev: {
            options: {
                data: {
                    paths: paths,
                    css: css,
                    expand: true,
                    modules: modules
                }
            },
            files: {
                'src/public/index.html': 'src/templates/code/index.html.tpl'
            }
        }
    };
};
