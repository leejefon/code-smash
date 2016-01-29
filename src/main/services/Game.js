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

			var currentGameObject = null;

			require(availableGames.map(function (game) {
				return 'games/' + game + '/index';
			}), function () {
				availableGameObjects = $.extend(true, [], arguments);
			});

			function _loadCSS (game) {
				 var cssLink = $("<link rel='stylesheet' type='text/css' href='/js/games/" + game + "/style.css' />");
				 $("head").append(cssLink);
			}

			function _genSid (len) {
				len = len || 64;
				return Math.random().toString(35).substr(2, len);
			}

			function _randomElement (arr) {
			    return arr[Math.floor(Math.random() * arr.length)];
			};

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
								character: null,
								hp: 100
							}
						},
						settings: {
							game: null,
							background: null
						},
						status: 'WAITING_FOR_PLAYER_2'
					};

					return $q(function (resolve, reject) {
						currentGameObject = _randomElement(availableGameObjects);
						game.settings.game = currentGameObject.name;
						game.settings.background = _randomElement(currentGameObject.backgrounds.list);
						game.players.player1.character = _randomElement(currentGameObject.characters.list);

						var newGame = {};
						newGame[game.sessionId] = game;
						gameRef.set(newGame);
						resolve(game.sessionId);
					});
				},
				retrieveGame: function (sessionId, uid) {
					// TODO: check player ID equals player1
					return $q(function (resolve, reject) {
						gameRef.once('value', function (snapshot) {
							if (snapshot.hasChild(sessionId)) {
								var game = snapshot.val()[sessionId];

								if (game.players.player2) { // NOTE: already got 2 players
									reject();
								} else {
									availableGameObjects.forEach(function (gameObj) {
										if (gameObj.name === game.settings.game) {
											currentGameObject = gameObj;
										}
									});

									game.players.player2 = {
										uid: uid,
										character: _randomElement(currentGameObject.characters.list),
										hp: 100
									};
									game.status = 'PLAYING';

									gameRef.child(sessionId).set(game, function () {
										resolve(game.sessionId);
									});
								}
							} else {
								reject();
							}
						});
					});
				},
				loadGame: function (sessionId) {
					// TODO: retrieve game might not finish, so current game obj might not exist
					return $q(function (resolve, reject) {
						gameRef.once('value', function (snapshot) {
							var game = snapshot.val()[sessionId];
							_loadCSS(game.settings.game);
							currentGameObject.backgrounds.set(game.settings.background);
							$.each(game.players, function (playerId, player) {
								currentGameObject.characters[player.character].setPlayer(playerId);
							});
						});
					});
				},
				gameUpdate: function (newState, oldState) {
					if (!oldState.players.player2 && newState.players.player2) {
						currentGameObject.characters[newState.players.player2.character].setPlayer('player2');
					}
				},
				win: function () {

				},
				lose: function () {

				}
            };
		}]);
});
