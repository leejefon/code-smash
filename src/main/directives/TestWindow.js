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
                controller: ['$scope', '$rootScope', 'CodeProblem', function ($scope, $rootScope, CodeProblem) {
                    $scope.runTest = function () {
                        CodeProblem.runTest().then(function (result) {
                            console.log(result);
                        });
                    };

                    $scope.nextProblem = function () {
                        // TODO: update hp, but need to figure out which player i am now $rootScope.gameData
                        console.log($rootScope.playerId);
                        if ($rootScope.playerId === 'player1') {
                            $rootScope.gameData.players['player2'].hp -= 25;
                        } else {
                            $rootScope.gameData.players['player1'].hp -= 25;
                        }
                    };
                }],
                link: function (scope, elem, attrs) {

                }
            };
        }]);
});
