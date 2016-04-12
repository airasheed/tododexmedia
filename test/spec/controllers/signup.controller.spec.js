'use strict';

describe('Controller: SignUpController', function () {

  // load the controller's module
  beforeEach(module('todoDexMediaApp'));

  var SignUpController,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SignUpController = $controller('SignUpController', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(!!scope.user).toBe(true);
  });
});
