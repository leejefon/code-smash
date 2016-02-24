/**
 * GameWindow Directive
 *
 * @author  :: Jeff Lee
 * @created :: 2016/01/26
 */

define([
    'main/directives',
    'main/services/Game'
], function (MainDirectives) {

    return MainDirectives

        .directive('gameWindow', [function () {
            return {
                restrict: 'E',
                replace: true,
                templateUrl: '/js/templates/main/partials/directive-gameWindow.html',
                controller: ['$scope', '$rootScope', '$stateParams', 'Game', function ($scope, $rootScope, $stateParams, Game) {
                    if ($rootScope.gameData) {
                        Game.loadGame($stateParams.gameSessionId).then(function () {
                            $('#waitingForPlayer').show();
                        });
                    }
                }],
                link: function (scope, elem, attrs) {

                }
            };
        }]);
});
