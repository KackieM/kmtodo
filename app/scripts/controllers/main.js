'use strict';

/**
 * @ngdoc function
 * @name kmtodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the kmtodoApp
 */
angular.module('kmtodoApp')
  .controller('MainCtrl', function ($scope, localStorageService) {
    
    var todosInStore = localStorageService.get('todos');

    $scope.todos = todosInStore && todosInStore.split('\n') || [];

    $scope.$watch('todos', function () {

    	localStorageService.add('todos', $scope.todos.join('\n'));
    }, true);

    


    $scope.todos = [
      'Item 1',
      'Item 2',
      'Item 3',
      'Item 4'
    ];
    $scope.addTodo = function () {
    	$scope.todos.push($scope.todo);
    	$scope.todo = '';
    };
    $scope.removeTodo = function (index) {
    	$scope.todos.splice(index, 1);
    };

  });
