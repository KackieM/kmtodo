'use strict';

/**
 * @ngdoc function
 * @name kmtodoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the kmtodoApp
 */
angular.module('kmtodoApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
