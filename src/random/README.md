# Random Code Generator Function

This utility function generates a random code based on the specified length, type, and sensitivity. The generated code can be numeric, alphanumeric, or alphabetic, with an option for case sensitivity.


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
    pnpm add @trandx/random
```
or

```shell
    npm i @trandx/random
```

## Usage

```js
// Example 1: Generate a numeric code of length 5
const numericCode = random(5, 'numeric');
console.log(numericCode); // Output: A string of 5 digits, e.g., '12345'

// Example 2: Generate an alphanumeric code of default length (4)
const alphanumericCode = random();
console.log(alphanumericCode); // Output: A string of 4 alphanumeric characters, e.g., 'a1b2'

// Example 3: Generate a sensitive alphanumeric code of length 6
const sensitiveCode = random(6, 'alphanumeric', true);
console.log(sensitiveCode); // Output: A string of 6 alphanumeric characters, e.g., 'aB1cD2'

// Example 4: Generate an alphabetic code of length 3
const alphabeticCode = random(3, 'alphabetic');
console.log(alphabeticCode); // Output: A string of 3 lowercase letters, e.g., 'abc'

```

## If Issues

In case you notice any irregularities in benchmark or you want to add sort library to benchmark score
please open issue [here](https://github.com/Trandx/native/issues)

## Author

[![alt text](https://avatars.githubusercontent.com/u/42522718?s=100)](https://github.com/Trandx)

## License

MIT
