/*
 * User Factory
 * @namespace Factories
 * */
(function () {
    'use strict';


    angular
        .module('todoDexMediaApp')
        .factory('UserService', UserService);

    /*
     * @namespace UserService
     * @desc Application Wide User Service. Will return user's login status and public methods
     * @memberOf Factories
     * */
    function UserService () {
        var user = {
            logIn: logIn,
            logOut: logOut,
            createUser: createUser,
            loggedIn: false
        };

        return user;

        //////////////////////////////////// Implementation Details

        /*
         * @name createUser
         * @desc Creates new user
         * @param {String} name users name
         * @param {String} email users email address
         * @param {String} passoword users chosen password
         * @memberOf Factories.UserService
         * */
        function createUser(name,email,password) {
            user.name = name;
            user.email = email;
            user.password = password;
            user.loggedIn = true;
        }

        /*
         * @name logIn
         * @desc Creates new user
         * @param {String} email authentication email
         * @param {String} password authentication password
         * @memberOf Factories.UserService
         * */
        function logIn(email,password){
            user.email = email;
            user.password = password;
            user.loggedIn = true;
        }

        /*
         * @name logOut
         * @desc Creates new user
         * @param {String} email authentication email
         * @param {String} password authentication password
         * @memberOf Factories.UserService
         * */
        function logOut() {
            user.name = undefined;
            user.loggedIn = false;
        }
    }
})();

