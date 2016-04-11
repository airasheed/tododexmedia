'use strict';

/**
 * @ngdoc directive
 * @name todoDexMediaApp.directive:dexSignUp
 * @description
 * # dexSignUp
 */
angular.module('todoDexMediaApp')
  .directive('dexSignUp', function () {
    return {
        templateUrl: '/views/templates/dex-sign-up.html',
        restrict: 'E',
        scope: {},
        controller: DexSignUpController,
        link: LinkSignUp
    };


      /////////////////////////////////////////////////////////
      // Hide ImplementationDetails
      /////////////////////////////////////////////////////////

      //Link function
      function LinkSignUp(scope, element, attrs) {

      }
      //Sign Up Controller
      function DexSignUpController($scope,UserService) {
          $scope.user = UserService;
          $scope.signUp = signUp;

          function signUp(user) {
              UserService.createUser(user.name, user.email, user.password);
          }
      }


  });
