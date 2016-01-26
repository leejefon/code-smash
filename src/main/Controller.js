/**
 * Main Controller
 *
 * @author  :: Jeff Lee
 * @created :: 2016/01/25
 */

define(['angular'], function (angular) {

	return angular.module('Main.controllers', [])

		.controller('MainController', ['$scope', '$state', '$stateParams', function ($scope, $state, $stateParams) {

			$scope.home = function () {

			};

			$scope.game = function () {

			};

			$scope.init = (function () {
				if ($state.current.action) {
					$scope[$state.current.action]();
				}
			})();
		}]);
});
