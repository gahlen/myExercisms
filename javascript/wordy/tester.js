export default class WordSearch {
  constructor(grid) {
    this.grid = grid;
    this.startIndex = [];
    this.endIndex = [];
  }

  find(search) {
    let inputArray = this.grid.join("");
    let mArray = inputArray.split("");
    let gridArray = [];
    let output = {};
    let result = "";
    //parse incoming array in a grid array
    while (mArray.length) gridArray.push(mArray.splice(0, 10));
    let R = gridArray.length;
    let C = gridArray[0].length;
    //loop through input array
    search.forEach(function(value, i) {
      result = this.patternSearch(gridArray, value, R, C);
      console.log("return results", result)
      if (result === undefined) {
      } else {
        //copy result into object each loop iteration
        output = Object.assign({}, result, output)
        console.log("Loopoutput", output);
      }
    },this);
    console.log("Returnoutput", output);

    return output;
  }

  // Searches given word in the input
  // matrix  in all 8 directions
  // Consider every point as starting
  // point and search input words
  // Works with single array as well
  patternSearch(grid, search, R, C) {
    for (let row = 0; row < R; row++) {
      for (let col = 0; col < C; col++) {
        if (this.gridSearch(grid, row, col, search, R, C)) {
          let start = this.startIndex.map(function(val) {
            return ++val;
          });
          let end = this.endIndex.map(function(val) {
            return ++val;
          });
          let output = {
            [search]: {
              start: start,
              end: end
            }
          };
          return output;
        }
      }
    }
  }

  // This function searches in all 8-direction from point
  // (row, col) in the input grid array
  gridSearch(grid, row, col, search, R, C) {
    // For searching in all 8 direction
    let x = [-1, -1, -1, 0, 0, 1, 1, 1];
    let y = [-1, 0, 1, -1, 1, -1, 0, 1];
    // If first character of word doesn't match with
    // given starting point in grid.
    if (grid[row][col] != search.charAt(0)) {
      return false;
    } else {
      this.startIndex = [row, col];
    }

    let len = search.length;

    // Search word in all 8 directions
    // starting from (row,col)
    for (let dir = 0; dir < 8; dir++) {
      // Initialize starting point
      // for current direction
      let k,
        rd = row + x[dir],
        cd = col + y[dir];

      // First character is already checked,
      //  match remaining characters
      for (k = 1; k < len; k++) {
        // If out of bound break
        if (rd >= R || rd < 0 || cd >= C || cd < 0) {
          break;
        }

        // If not matched, break
        if (grid[rd][cd] != search.charAt(k)) {
          break;
        } else {
          this.endIndex = [rd, cd];
        }

        // Moving in particular direction
        rd += x[dir];
        cd += y[dir];
      }

      // If all character matched, then value must
      // be equal to length of word therefore it is a match
      if (k == len) {
        return true;
      }
    }
    return false;
  }
}
