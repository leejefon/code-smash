/**
 * TestWindow Directive
 *
 * @author  :: Jeff Lee
 * @created :: 2016/01/25
 */

define([
    'main/directives',
    'main/services/CodeProblem',
    'main/services/GameAction'
], function (MainDirectives) {

    return MainDirectives

        .directive('testWindow', [function () {
            return {
                restrict: 'E',
                replace: true,
                templateUrl: '/js/templates/main/partials/directive-testWindow.html',
                controller: ['$scope', 'CodeProblem', 'GameAction', function ($scope, CodeProblem, GameAction) {
                    $scope.runTest = function () {
                        CodeProblem.runTest().then(function (result) {
                            console.log(result);
                        });
                    };
                }],
                link: function (scope, elem, attrs) {

                }
            };
        }]);
});
