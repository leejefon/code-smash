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
        bootstrap: '../vendor/bootstrap/dist/js/bootstrap.min',

        angular: '../vendor/angular/angular',
        angularUIRouter: '../vendor/angular-ui-router/release/angular-ui-router.min',
        angularLoadingBar: '../vendor/angular-loading-bar/build/loading-bar'
    },
    shim: {
        jquery: { exports: '$' },
        toastr: ['jquery'],

        angular: { exports: 'angular', deps: ['jquery'] },
        angularUIRouter: ['angular'],
        angularLoadingBar: ['angular']
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
