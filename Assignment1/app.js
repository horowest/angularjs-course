(function() {
	angular.module('LunchChecker', [])
	.controller('CheckMyLunch', CheckMyLunch);

	CheckMyLunch.$inject = ['$scope'];

	function CheckMyLunch($scope) {
		$scope.msg = "hello";
		$scope.lunch = "";

		$scope.check = function() {
			var count = 0;
			var items = $scope.lunch.split(',');

			for(var item in items) {
				if(item != "") {
					count++;
				}
			}

			if(count <= 3) {
				$scope.msg = "Enjoy!";
			}
			else {
				$scope.msg = "Too much!";
			}
		}

		$scope.blurIt = function() {
			$scope.msg = "";
			$scope.lunch = "";
		}
	}

})();