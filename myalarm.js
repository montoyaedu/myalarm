(function (factory) {
    module.exports = factory(require('play-sound'));
}(function (PlaySound) {
    'use strict';

    var MyAlarm = function () {
        this.schedule = function(alarmDefinition, onSuccess, onError) {

            var player = PlaySound({});

            var minutes = 60 * alarmDefinition.hoursToSleep;

            var interval = minutes * 60 * 1000;

            setTimeout(function () {
                player.play(alarmDefinition.sound.filename, onError);
                onSuccess(alarmDefinition);
            }, interval);
        };

        this.run = function (configFile, onSuccess, onError) {
            var config = require(configFile);

            for(var i = 0; i < config.length; i++) {
                var alarm = config[i];
                this.schedule(alarm, onSuccess, onError);
            }
        };
    };

    return MyAlarm;
}));
