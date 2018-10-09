import { Sudoku } from './../src/sudoku.js';

describe('Sudoku', function() {

  // it('should work', function() {
  //   var test = new Sudoku(1,2,3,4,5,6,7,8,9);
  //   expect(test.checkRow()).toEqual("YES sudoku!!!!!!!");
  // });


  it('should work fail', function() {
    var row0 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var row1 = [1, 2, 3, 4, 5, 5, 7, 8, 9];
    var test = new Sudoku(row0, row1);
    expect(test.checkColumn()).toEqual("no Sudoku");
  });

  it('should work pass', function() {
    var row0 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var row1 = [9, 8, 7, 6, 4, 5, 3, 2, 1];
    var test = new Sudoku(row0, row1);
    expect(test.checkColumn()).toEqual("yes Sudoku");
  });

});
