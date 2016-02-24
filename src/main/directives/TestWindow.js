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
                controller: ['$scope', '$rootScope', 'CodeProblem', 'Game', function ($scope, $rootScope, CodeProblem, Game) {
                    $scope.runTest = function () {
                        $('#mocha').empty();
                        CodeProblem.runTest().then(function (result) {
                            if (result.failures === 0) {
                                $('#nextProblemBtn').prop('disabled', false);
                            }
                        });
                    };

                    $scope.win = function () {
                        Game.win();
                    };

                    $scope.nextProblem = function () {
                        if (Game.currentPlayerId() === 'player1') {
                            $rootScope.gameData.players['player2'].hp -= 20;
                        } else {
                            $rootScope.gameData.players['player1'].hp -= 20;
                        }

                        CodeProblem.loadProblem().then(function (problem) {
                            $rootScope.code = problem.text;
                            $('#mocha').empty();
                            $('#nextProblemBtn').prop('disabled', true);
                        });
                    };
                }],
                link: function (scope, elem, attrs) {

                }
            };
        }]);
});
