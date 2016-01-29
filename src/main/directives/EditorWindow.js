/**
 * EditorWindow Directive
 *
 * @author  :: Jeff Lee
 * @created :: 2016/01/25
 */

define([
    'main/directives',
    'angularUIAce',
    'main/services/CodeProblem'
], function (MainDirectives) {

    return MainDirectives

        .directive('editorWindow', [function () {
            return {
                restrict: 'E',
                replace: true,
                templateUrl: '/js/templates/main/partials/directive-editorWindow.html',
                controller: ['$scope', 'CodeProblem', function ($scope, CodeProblem) {
                    $scope.aceOptions = {
                        mode: 'javascript',
                        theme: 'tomorrow_night_blue'
                    };

                    CodeProblem.loadProblem('q1').then(function (problem) {
                        $scope.code = problem.text;

                        $scope.$watch('code', function (newValue, oldValue) {
                            CodeProblem.updateUserSolution(newValue);
                        });
                    });
                }],
                link: function (scope, elem, attrs) {

                }
            };
        }]);
});
