(function () {
    'use strict';

    /**
     * @ngdoc service
     * @name todoDexMediaApp.todoService
     * @description
     * # todoService
     * Factory in the todoDexMediaApp.
     */
    angular
        .module('todoDexMediaApp')
        .factory('todoService', todoService);


    function todoService() {

        var todos = {
            list: [],
            nextId: 0,
            save: save,
            remove: remove,
            edit: edit
        };

        return todos;

        /////////////////////////////////////////////////
        // Function Details...
        /////////////////////////////////////////////////


        function remove(todo) {
            _.remove(todos.list, function (list) {
                return list.id === todo.id;
            });
        }

        function save(todo) {
            todo.id = todos.nextId++;
            todos.list.push(todo);
        }

        function edit(todo) {
            //find index of todo
            var idx = findIndex(todo);
            todos.list.splice(idx, 1, todo);
        }

        // Helper: Use lodash to find a todo by ID
        function findIndex(todo) {
            var index = _.indexOf(todos.list, _.find(todos.list, {id: todo.id}));
            return index;
        }
    }

})();