/**
 * GameAction Service
 *
 * @author  :: Jeff Lee
 * @created :: 2016/01/18
 */

define(['main/services'], function (MainServices) {

	return MainServices

		.factory('Game', ['$q', '$firebaseObject', function ($q, $firebaseObject) {

			var gameRef = new Firebase('https://code-smash.firebaseio.com/games')

			var availableGames = ['default'];

			var availableGameObjects = [];

			require(availableGames.map(function (game) {
				return 'games/' + game + '/index';
			}), function () {
				availableGameObjects = arguments;

				function loadCSS (href) {
				     var cssLink = $("<link rel='stylesheet' type='text/css' href='" + href + "'>");
				     $("head").append(cssLink);
				}
			});

			function _genSid (len) {
				len = len || 64;
				return Math.random().toString(35).substr(2, len);
			}

            return {
				bindGameData: function (scope, sessionId) {
					var sessionRef = new Firebase('https://code-smash.firebaseio.com/games/' + sessionId);
					return $firebaseObject(sessionRef).$bindTo(scope, 'gameData');
				},
				createGame: function (params) {
					var game = {
						sessionId: _genSid(),
						problems: params.problems,
						players: {
							player1: {
								uid: params.uid,
								character: _selectCharacter(),
								hp: 100
							}
						},
						settings: {
							game: _selectGame(),
							background: _selectBackground()
						}
					};

					return $q(function (resolve, reject) {
						var newGame = {};
						newGame[game.sessionId] = game;
						gameRef.set(newGame);
						resolve(game.sessionId);
					});
				},
				retrieveGame: function (sessionId, uid) {
					return $q(function (resolve, reject) {
						gameRef.once('value', function (snapshot) {
							if (snapshot.hasChild(sessionId)) {
								var game = snapshot.val()[sessionId];

								if (game.players.player2) { // NOTE: already got 2 players
									reject();
								} else {
									game.players.player2 = {
										uid: uid,
										character: _selectCharacter(),
										hp: 100
									};

									gameRef.child(sessionId + '/players').set(game.players, function () {
										resolve(game.sessionId);
									});
								}
							} else {
								reject();
							}
						});
					});
				},
				attack: function () {

				},
				hurt: function () {

				},
				win: function () {

				},
				lose: function () {

				}
            };
		}]);
});
