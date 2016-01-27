/**
 * Main Controller
 *
 * @author  :: Jeff Lee
 * @created :: 2016/01/25
 */

define(['angular', 'auth/Service'], function (angular) {

	return angular.module('Main.controllers', ['Auth'])

		.controller('MainController', ['$scope', '$rootScope', '$state', '$stateParams', 'Auth', function ($scope, $rootScope, $state, $stateParams, Auth) {

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
		}]);
});
