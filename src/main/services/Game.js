/**
 * GameAction Service
 *
 * @author  :: Jeff Lee
 * @created :: 2016/01/18
 */

define(['main/services'], function (MainServices) {

	return MainServices

		.factory('Game', ['$firebaseObject', function ($firebaseObject) {

			var gameRef = new Firebase('https://code-smash.firebaseio.com/games')

			var currentGame = {};

            return {
				setup: function (params) {

				},
				attack: function () {

				},
				dodge: function () {

				},
				win: function () {

				},
				lose: function () {

				},
				listGames: [
					'default'
				]
            };
		}]);
});
