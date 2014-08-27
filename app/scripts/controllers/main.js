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
