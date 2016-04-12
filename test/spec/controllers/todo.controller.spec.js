'use strict';

describe('Controller: TodoController', function () {

  // load the controller's module
  beforeEach(module('todoDexMediaApp'));

  var TodoController, scope, todos;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $filter, TodoService) {
    scope = $rootScope.$new();
    todos = TodoService;
    TodoController = $controller('TodoController', {
      $scope: scope,
      todos : todos
    });
  }));


  it('should not add empty todo', function () {
    scope.todos = [
      {id:0, title: 'Finish Dex Media Homework', note:'This is a very', due: new Date(), completed: false},
      {id:1, title: 'Consider Architecture and Communication', note:'This is a very', completed: false},
      {id:2, title: 'Write Controllers', note:'This is a very', due: new Date(), completed: false},
      {id:3, title: 'Write Directives', note:'This is a very', due: new Date(), completed: false},
      {id:4, title: 'Write Unit Tests', note:'This is a very', due: new Date(), completed: true},
      {id:5, title: 'Refactor Code', note:'This is a very', due: new Date(), completed: true}
    ];
    scope.save();
    expect(scope.todos.length).toBe(6);
  });

  it('should add new todo', function () {
    scope.newTodo = 'Enter the next interview phase';
    scope.save();
    console.log(todos.list.length);
    expect(todos.list.length).toBe(7);
  });
  

});
