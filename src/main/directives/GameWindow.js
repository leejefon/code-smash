/**
 * GameWindow Directive
 *
 * @author  :: Jeff Lee
 * @created :: 2016/01/26
 */

define([
    'main/directives',
    'main/services/GameAction'
], function (MainDirectives) {

    return MainDirectives

        .directive('gameWindow', [function () {
            return {
                restrict: 'E',
                replace: true,
                templateUrl: '/js/templates/main/partials/directive-gameWindow.html',
                controller: ['$scope', 'GameAction', function ($scope, GameAction) {

                }],
                link: function (scope, elem, attrs) {

                }
            };
        }]);
});
