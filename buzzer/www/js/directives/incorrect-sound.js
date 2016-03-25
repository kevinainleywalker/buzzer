(function () {
	'use strict';

	angular.module('buzzer')
		.directive('incorrectSound', [function () {
			return {
				restrict: 'E',
				scope: true,
				controller: function ($scope, $element, SoundService) {
					$scope.playSound = function () {
						SoundService.playSound('sfx', 'incorrect');
					};
				}
			};
		}]);
})();
