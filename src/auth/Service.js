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

            return {
                login: function (provier) {
					provider = provier || 'facebook';

					var auth = $firebaseAuth(ref);
					auth.$authWithOAuthPopup(provider).then(function (authData) {
						$rootScope.currentUser = authData.facebook;
						$cookies.put('user', JSON.stringify(authData.facebook));

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
