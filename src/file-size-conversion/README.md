# File Size Conversion Utility

This utility provides a function to convert file sizes from bytes to human-readable units like KB, MB, GB, and TB.

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
    pnpm add @trandx/file-size-conversion
```
or

```shell
    npm i @trandx/file-size-conversion
```

## Usage

```js
import { fileSizeCoversion } from "@trandx/file-size-conversion"

// Example usage:
const fileSize = 2048000; // bytes
console.log(fileSizeCovertion(fileSize)) // Output: '2 MB'

```

## If Issues

In case you notice any irregularities in benchmark or you want to add sort library to benchmark score
please open issue [here](https://github.com/Trandx/native/issues)

## Author

[![alt text](https://avatars.githubusercontent.com/u/42522718?s=100)](https://github.com/Trandx)

## License

MIT
