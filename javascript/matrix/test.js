const math = require("math.js");


let matrix = [[9,8,7], [5,3,2], [6,6,7]];

function col(matrix, index) {
    var rows = math.size(matrix).valueOf()[0];
    return math.flatten(math.subset(matrix, math.index([0, rows], index)));
  }

   console.log(col(matrix, 0));