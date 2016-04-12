/**
 * Todo Factory
 * @namespace Factories
 * */
(function () {
    'use strict';
    angular
        .module('todoDexMediaApp')
        .factory('TodoService', TodoService);

    /**
    * @namespace TodoService
    * @desc Application Wide Todo Service. Will return user's todo list items and public methods
    * @memberOf Factories
    * */
    function TodoService() {
        var todos = {
            list: [],
            nextId: 0,
            save: save,
            remove: remove,
            edit: edit
        };
        loadListsFromServer(); // Mock load todo list from server...
        return todos;

        //////////////////////////////////// Implementation Details

        /**
        * @name remove
        * @desc Removes todo item from todo list array
        * @param {Object} todo Todo object to remove
        * @memberOf Factories.TodoService
        * */
        function remove(todo) {
            _.remove(todos.list, function (list) {
                return list.id === todo.id;
            });
        }

        /**
         * @name save
         * @desc Inserts new todo item into todo list array
         * @param {Object} todo Todo object from ng-repeat
         * @memberOf Factories.TodoService
         * */
        function save(todo) {
            todo.id = todos.nextId++;
            todo.completed = false;
            todos.list.push(todo);
        }

        /**
         * @name edit
         * @desc Edit existing todo item in todo list array
         * @param {Object} todo Todo object from ng-repeat
         * @memberOf Factories.TodoService
         * */
        function edit(todo) {
            //find index of todo
            var idx = findIndex(todo);
            todos.list.splice(idx, 1, todo);
        }

        /**
         * @name findIndex
         * @desc Uses lodash to find id of existing todo item in todo list array
         * @param {Object} todo Todo object from ng-repeat
         * @returns {number}
         * @memberOf Factories.TodoService
         * */
        function findIndex(todo) {
            var index = _.indexOf(todos.list, _.find(todos.list, {id: todo.id}));
            return index;
        }

        /**
         * @name loadListsFromServer
         * @desc For demo purposes, mock loading from server...
         * @returns {number}
         * @memberOf Factories.TodoService
         * */
        function loadListsFromServer() {
            // Would use $http or $resource services for loading from server or REST API...
            // Mocking for homework purposes...
            todos.list = [
                {id:0, title: 'Finish Dex Media Homework', note:'This is a very', due: new Date(), completed: false},
                {id:1, title: 'Consider Architecture and Communication', note:'This is a very', completed: false},
                {id:2, title: 'Write Controllers', note:'This is a very', due: new Date(), completed: false},
                {id:3, title: 'Write Directives', note:'This is a very', due: new Date(), completed: false},
                {id:4, title: 'Write Unit Tests', note:'This is a very', due: new Date(), completed: true},
                {id:5, title: 'Refactor Code', note:'This is a very', due: new Date(), completed: true}
            ];
            todos.nextId = 6;
        }
    }

})();