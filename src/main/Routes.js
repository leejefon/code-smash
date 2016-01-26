/**
 * Main Routes
 *
 * @author  :: Jeff Lee
 * @created :: 2016/01/25
 */

define(['angular', 'angularUIRouter'], function (angular) {

	return angular.module('Main.routes', ['ui.router'])

		.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
			$stateProvider
				.state('home', {
					url: '/',
					templateUrl: '/js/templates/main/partials/home.html',
					controller: 'MainController',
					action: 'home'
				})

                .state('game', {
					url: '/:gameId',
					templateUrl: '/js/templates/main/partials/game.html',
					controller: 'MainController',
					action: 'game'
				});

			$urlRouterProvider.otherwise('/');
		}]);
});
