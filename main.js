var MyAlarm = require('./myalarm');
var myAlarm = new MyAlarm();
myAlarm.run('./config.json', function (alarm) {
    console.log(alarm)
}, function (err) {
    console.log(err);
});