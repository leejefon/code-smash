/**
 * Main Controller
 *
 * @author  :: Jeff Lee
 * @created :: 2016/01/25
 */

define(['angular', 'toastr', 'auth/Service'], function (angular, toastr) {

	return angular.module('Main.controllers', ['Auth'])

		.controller('MainController', ['$scope', '$rootScope', '$state', '$stateParams', '$q', 'Auth', 'CodeProblem', 'Game',
			function ($scope, $rootScope, $state, $stateParams, $q, Auth, CodeProblem, Game) {

				$scope.home = function () {

				};

				$scope.game = function () {
					if (!$rootScope.gameData) {
						Game.retrieveGame($stateParams.gameSessionId, $rootScope.currentUser.uid).then(function (sessionId) {
							return Game.bindGameData($rootScope, sessionId);
						}).then(function () {
							// console.log($rootScope.gameData);
							$rootScope.$watch('gameData', function (newVal, oldVal) {
								Game.gameUpdate(newVal, oldVal);
							}, true);
						}).catch(function () {
							toastr.error('Game not found');
						});
					}
				};

				$scope.ranking = function () {

				};

				$scope.join = function () {
					Game.getAvailablePlayers().then(function (players) {
						return $q.all(players.map(function (player) {
							return Game.getPlayerInfo(player.uid);
						}));
					}).then(function (players) {
						console.log(players);
					});

					// Game.getPlayerInfo('facebook:10153865385555480').then(function (player) {
					// 	console.log(player);
					// });
				};

				$scope.loginFacebook = function () {
					Auth.login();
				};

				$scope.newGame = function () {
					Game.createGame({
						uid: $rootScope.currentUser.uid,
						problems: CodeProblem.getRandomProblems()
					}).then(function (sessionId) {
						return Game.bindGameData($rootScope, sessionId);
					}).then(function () {
						$rootScope.$watch('gameData', function (newVal, oldVal) {
							Game.gameUpdate(newVal, oldVal);
						}, true);

						$state.go('game', { gameSessionId: $rootScope.gameData.sessionId });
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
