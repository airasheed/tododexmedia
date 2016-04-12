'use strict';

describe('Controller: MainController', function () {

  // load the controller's module
  beforeEach(module('todoDexMediaApp'));

  var MainController,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainController = $controller('MainController', {
      $scope: scope
    });
  }));

  it('should close sliding panel', function () {
    scope.checked = true;
    scope.toggle();
    expect(scope.checked).toBe(false);
  });

  it('User should be logged in', function () {
    scope.user.loggedIn = true;
    expect(scope.user.loggedIn).toBe(true);
  });
});
