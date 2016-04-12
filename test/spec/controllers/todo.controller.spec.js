'use strict';

describe('Controller: TodoController', function () {

  // load the controller's module
  beforeEach(module('todoDexMediaApp'));

  var TodoController,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TodoController = $controller('TodoController', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.newTodo).toBe('');
  });
});
