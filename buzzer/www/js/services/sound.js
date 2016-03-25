(function () {
	'use strict';

	angular.module('buzzer')
		.service('SoundService', [function () {
			var me = this;

			me.sounds = [];

			me.createSounds = function () {
				me.sounds.push({
					sound: 'sfx',
					howl: new Howl({
						urls: ['sound/sounds.mp3'],
						volume: 0.7,
						sprite: {
							incorrect: [0, 700],
							correct: [1000, 700]
						}
					})
				});
			};

			me.playSound = function (soundToPlay, trackToPlay) {
				for (var i = 0; i < me.sounds.length; i++) {
					if (me.sounds[i].sound === soundToPlay) {
						me.sounds[i].howl.play(trackToPlay);
						break;
					}
				}
			};

			me.createSounds();
		}]);
})();
