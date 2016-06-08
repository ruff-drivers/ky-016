[![Build Status](https://travis-ci.org/ruff-drivers/ky-016.svg)](https://travis-ci.org/ruff-drivers/ky-016)

# LED Driver for Ruff

LED dirver with RGB control using PWM interface.

## Supported Engines

* Ruff: 1.2.0

## Supported Models

- [KY-016](https://rap.ruff.io/devices/KY-016)

## Installing

Execute following command and enter a **supported model** to install.

```sh
# Please replace `<device-id>` with a proper ID.
# And this will be what you are going to query while `$('#<device-id>')`.
rap device add <device-id>

# Then enter a supported model, for example:
# ? model: KY-016
```

## Usage

Here is the usage of this driver.

```js
$('#<device-id>').turnOn();
$('#<device-id>').turnOff();
$('#<device-id>').setRGB(r, g, b);
$('#<device-id>').getRGB();
$('#<device-id>').isOn();
```

## API References

### Methods

#### `turnOn()`

Turn on the LED.

#### `turnOff()`

Turn off the LED.

### `setRGB(r, g, b)`

set the intensity of Red, Green, and Blue component.

- r, g, b should be number inside 0~255

### `getRGB()`
get the array [r, g, b] which represents the intensity of Red, Green, and Blue component.

### `isOn()`

get the working state of LED.

## Contributing

Contributions to this project are warmly welcome. But before you open a pull request, please make sure your changes are passing code linting and tests.

You will need the latest [Ruff SDK](https://ruff.io/) to install rap dependencies and then to run tests.

### Installing Dependencies

```sh
npm install
rap install
```

### Running Tests

```sh
npm test
```

## License

The MIT License (MIT)

Copyright (c) 2016 Nanchao Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
