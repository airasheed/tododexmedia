'use strict';

/**
 * Dex To Do Directive
 * @namespace Directives
 * */
angular.module('todoDexMediaApp')
  .directive('dexTodo', DexTodo);


DexTodo.$inject = ['$location'];

/**
 * @namespace DexTodo
 * @desc Reusable sign up form that can be used to create new users
 * @memberOf Directives
 * */
function DexTodo($location) {
  var directive = {
    templateUrl: 'views/templates/dextodo.view.html',
    restrict: 'E',
    controller: 'TodoController',
    link: link
  };
  return directive;

  /////////////////////////////////////////

  function link (scope,element) {
    scope.statusFilter = ($location.path() === '/') ? {completed: false} : {completed: true};
    element.addClass(!scope.statusFilter.completed ? 'active' : 'completed');
  }
}
