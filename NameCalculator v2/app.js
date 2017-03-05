(function () {
  'use strict'

  angular.module("DIApp", [])
  .controller("DIController", DIController);

  function DIController($scope, $filter) {
    $scope.name = "Akash";
    $scope.mag = ""

    //function called when textfield blurs
    $scope.upper = function() {
      var upCase = $filter('uppercase');
      $scope.name = upCase($scope.name);
      $scope.msg = "In uppercase!";
    }

    $scope.message = function () {
      $scope.msg = "";
    }
  }

})();
