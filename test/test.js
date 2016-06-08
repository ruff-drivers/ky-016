'use strict';

var assert = require('assert');
var path = require('path');
var mock = require('ruff-mock');
var verify = mock.verify;
var twice = mock.twice;

var driverPath = path.join(__dirname, '..');
var runner = require('ruff-driver-runner');

require('t');

describe('Driver {driver-name}', function () {
    var led;
    var pwmR;
    var pwmG;
    var pwmB;
    var MAX_INTENSITY = 255;

    beforeEach(function (done) {
        runner.run(driverPath, function (device, context) {
            led = device;
            pwmR = context.arg('pwm-r');
            pwmG = context.arg('pwm-g');
            pwmB = context.arg('pwm-b');
            done();
        });
    });

    it('should off when start', function () {
        assert.equal(led.isOn(), false);
    });

    it('should set and get the rgb', function () {
        led.setRGB(90, 80, 70);
        var rgb = led.getRGB();

        assert.equal(rgb[0], 90);
        assert.equal(rgb[1], 80);
        assert.equal(rgb[2], 70);
    });

    it('should on when turn on', function () {
        led.turnOn();
        assert.equal(led.isOn(), true);
    });

    it('shoud off when turn off', function () {
        led.turnOn();
        led.turnOff();

        assert.equal(led.isOn(), false);
    });

    it('shoud turn on', function () {
        led.turnOn();

        verify(pwmR).setDuty(MAX_INTENSITY / MAX_INTENSITY);
        verify(pwmG).setDuty(MAX_INTENSITY / MAX_INTENSITY);
        verify(pwmB).setDuty(MAX_INTENSITY / MAX_INTENSITY);
    });

    it('should turn off', function () {
        led.turnOff();

        verify(pwmR, twice()).setDuty(0);
        verify(pwmG, twice()).setDuty(0);
        verify(pwmB, twice()).setDuty(0);
    });
});
