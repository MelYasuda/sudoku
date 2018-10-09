// export function Sudoku(space1, space2, space3, space4, space5, space6, space7, space8, space9){
//   this.space1 = space1;
//   this.space2 = space2;
//   this.space3 = space3;
//   this.space4 = space4;
//   this.space5 = space5;
//   this.space6 = space6;
//   this.space7 = space7;
//   this.space8 = space8;
//   this.space9 = space9;
// }

export function Sudoku(row0, row1){
  this.row0 = row0;
  this.row1 = row1;
}


// Sudoku.prototype.checkRow = function() {
//   if(this.space1 === this.space2 === this.space3 === this.space4 === this.space5 === this.space6 === this.space7 === this.space8 === this.space9){
//     return "NOT sudoku";
//   } else {
//     return "YES sudoku!!!!!!!";
//   }
// }

Sudoku.prototype.checkColumn = function() {
  for (var i = 0; i <= 8; i++) {
    if (this.row0[i] != this.row1[i]){
      return "yes Sudoku";
    } else {
      return "no Sudoku";
    }
  }
};
