/**
 * Auth Service
 *
 * @author  :: Jeff Lee
 * @created :: 2016/01/26
 */

define(['auth/app', 'angularFire', 'angularCookies'], function (Auth) {

	return Auth

		.service('Auth', ['$rootScope', '$firebaseAuth', '$cookies', '$state', function ($rootScope, $firebaseAuth, $cookies, $state) {

			var ref = new Firebase("https://code-smash.firebaseio.com");

			function _saveUserObject (userData) {
				var userRef = ref.child("users");

				userRef.once('value', function (snapshot) {
					if (!snapshot.hasChild(userData.uid)) {
						var user = _omit(userData, ['token', 'expires', 'facebook.accessToken']);
						user.record = { win: 0, lose: 0 };
						userRef.child(userData.uid).set(user);
					}
				});
			}

			function _omit (obj, props) {
				var returnObj = $.extend(true, {}, obj);
				delete returnObj.token;
				delete returnObj.expires;
				delete returnObj.facebook.accessToken;
				return returnObj;
			}

            return {
                login: function (provier) {
					provider = provier || 'facebook';

					var auth = $firebaseAuth(ref);
					auth.$authWithOAuthPopup(provider).then(function (authData) {
						$rootScope.currentUser = authData;
						$cookies.put('user', JSON.stringify(authData));

						_saveUserObject(authData);

						if ($rootScope.originalState) {
							$state.go($rootScope.originalState.state, $rootScope.originalState.params);
							delete $rootScope.originalState;
						}
					}).catch(function (error) {
						console.log("Authentication failed:", error);
					});
                },
                logout: function () {

                }
            }
		}]);
});
