/**
 * Main Routes
 *
 * @author  :: Jeff Lee
 * @created :: 2016/01/25
 */

define(['angular', 'angularUIRouter'], function (angular) {

	return angular.module('Main.routes', ['ui.router'])

		.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {
			$stateProvider
				.state('home', {
					url: '/',
					templateUrl: '/js/templates/main/partials/home.html',
					controller: 'MainController',
					action: 'home',
					requireLogin: false
				})

				.state('ranking', {
					url: '/ranking',
					templateUrl: '/js/templates/main/partials/ranking.html',
					controller: 'MainController',
					action: 'ranking',
					requireLogin: false
				})

				.state('join', {
					url: '/join',
					templateUrl: '/js/templates/main/partials/join.html',
					controller: 'MainController',
					action: 'join',
					requireLogin: true
				})

                .state('game', {
					url: '/:gameSessionId',
					templateUrl: '/js/templates/main/partials/game.html',
					controller: 'MainController',
					action: 'game',
					requireLogin: true
				});

			$urlRouterProvider.otherwise('/');

			// $locationProvider.html5Mode(true);
		}]);
});
