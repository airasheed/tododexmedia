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

  it('Should create user and login', function () {
    scope.signUp({name: 'Jeff', email: 'jeff@dexmedia.com', password: 'jeff1'});
    expect(!!scope.user.loggedIn).toBe(true);
  });

  it('Should prevent account creation with out name', function () {
    scope.signUp({name: '', email: 'jeff@dexmedia.com', password: 'jeff1'});
    expect(!!scope.user.loggedIn).toBe(false);
  });

  it('Should prevent account creation with out email', function () {
    scope.signUp({name: 'Jeff', email: '', password: 'jeff1'});
    expect(!!scope.user.loggedIn).toBe(false);
  });

  it('Should prevent account creation with out password', function () {
    scope.signUp({name: '', email: 'jeff@dexmedia.com', password: ''});
    expect(!!scope.user.loggedIn).toBe(false);
  });


});
