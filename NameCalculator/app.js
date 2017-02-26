(function () {
  angular.module("myApp", [])
  .controller("myController", function($scope) {
    $scope.name = "";
    $scope.value = 0;

    $scope.displayValue = function() {
      var total = calName($scope.name);
      $scope.value = total;
    }

    function calName(name) {
      var sum = 0;
      for(var i = 0; i < name.length; i++) {
        sum += name.charCodeAt(i);
      }
      return sum;
    }

  });

})();
