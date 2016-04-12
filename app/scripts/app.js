/*
* Main Module
* @namespace Modules
* */
(function () {
  'use strict';

  angular
    .module('todoDexMediaApp', [
      'ngAnimate',
      'ngCookies',
      'ngResource',
      'ngRoute',
      'ngSanitize',
      'ngTouch',
      'pageslide-directive'
    ])
    .config(Config);

  Config.$inject = ['$routeProvider'];
  function Config ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.view.html'
      })
      .when('/completed', {
        templateUrl: 'views/completed.view.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  }
})();