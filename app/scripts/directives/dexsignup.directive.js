'use strict';

/**
 * Dex Sign Up Directive
 * @namespace Directives
 * */
angular.module('todoDexMediaApp')
  .directive('dexSignUp', SignUp);

/**
 * @namespace SignUp
 * @desc Reusable sign up form that can be used to create new users
 * @memberOf Directives
 * */
function SignUp() {

    var directive =  {
        templateUrl: '/views/templates/dexsignup.view.html',
        restrict: 'E',
        scope: {},
        controller: 'SignUpController'
    };

    return directive;
}