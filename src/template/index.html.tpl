<!-- public/index.html -->
<!doctype html>
<html lang="en" data-ng-app="application">
<head>
    <meta charset="UTF-8">

    <%
    var replace = function (path) {return path.replace("src/public/", "");};
    grunt.file.expand(css.vendor.concat(css.styles)).forEach(function (path) {
        %><link rel="stylesheet" type="text/css" href="<%- replace(path) %>"><%- "\n" %><%
    });
    %>

    <%
    grunt.file.expand(paths.vendor.concat(paths.client)).forEach(function (path) {
        %><script src='<%- replace(path) %>'></script><%- "\n" %><%
    });
    %>

    <title>Image Generator</title>

    <%
    modules.forEach(function (module) {
    %>

    angular.module("<%= module.name %>", [<%=
        (module.required.length > 0 ? '\n\t\t"' + module.required.join('",\n\t"') + '"\n' : "")
    %>]);

    <%
    });
    %>


</head>
<body data-ng-controller="application.controller.index">
 <div data-ng-view></div>
</body>
</html>