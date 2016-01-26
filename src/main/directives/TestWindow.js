/**
 * TestWindow Directive
 *
 * @author  :: Jeff Lee
 * @created :: 2016/01/25
 */

define(['main/directives', 'mocha', 'chai'], function (MainDirectives, mocha, chai) {

    return MainDirectives

        .directive('testWindow', [function () {
            return {
                restrict: 'E',
                replace: true,
                templateUrl: '/js/templates/main/partials/directive-testWindow.html',
                controller: ['$scope', function ($scope) {
                    mocha.setup('bdd');
                }],
                link: function (scope, elem, attrs) {
                    $(function () {
                        require(['tests'], function (tests) {
                            mocha.run();
                        });
                    });
                }
            };
        }]);
});
