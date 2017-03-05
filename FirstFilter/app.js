(function() {
	'use strict'

	angular.module('myFilterApp', [])
	.controller('myController', myController)
	.filter('love', LoveFilter)
	.filter('truth', TruthFilter);

	myController.$inject = ['$scope', 'loveFilter'];

	function myController($scope, loveFilter) {
		$scope.stateOfBeing = "hungry";

		$scope.sayMessage = function() {
			var msg = "Akash is hungry, and he likes to eat healthy.";
			return msg;
		}

		$scope.sayLovesMessage = function() {
			var msg = "Akash is hungry, and he likes to eat healthy.";
			msg = loveFilter(msg);
			return msg;
		}

		$scope.feedAkash = function() {
			$scope.stateOfBeing = "fed";
		}
	}

	//filter factory
	function LoveFilter() {
		return function(input) {
			input = input || "";
			input = input.replace("likes", "loves");

			return input;
		}
	}

	function TruthFilter() {
		return function(input, target, replace) {
			input = input || "";
			input = input.replace(target, replace);

			return input;
		}
	}

})();