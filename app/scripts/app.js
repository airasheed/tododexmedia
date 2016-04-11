'use strict';

/**
 * @ngdoc overview
 * @name todoDexMediaApp
 * @description
 * # todoDexMediaApp
 *
 * Main module of the application.
 */
angular
  .module('todoDexMediaApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
      })
      .when('/completed', {
        templateUrl: 'views/completed.html',
        controller: 'TodoCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
