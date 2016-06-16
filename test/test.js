'use strict';

var assert = require('assert');
var mock = require('ruff-mock');

var any = mock.any;
var mockAny = mock.mockAny;

var when = mock.when;
var verify = mock.verify;

var Device = require('../');

require('t');

describe('Driver {driver-name}', function () {
    var led;

    var pwmR;
    var pwmG;
    var pwmB;

    beforeEach(function () {
        pwmR = mockAny();
        pwmG = mockAny();
        pwmB = mockAny();

        led = mock(new Device({
            'pwm-r': pwmR,
            'pwm-g': pwmG,
            'pwm-b': pwmB
        }));
    });

    it('should set and get', function (done) {
        var r = 90;
        var g = 80;
        var b = 70;

        when(pwmB)
            .setDuty(any, any)
            .then(function (duty, callback) {
                assert.equal(duty, b / 0xff);
                setImmediate(callback);
            });

        led.setRGB(r, g, b, function (error) {
            assert.ifError(error);

            verify(pwmR).setDuty(r / 0xff);
            verify(pwmG).setDuty(g / 0xff);

            led.getRGB(function (error, rgb) {
                assert.ifError(error);

                assert.equal(rgb[0], r);
                assert.equal(rgb[1], g);
                assert.equal(rgb[2], b);

                done();
            });
        });
    });

    it('should turn on', function (done) {
        when(led)
            .setRGB([0xff, 0xff, 0xff], any)
            .then(function (rgb, callback) {
                setImmediate(callback);
            });

        led.turnOn(done);
    });

    it('shoud turn off', function (done) {
        when(led)
            .setRGB([0x00, 0x00, 0x00], any)
            .then(function (rgb, callback) {
                setImmediate(callback);
            });

        led.turnOff(done);
    });
});
