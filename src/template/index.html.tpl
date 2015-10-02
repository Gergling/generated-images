<!-- public/index.html -->
<!doctype html>
<html lang="en" data-ng-app="application">
<head>
    <meta charset="UTF-8">

    <%
    paths.css.forEach(function (path) {
        %><link rel="stylesheet" type="text/css" href="<%- path %>"><%- "\n" %><%
    });
    %>

    <%
    paths.js.forEach(function (path) {
        %><script src='<%- path %>'></script><%- "\n" %><%
    });
    %>

    <title>Image Generator</title>

    <%
    modules.forEach(function (module) {
    %>

    angular.module("<%= module.name %>", [<%=
        (module.required ? '\n\t\t"' + module.required.join('",\n\t"') + '"\n' : "")
    %>]);

    <%
    });
    %>


</head>
<body data-ng-controller="application.controller.index">
    <div data-ng-view></div>
</body>
</html>