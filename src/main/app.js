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
    'main/Routes',
	'main/directives/GameWindow',
	'main/directives/TestWindow',
	'main/directives/EditorWindow'
], function (angular) {

	return angular.module('Main', [
		'chieffancypants.loadingBar',
		'Main.controllers',
        'Main.routes',
		'Main.directives'
	]);
});
