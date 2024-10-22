# Round To Function

This utility function rounds a number to a specified number of decimal places.

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
    pnpm add @trandx/round-to
```
or

```shell
    npm i @trandx/round-to
```

## Usage

```js
// Example 1: Rounding to 2 decimal places
const roundedValue1 = roundTo(2.34567, 2);
console.log(roundedValue1); // Output: 2.35

// Example 2: Rounding to 0 decimal places
const roundedValue2 = roundTo(2.5, 0);
console.log(roundedValue2); // Output: 3

// Example 3: Rounding to 3 decimal places
const roundedValue3 = roundTo(2.34567, 3);
console.log(roundedValue3); // Output: 2.346

```

## If Issues

In case you notice any irregularities in benchmark or you want to add sort library to benchmark score
please open issue [here](https://github.com/Trandx/native/issues)

## Author

[![alt text](https://avatars.githubusercontent.com/u/42522718?s=100)](https://github.com/Trandx)

## License

MIT
