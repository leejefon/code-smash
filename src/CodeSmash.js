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
        aceTheme: '../vendor/ace-builds/src-min-noconflict/theme-tomorrow_night_blue',

        angular: '../vendor/angular/angular',
        angularCookies: '../vendor/angular-cookies/angular-cookies.min',
        angularUIRouter: '../vendor/angular-ui-router/release/angular-ui-router.min',
        angularUIAce: '../vendor/angular-ui-ace/ui-ace.min',
        angularLoadingBar: '../vendor/angular-loading-bar/build/loading-bar',
        angularFire: '../vendor/angularfire/dist/angularfire.min',

        angularAnimate: '../vendor/angular-animate/angular-animate.min',
        angularAria: '../vendor/angular-aria/angular-aria.min',
        angularMessages: '../vendor/angular-messages/angular-messages.min',
        angularMaterial: '../vendor/angular-material/angular-material.min',

        mocha: '../vendor/mocha/mocha',
        chai: '../vendor/chai/chai',
    },
    shim: {
        jquery: { exports: '$' },
        toastr: ['jquery'],

        angular: { exports: 'angular', deps: ['jquery'] },
        angularUIRouter: ['angular'],
        angularUIAce: ['angular', 'ace', 'aceModeJavaScript', 'aceTheme'],
        angularLoadingBar: ['angular'],
        angularFire: ['angular', 'firebase'],

        angularAnimate: ['angular'],
        angularAria: ['angular'],
        angularMessages: ['angular'],
        angularMaterial: ['angular', 'angularAnimate', 'angularAria', 'angularMessages'],

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
