/**
 * Main Controller
 *
 * @author  :: Jeff Lee
 * @created :: 2016/01/25
 */

define(['angular', 'auth/Service'], function (angular) {

	return angular.module('Main.controllers', ['Auth'])

		.controller('MainController', ['$scope', '$state', '$stateParams', 'Auth', 'CodeProblem', 'Game',
			function ($scope, $state, $stateParams, Auth, CodeProblem, Game) {

				$scope.home = function () {

				};

				$scope.game = function () {

				};

				$scope.loginFacebook = function () {
					Auth.login();
				};

				$scope.newGame = function () {
					$state.go('game', { gameSessionId: 'randomStr' });
				};

				$scope.init = (function () {
					if ($state.current.action) {
						$scope[$state.current.action]();
					}
				})();
			}
		]);
});
