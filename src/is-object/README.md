# isObject Function

This utility function checks if a given value is a plain object. It returns `true` if the value is an object and `false` otherwise.


[![NPM](https://nodei.co/npm/@trandx/native.png?downloads=true)](https://nodei.co/npm/@trandx/native/)

## Table of Contents

<!-- - [Demo](#Demo) -->
- [Installation](#installation)
- [Usage](#usage)
- [If issues](#If-issues)
- [Author](#Author)
- [License](#license)

## Installation
```shell
    pnpm add @trandx/is-object
```
or

```shell
    npm i @trandx/is-object
```

## Usage

```js
// Example 1: Check a plain object
const obj = { key: 'value' };
console.log(isObject(obj)); // Output: true

// Example 2: Check an array (not a plain object)
const arr = [1, 2, 3];
console.log(isObject(arr)); // Output: false

// Example 3: Check a null value
const nullValue = null;
console.log(isObject(nullValue)); // Output: false

// Example 4: Check a date object (not a plain object)
const date = new Date();
console.log(isObject(date)); // Output: false

// Example 5: Check an instance of a custom class
class CustomClass {}
const instance = new CustomClass();
console.log(isObject(instance)); // Output: false


```

## If Issues

In case you notice any irregularities in benchmark or you want to add sort library to benchmark score
please open issue [here](https://github.com/Trandx/native/issues)

## Author

[![alt text](https://avatars.githubusercontent.com/u/42522718?s=100)](https://github.com/Trandx)

## License

MIT
