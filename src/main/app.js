/**
 * Main App
 *
 * @author  :: Jeff Lee
 * @created :: 2016/01/25
 */

define([
	'angular',
	'angularLoadingBar',
	'main/Controller',
    'main/Routes'
], function (angular) {

	return angular.module('Main', [
		'chieffancypants.loadingBar',
		'Main.controllers',
        'Main.routes'
	]);
});
