/**
 * TestWindow Directive
 *
 * @author  :: Jeff Lee
 * @created :: 2016/01/25
 */

define([
    'main/directives',
    'main/services/CodeProblem',
    'main/services/Game'
], function (MainDirectives) {

    return MainDirectives

        .directive('testWindow', [function () {
            return {
                restrict: 'E',
                replace: true,
                templateUrl: '/js/templates/main/partials/directive-testWindow.html',
                controller: ['$scope', 'CodeProblem', 'Game', function ($scope, CodeProblem, Game) {
                    $scope.runTest = function () {
                        CodeProblem.runTest().then(function (result) {
                            console.log(result);
                        });
                    };

                    $scope.nextProblem = function () {
                        return false;
                    };
                }],
                link: function (scope, elem, attrs) {

                }
            };
        }]);
});
