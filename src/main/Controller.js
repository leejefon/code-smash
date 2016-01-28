/**
 * Main Controller
 *
 * @author  :: Jeff Lee
 * @created :: 2016/01/25
 */

define(['angular', 'toastr', 'auth/Service'], function (angular, toastr) {

	return angular.module('Main.controllers', ['Auth'])

		.controller('MainController', ['$scope', '$rootScope', '$state', '$stateParams', 'Auth', 'CodeProblem', 'Game',
			function ($scope, $rootScope, $state, $stateParams, Auth, CodeProblem, Game) {

				$scope.home = function () {

				};

				$scope.game = function () {
					if (!$scope.gameData) {
						Game.retrieveGame($stateParams.gameSessionId, $rootScope.currentUser.uid).then(function (sessionId) {
							return Game.bindGameData($scope, sessionId);
						}).then(function () {
							// console.log($scope.gameData);
						}).catch(function () {
							toastr.error('Game not found');
						});
					}
				};

				$scope.loginFacebook = function () {
					Auth.login();
				};

				$scope.newGame = function () {
					Game.createGame({
						uid: $rootScope.currentUser.uid,
						problems: CodeProblem.getRandomProblems()
					}).then(function (sessionId) {
						return Game.bindGameData($scope, sessionId);
					}).then(function () {
						// console.log($scope.gameData);
						$state.go('game', { gameSessionId: 'sessionId' });
					});
				};

				$scope.init = (function () {
					if ($state.current.action) {
						$scope[$state.current.action]();
					}
				})();
			}
		]);
});
