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
                controller: ['$scope', '$rootScope', 'CodeProblem', function ($scope, $rootScope, CodeProblem) {
                    $scope.aceOptions = {
                        mode: 'javascript',
                        theme: 'tomorrow_night_blue'
                    };

                    // NOTE: load first problem and watch
                    CodeProblem.loadProblem().then(function (problem) {
                        $rootScope.code = problem.text;

                        $rootScope.$watch('code', function (newValue, oldValue) {
                            CodeProblem.updateUserSolution(newValue);
                        });
                    });
                }],
                link: function (scope, elem, attrs) {

                }
            };
        }]);
});
