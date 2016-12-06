var MyAlarm = require('../myalarm');
var assert = require('assert');

describe('myalarm', function () {

    describe('#new', function () {

        var x = new MyAlarm();

        it('should be an object', function () {

            assert.equal('object', typeof x);

        });

    });

    describe('#run', function () {

        var x = new MyAlarm();

        it('should execute without errors', function (done) {

            x.run('./test/test.json', function (alarm) {
                console.log(alarm);
                done();
            }, function (err) {
                done(err);
            });

        });

    });

});