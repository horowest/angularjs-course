(function() {
	'use strict'

	angular.module('watcherApp', [])
	.controller('myController', myController);

	myController.$inject = ['$scope', '$timeout'];
	function myController ($scope, $timeout) {
		
		$scope.counter = 0;

		$scope.showNumberOfWatchers = function () {
			console.log($scope.$$watchersCount);
		}

		$scope.countOnes = function () {
			$timeout(function() {
				$scope.counter += 1;
				console.log("+1");
			}, 1000);
		}

		// $scope.countOnes = function () {
		// 	setTimeout(function() {
		// 		$scope.$apply(function() {
		// 			$scope.counter += 1;
		// 			console.log("+1");
		// 		});
		// 	}, 1000);
		// }

		// // $scope.countOnes = function () {
		// 	setTimeout(function() {
		// 		$scope.counter += 1;
		// 		console.log("+1");
		// 		$scope.$digest();
		// 	}, 1000);
		// }

		//manually setting up watcher
		// $scope.$watch(function () {
		// 	console.log("Digest fired!");
		// });

		// $scope.$watch('counter', function (newValue, oldValue) {
		// 	console.log("old value:", oldValue);
		// 	console.log("new value:", newValue); 
		// }); 

	}

})();
