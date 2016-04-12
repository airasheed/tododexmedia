/**
 * Todo Controller
 * @namespace Controllers
 * */
(function () {
  'use strict';

  angular.module('todoDexMediaApp')
    .controller('TodoController', TodoController);


  TodoController.$inject = ['$scope', '$filter', 'TodoService'];

  /**
   * @namespace TodoController
   * @desc Exposes an API for users Todo Data. Used by dex-tod directive
   * @memberOf Controllers
   * */
  function TodoController($scope, $filter, TodoService) {

    //Binded Entities
    $scope.todos = TodoService.list;
    $scope.newTodo = '';
    $scope.checked = false;
    $scope.statusFilter = {completed: false};

    // Watchers
    $scope.$watch('todos', calculateAmounts, true);

    //Methods
    $scope.save = save;
    $scope.remove = remove;
    $scope.changeStatus = changeStatus;
    $scope.toggle = toggle;

    ///////////////////////////////////// Implementation Details

    /**
     * @name calculateAmounts
     * @desc Calculates remaining and completed to do list amounts and updates them for the scope
     * @memberOf Controllers.TodoController
     * */
    function calculateAmounts() {
      $scope.completed = ($filter('filter')($scope.todos, {completed: true})).length;
      $scope.remaining = $scope.todos.length - $scope.completed;
    }

    /**
     * @name save
     * @desc Saves new todo. Prevents from saving empty titled item. Trims whitespace from title.
     * @memberOf Controllers.TodoController
     * */
    function save() {
      if ($scope.newTodo === '') {
        return;
      }
      TodoService.save({
        title: $scope.newTodo.trim()
      });
      $scope.newTodo = '';
    }

    /**
     * @name remove
     * @desc Removes existing todo.
     * @param {Object} todo selected todo item.
     * @memberOf Controllers.TodoController
     * */
    function remove(todo) {
      TodoService.remove(todo);
    }

    /**
     * @name changeStatus
     * @desc Changes todo status
     * @returns {String}
     * @memberOf Controllers.TodoController
     * */
    function changeStatus(todo) {
      todo.completed = !todo.completed;
    }

    /**
     * @name toggle
     * @desc Changes toggle state for pageslide
     * @memberOf Controllers.TodoController
     * */
    function toggle() {
      $scope.checked = !$scope.checked;
    }

  }
})();