type Matrix<T> = T[][];

class Matloop<T> {
  #matrix: Matrix<T>;
  constructor(matrix: Matrix<T>) {
    this.#matrix = matrix;
  }

  [Symbol.iterator](): Iterator<T> {
    let row = 0;
    let col = 0;

    return {
      next: () => {
        if (row === this.#matrix.length)
          return {
            done: true,
            value: undefined,
          };

        const value: T = this.#matrix[row][col];

        // If its the last column, move to the next row
        // and set the column to zero; else move to the next column.
        if (col === this.#matrix[row].length - 1) {
          row += 1;
          col = 0;
        } else col += 1;

        return {
          value,
        };
      },
    };
  }
}

export default <T>(matrix: Matrix<T>) => {
  return new Matloop(matrix);
};
