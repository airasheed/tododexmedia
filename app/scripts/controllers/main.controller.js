/**
 * Main Controller
 * @namespace Controllers
 * */
(function () {
    'use strict';

    angular.module('todoDexMediaApp')
        .controller('MainController', MainController);

    //////////////////////////////////////////////////////////////

    MainController.$inject = ['$scope', '$location','$timeout','UserService'];

  /**
   * @namespace MainController
   * @desc Application Wide Controller. Controls application wide functions, like user authentication.
   * @memberOf Controllers
   * */
    function MainController ($scope,$location,$timeout,UserService) {

      // Binded Values
      $scope.user = UserService;
      $scope.user.loggedIn = false;
      $scope.checked = false;

      //Methods
      $scope.logOut = logOut;
      $scope.isActive = isActive;
      $scope.toggle = toggle;

      /////////////////////////// Implementation Details

    /**
       * @name logOut
       * @desc Checks current routes and sets active
       * @param route Current route
       * @memberOf Controllers.MainController
       * */
      function logOut() {
        toggle();
        $timeout(function () {
          $scope.user.loggedIn = false;
        }, 100);
      }

    /**
       * @name isActive
       * @desc Checks current routes and sets active
       * @param route Current route
       * @memberOf Controllers.MainController
       * */
      function isActive(route) {
        return route === $location.path();
      }

    /**
       * @name toggle
       * @desc Changes toggle state for pageslide
       * @memberOf Controllers.MainController
       * */
      function toggle() {
        $scope.checked = !$scope.checked;
      }

    }
})();