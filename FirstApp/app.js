(function () {
  'use strict';
  angular.module('myApp', [])
  .controller("myController", function($scope) {
      $scope.name = "Akash";
      $scope.sayHello = function() {
        return "hello " + $scope.name;
      };
  });
})();
