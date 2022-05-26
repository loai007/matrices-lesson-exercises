class Matrix {
  constructor(rows, columns) {
    this.matrix = [];
    generateMatrix(rows, columns);
  }
  generateMatrix(rows, columns) {
    counter = 1;
    for (let r = 0; r < rows; r++) {
      let row = [];
      for (let c = 0; c < columns; c++) {
        row.push(counter);
        counter++;
      }
      this.matrix.push(row);
    }
  }
  print() {
    for (let r = 0; r < this.matrix.length; r++) {
      for (let c = 0; c < this.matrix[0].length; c++) {
        console.log(this.matrix[r][c] + "      ");
      }
      console.log("\n");
    }
  }

  get(row, column) {
    return this.matrix[row][column];
  }

  printColumn(column) {
    for (let r = 0; r < this.matrix.length; r++) {
      for (let c = 0; c < this.matrix[0].length; c++) {
        if (c === column) {
          console.log(this.matrix[0][c]);
        }
      }
    }
  }

  printRow(row) {
    console.log(this.matrix[row]);
  }

  findCoordinate(value) {
    for (let r = 0; r < this.matrix.length; r++) {
      for (let c = 0; c < this.matrix[0].length; c++) {
        if (this.matrix[r][c] === value) {
          return { x: r, y: c };
        }
      }
    }
  }
}

/* Do not remove the exports below */
module.exports = Matrix;
