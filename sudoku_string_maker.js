var sudoku = require('sudoku');

var puzzle = sudoku.makepuzzle();
var solution   = sudoku.solvepuzzle(puzzle);
var difficulty = sudoku.ratepuzzle(puzzle, 4);

// console.log(puzzle);
// console.log(solution);
// console.log(difficulty);

// console.log(typeof(solution[3]));

var answerString = ""

for (var i = 0; i < solution.length; i++) {
  answerString += (solution[i] + 1).toString();
}

// console.log(answerString.length);

console.log(answerString);
