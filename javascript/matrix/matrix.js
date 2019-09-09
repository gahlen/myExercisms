//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(input) {
    this.matrix = input.split('\n').map(row => row.split(' '))
  }

  get rows() {
    return this.matrix;  }

  get columns() {
    
  }
}




