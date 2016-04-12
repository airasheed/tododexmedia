'use strict';

describe('Service: todoService', function () {

  // load the service's module
  beforeEach(module('todoDexMediaApp'));

  // instantiate service
  var todoService;
  beforeEach(inject(function (_TodoService_) {
    todoService = _TodoService_;
  }));

  it('should do something', function () {
    expect(!!todoService).toBeTruthy();
  });

});
