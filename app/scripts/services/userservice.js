(function () {
    'use strict';

    /**
     * @ngdoc service
     * @name todoDexMediaApp.userService
     * @description
     * # userService
     * Factory in the todoDexMediaApp.
     */
    angular
        .module('todoDexMediaApp')
        .factory('userService', userService);

    function userService () {
        var user = {
            logIn: logIn,
            logOut: logOut,
            createUser: createUser,
            loggedIn: false
        };

        return user;

        /////////////////////////////////////////////////
        // Function Details...
        /////////////////////////////////////////////////


        function createUser(name,email,password) {
            user.name = name;
            user.email = email;
            user.password = password;
        }

        function logIn(email,password){
            user.email = email;
            user.password = password;
            user.loggedIn = true;
        }

        function logOut() {
            user.name = undefined;
            user.loggedIn = false;
        }
    }
})();

