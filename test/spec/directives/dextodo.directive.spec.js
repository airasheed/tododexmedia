'use strict';

describe('Directive: dexTodo', function () {

  // load the directive's module
  beforeEach(module('todoDexMediaApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<dex-todo></dex-todo>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the dexTodo directive');
  }));
});
