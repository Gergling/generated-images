angular.module('application')

// Directive hits canvas directly, since it's likely that every canvas wants to be used.
.directive('canvas', [

    'applicationCanvasService',

    function (service) {
        return {
            restrict: 'E',
            scope: {
                id: '@',
                width: '@',
                height: '@'
            },
            link: function ($scope, $element) {
                service.attach($element);
            }
        };
    }
])

.service('applicationCanvasService', function () {
    var list = { };
    this.attach = function ($element) {
        var id = $element.attr('id');
        list[id] = {
            element: $element,
            ctx: $element.get(0).getContext('2d')
        };
    };
    this.get = function (id) {
        return list[id];
    };
    
});
