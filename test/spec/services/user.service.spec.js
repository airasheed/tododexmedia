'use strict';

describe('Service: userService', function () {

  // load the service's module
  beforeEach(module('todoDexMediaApp'));

  // instantiate service
  var userService;
  beforeEach(inject(function (_UserService_) {
    userService = _UserService_;
  }));

  it('should do something', function () {
    expect(!!userService).toBeTruthy();
  });

});
