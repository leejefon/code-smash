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

			var currentPlayerId = '';

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

			function _randomElement (arr, exclude) {
				if (typeof exclude === 'string') {
					exclude = [exclude];
				}
				exclude = exclude || [];
			    return arr.filter(function (item) {
					return exclude.indexOf(item) === -1;
				})[Math.floor(Math.random() * (arr.length - exclude.length))];
			};

            return {
				bindGameData: function (scope, sessionId) {
					var sessionRef = new Firebase('https://code-smash.firebaseio.com/games/' + sessionId);
					return $firebaseObject(sessionRef).$bindTo(scope, 'gameData');
				},
				currentPlayerId: function () {
					return currentPlayerId;
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
						currentPlayerId = 'player1';
						currentGameObject = _randomElement(availableGameObjects);
						game.settings.game = currentGameObject.name;
						game.settings.background = _randomElement(currentGameObject.backgrounds.list);
						game.players.player1.character = _randomElement(currentGameObject.characters.list);

						gameRef.child(game.sessionId).set(game);
						resolve(game.sessionId);
					});
				},
				retrieveGame: function (sessionId, uid) {
					// TODO: check player ID equals player1
					return $q(function (resolve, reject) {
						gameRef.once('value', function (snapshot) {
							if (snapshot.hasChild(sessionId)) {
								var game = snapshot.val()[sessionId];

								if (game.status === 'PLAYING') {
									// NOTE: already got 2 players
									reject('Game is Full');
								} else {
									currentPlayerId = 'player2';
									availableGameObjects.forEach(function (gameObj) {
										if (gameObj.name === game.settings.game) {
											currentGameObject = gameObj;
										}
									});

									game.players.player2 = {
										uid: uid,
										character: _randomElement(currentGameObject.characters.list, game.players.player1.character),
										hp: 100
									};
									game.status = 'PLAYING';

									gameRef.child(sessionId).set(game, function () {
										resolve(game.sessionId);
									});
								}
							} else {
								reject('Game not found');
							}
						});
					});
				},
				loadGame: function (sessionId) {
					return $q(function (resolve, reject) {
						gameRef.once('value', function (snapshot) {
							var game = snapshot.val()[sessionId];
							_loadCSS(game.settings.game);
							currentGameObject.backgrounds.set(game.settings.background);
							$.each(game.players, function (playerId, player) {
								currentGameObject.characters[player.character].setPlayer(playerId);
							});
							resolve();
						});
					});
				},
				gameUpdate: function (newState, oldState) {
					if (!oldState.players.player2 && newState.players.player2) {
						currentGameObject.characters[newState.players.player2.character].setPlayer('player2');
						$('#waitingForPlayer').hide();
					}

					if (oldState.players.player1 && newState.players.player1 && oldState.players.player1.hp !== newState.players.player1.hp) {
						currentGameObject.characters[newState.players.player1.character].attack('player2', 'player1');
					} else if (oldState.players.player2 && newState.players.player2 && oldState.players.player2.hp !== newState.players.player2.hp) {
						currentGameObject.characters[newState.players.player2.character].attack('player1', 'player2');
					}

					if (newState.players.player1 && newState.players.player1.hp === 0) {
						if (currentPlayerId === 'player1') {
							currentGameObject.characters[newState.players.player1.character].lose();
						} else {
							currentGameObject.characters[newState.players.player2.character].win();
						}
					} else if (newState.players.player2 && newState.players.player2.hp === 0) {
						if (currentPlayerId === 'player2') {
							currentGameObject.characters[newState.players.player2.character].lose();
						} else {
							currentGameObject.characters[newState.players.player1.character].win();
						}
					}
				},
				getRanking: function () {
					var userRef = new Firebase('https://code-smash.firebaseio.com/users');

					return $q(function (resolve, reject) {
						userRef.orderByKey().once('value', function (snapshot) {
							var ranking = [];
							angular.forEach(snapshot.val(), function (user) {
								var temp = $.extend(true, {}, user);
								if (temp.record.win + temp.record.lose === 0) {
									temp.record.ratio = 0;
								} else {
									temp.record.ratio = temp.record.win / (temp.record.win + temp.record.lose);
								}
								ranking.push(temp);
							});
							ranking.sort(function (a, b) {
								return b.record.ratio - a.record.ratio;
							});
							resolve(ranking);
						});
					});
				},
				getAvailableGames: function () {
					return $q(function (resolve, reject) {
						gameRef.orderByChild("status").limitToFirst(20).once('value', function (snapshot) {
							var games = [];
							angular.forEach(snapshot.val(), function (value) {
								if (value.status === 'WAITING_FOR_PLAYER_2') {
									games.push({
										player: value.players.player1,
										gameId: value.sessionId
									});
								}
							});
							resolve(games);
						});
					});
				},
				getPlayerInfo: function (uid) {
					var userRef = new Firebase('https://code-smash.firebaseio.com/users');

					return $q(function (resolve, reject) {
						userRef.orderByKey().startAt(uid).once('value', function (snapshot) {
							resolve(snapshot.val()[uid].facebook);
						});
					});
				}
            };
		}]);
});
