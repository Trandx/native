# Range Function

This utility function generates an array of numbers within a specified range. The range can be defined by a starting number and an ending number, with options for limiting the number of elements generated.

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
    pnpm add @trandx/range
```
or

```shell
    npm i @trandx/range
```

## Usage

```js
// Example 1: Generate a range from 1 to 5
const range1 = range({ start: 1, end: 5 });
console.log(range1); // Output: [1, 2, 3, 4, 5]

// Example 2: Generate a range from 3 to 7 with a limit of 3
const range2 = range({ start: 3, end: 7, limit: 3 });
console.log(range2); // Output: [3, 4, 5]

// Example 3: Generate a range with a default length
const range3 = range({ start: 0, end: 4 });
console.log(range3); // Output: [0, 1, 2, 3, 4]


```

## If Issues

In case you notice any irregularities in benchmark or you want to add sort library to benchmark score
please open issue [here](https://github.com/Trandx/native/issues)

## Author

[![alt text](https://avatars.githubusercontent.com/u/42522718?s=100)](https://github.com/Trandx)

## License

MIT
