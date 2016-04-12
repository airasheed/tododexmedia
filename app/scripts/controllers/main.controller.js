/*
 * Main Controller
 * @namespace Controllers
 * */
(function () {
    'use strict';

    angular.module('todoDexMediaApp')
        .controller('MainController', MainController);

    //////////////////////////////////////////////////////////////

    MainController.$inject = ['$scope', '$location','UserService'];

  /*
   * @namespace MainController
   * @desc Application Wide Controller. Controls application wide functions, like user authentication.
   * @memberOf Controllers
   * */
    function MainController ($scope,$location,UserService) {

      // Binded Values
      $scope.user = UserService;
      $scope.user.loggedIn = true;
      $scope.checked = false;

      //Methods
      $scope.isActive = isActive;
      $scope.toggle = toggle;

      /////////////////////////// Implementation Details

      /*
       * @name toggle
       * @desc Checks current routes and sets active
       * @param route Current route
       * @memberOf Controllers.MainController
       * */
      function isActive(route) {
        return route === $location.path();
      }

      /*
       * @name toggle
       * @desc Changes toggle state for pageslide
       * @memberOf Controllers.MainController
       * */
      function toggle() {
        $scope.checked = !$scope.checked;
      }

    }
})();