/**
 * CodeSmash Home
 *
 * @author  :: Jeff Lee
 * @created :: 2016/01/25
 */

require.config({
    paths: {
        jquery: '../vendor/jquery/dist/jquery',
        toastr: '../vendor/toastr/toastr',
        firebase: '../vendor/firebase/firebase',
        ace: '../vendor/ace-builds/src-min-noconflict/ace',
        aceModeJavaScript: '../vendor/ace-builds/src-min-noconflict/mode-javascript',

        angular: '../vendor/angular/angular',
        angularUIRouter: '../vendor/angular-ui-router/release/angular-ui-router.min',
        angularUIAce: '../vendor/angular-ui-ace/ui-ace.min',
        angularLoadingBar: '../vendor/angular-loading-bar/build/loading-bar',
        angularFire: '../vendor/angularfire/dist/angularfire.min',

        mocha: '../vendor/mocha/mocha',
        chai: '../vendor/chai/chai',
    },
    shim: {
        jquery: { exports: '$' },
        toastr: ['jquery'],

        angular: { exports: 'angular', deps: ['jquery'] },
        angularUIRouter: ['angular'],
        angularUIAce: ['angular', 'ace', 'aceModeJavaScript'],
        angularLoadingBar: ['angular'],
        angularFire: ['angular', 'firebase'],

        mocha: { exports: 'mocha' },
        chai: { exports: 'chai' }
    },
    priority: ['jquery', 'angular']
});

require([
    'angular',
    'toastr',
    'main/app'
], function (angular, toastr, mainApp) {
    angular.element(document).ready(function () {
        angular.bootstrap(document, [
            mainApp.name
        ]);
    });

    toastr.options.positionClass = 'toast-bottom-right';
});
