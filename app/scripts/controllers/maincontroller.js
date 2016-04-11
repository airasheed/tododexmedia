(function () {
    'use strict';


    /**
     * @ngdoc function
     * @name todoDexMediaApp.controller:MaincontrollerCtrl
     * @description
     * # MaincontrollerCtrl
     * Controller of the todoDexMediaApp
     */
    angular.module('todoDexMediaApp')
        .controller('MainController', MainController);

    //////////////////////////////////////////////////////////////

    MainController.$inject = ['$scope', '$location','UserService'];

    function MainController ($scope,$location,UserService) {
      // Load in User Model
      $scope.user = UserService;
      $scope.user.loggedIn = true;
      // Retain active tab (todo or completed)
      $scope.isActive = function(route) {
           return route === $location.path();
      };
    }
})();