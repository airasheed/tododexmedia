/**
 * Sign Up Controller
 * @namespace Controllers
 * */
(function () {
  'use strict';


  angular.module('todoDexMediaApp')
    .controller('SignUpController', SignUpController);


  SignUpController.$inject = ['$scope', 'UserService'];

  /**
   * @namespace SignUpController
   * @desc Exposes an API for users to Sign Up
   * @memberOf Controllers
   * */
  function SignUpController($scope, UserService) {
    //Binded entities
    $scope.user = UserService;

    //Methods
    $scope.signUp = signUp;

    ////////////////////////////////// Implementation Details

    /**
     * @name signUp
     * @desc Creates new user
     * @params {Object} user User object passed to UserService
     * @memberOf Controllers.SignUpController
     * */
    function signUp(user) {
      if(!user.name || !user.email || !user.password) {
        return;
      }
      UserService.createUser(user.name, user.email, user.password);
    }
  }
})();