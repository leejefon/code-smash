/**
 * EditorWindow Directive
 *
 * @author  :: Jeff Lee
 * @created :: 2016/01/25
 */

define(['main/directives', 'angularUIAce'], function (MainDirectives) {

    return MainDirectives

        .directive('editorWindow', [function () {
            return {
                restrict: 'E',
                replace: true,
                templateUrl: '/js/templates/main/partials/directive-editorWindow.html',
                controller: ['$scope', 'CodeProblem', 'GameAction', function ($scope, CodeProblem, GameAction) {
                    $scope.aceOptions = {
                        mode: 'javascript'
                    };

                    $scope.code = 'function main () { \n' +
                        '    // put your code here\n' +
                        '}\n';
                }],
                link: function (scope, elem, attrs) {

                }
            };
        }]);
});
