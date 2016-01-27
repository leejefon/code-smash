/**
 * Auth App
 *
 * @docs    :: http://brewhouse.io/blog/2014/12/09/authentication-made-simple-in-single-page-angularjs-applications.html
 * @author  :: Jeff Lee
 * @created :: 2016/01/25
 */

define([
	'angular',
	'angularLoadingBar',
	'angularCookies',
	'auth/Service'
], function (angular) {

	return angular.module('Auth', [
		'chieffancypants.loadingBar',
		'ngCookies',
		'firebase',
		'Auth'
    ]).run(['$rootScope', '$state', '$cookies', 'Auth', function ($rootScope, $state, $cookies, Auth) {
        $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
            var requireLogin = toState.requireLogin;

			if ($cookies.get('user')) {
				$rootScope.currentUser = JSON.parse($cookies.get('user'));
			}

            if (requireLogin && typeof $rootScope.currentUser === 'undefined') {
                event.preventDefault();
				$rootScope.originalState = {
					state: toState,
					params: toParams
				};
				Auth.login();
            }
        });
    }]);
});
