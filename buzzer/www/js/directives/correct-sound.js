(function () {
	'use strict';

	angular.module('buzzer')
		.directive('correctSound', [function () {
			return {
				restrict: 'E',
				scope: true,
				controller: function ($scope, $element, SoundService) {
					$scope.playSound = function () {
						SoundService.playSound('sfx', 'correct');
					};
				}
			};
		}]);
})();
