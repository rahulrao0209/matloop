## Matloop

A tiny package to loop over 2D arrays.

### About

Matloop is a tiny package that exposes an iterator to loop over a 2D array.

### Installation

```bash
npm install matloop
```

### API and Usage

```typescript
import matloop from "matloop";

const numMatrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6, 7],
  [8, 9],
  [10, 11, 12, 13],
  [14, 15],
];

// Prints a 1D array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
const numList = [...matloop<number>(numMatrix)];

// Loop over a 2D matrix
for (const element of matloop<number>(numMatrix)) {
  console.log(element); // Prints 1, 2, 3, 4... and so on.
}
```
