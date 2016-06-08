/*!
 * Copyright (c) 2016 Nanchao Inc.
 * All rights reserved.
 */

'use strict';

var driver = require('ruff-driver');

var MAX_INTENSITY = 255;

function checkAndGet(val) {
    if (val >= 0 && val <= MAX_INTENSITY) {
        return val;
    }
    // eslint-disable-next-line no-console
    console.error('parameter should be within 0-255');
    return 0;
}

function _turnOff(led) {
    led._pwmR.setDuty(checkAndGet(0) / MAX_INTENSITY);
    led._pwmG.setDuty(checkAndGet(0) / MAX_INTENSITY);
    led._pwmB.setDuty(checkAndGet(0) / MAX_INTENSITY);
}

module.exports = driver({

    attach: function (inputs) {
        this._pwmR = inputs.getRequired('pwm-r');
        this._pwmG = inputs.getRequired('pwm-g');
        this._pwmB = inputs.getRequired('pwm-b');

        this._rgb = {
            r: MAX_INTENSITY,
            g: MAX_INTENSITY,
            b: MAX_INTENSITY
        };
        _turnOff(this);
        this._on = false;
    },

    exports: {
        turnOn: function () {
            this._pwmR.setDuty(this._rgb.r / MAX_INTENSITY);
            this._pwmG.setDuty(this._rgb.g / MAX_INTENSITY);
            this._pwmB.setDuty(this._rgb.b / MAX_INTENSITY);

            this._on = true;
        },

        turnOff: function () {
            _turnOff(this);

            this._on = false;
        },

        setRGB: function (r, g, b) {
            this._rgb = {
                r: checkAndGet(r),
                g: checkAndGet(g),
                b: checkAndGet(b)
            };
            if (this._on) {
                this._pwmR.setDuty(this._rgb.r / MAX_INTENSITY);
                this._pwmG.setDuty(this._rgb.g / MAX_INTENSITY);
                this._pwmB.setDuty(this._rgb.b / MAX_INTENSITY);
            }
        },

        getRGB: function () {
            return [this._rgb.r, this._rgb.g, this._rgb.b];
        },

        isOn: function () {
            return this._on;
        }
    }
});
