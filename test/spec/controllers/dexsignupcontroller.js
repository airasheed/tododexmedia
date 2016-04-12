'use strict';

describe('Controller: DexsignupcontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('todoDexMediaApp'));

  var DexsignupcontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DexsignupcontrollerCtrl = $controller('DexsignupcontrollerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
