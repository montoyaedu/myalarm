(function (factory) {
    module.exports = factory(require('play-sound'));
}(function (PlaySound) {
    'use strict';

    var MyAlarm = function () {
        this.schedule = function(alarmDefinition, onSuccess, onError) {

            var numeral = require('numeral');

            console.log('hoursToSleep = ' + alarmDefinition.hoursToSleep);

            var player = PlaySound({});

            var startDate = new Date();

            var endDate = new Date();

            var ms = endDate.getTime() - startDate.getTime();

            console.log(startDate + ' - ' + endDate + ' =  ' + numeral(ms).format('0,0') + ' ms.');

            var minutes = 60 * alarmDefinition.hoursToSleep;

            var interval = minutes * 60 * 1000;

            console.log('alarm will start in about :');
            console.log('   ' + alarmDefinition.hoursToSleep + ' hours.');
            console.log('or ' + minutes + ' minutes.');
            console.log('or ' + numeral(interval).format('0,0') + ' ms.');

            startDate = new Date();

            setTimeout(function () {
                endDate = new Date();
                ms = endDate.getTime() - startDate.getTime();
                console.log(startDate + ' - ' + endDate + ' =  ' + ms + ' ms.');
                player.play(alarmDefinition.sound.filename, onError);
                onSuccess(alarmDefinition);
            }, interval);
        };

        this.run = function (configFile, onSuccess, onError) {
            var config = require(configFile);

            console.log(JSON.stringify(config, null, '\t'));

            for(var i = 0; i < config.length; i++) {
                console.log('loading alarm ' + i);
                var alarm = config[i];
                this.schedule(alarm, onSuccess, onError);
            }
        };
    };

    return MyAlarm;
}));