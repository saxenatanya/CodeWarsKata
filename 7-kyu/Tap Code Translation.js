// Tap Code Translation
// Tap code is a way to communicate using a series of taps and pauses for each letter. In this kata, we will use dots . for the taps and whitespaces for the pauses.

// The number of taps needed for each letter matches its coordinates in the following polybius square (note the c/k position). Then you "tap" the row, a pause, then the column. Each letter is separated from others with a pause too.

//    1  2  3  4  5
// 1  A  B C\K D  E
// 2  F  G  H  I  J
// 3  L  M  N  O  P
// 4  Q  R  S  T  U
// 5  V  W  X  Y  Z
// Input:
// A lowercase string of a single word (no whitespaces or punctuation, only letters).

// Output:
// The encoded string as taps and pauses.

// Examples
// text = "dot"
//   "D" = (1, 4) = ". ...."
//   "O" = (3, 4) = "... ...."
//   "T" = (4, 4) = ".... ...."
  
// output: ". .... ... .... .... ...."


// "example" -> ". ..... ..... ... . . ... .. ... ..... ... . . ....."
// "more"    -> "... .. ... .... .... .. . ....."


function tapCodeTranslation(text) {
 const dic = [['A', 'B', 'C', 'D', 'E'],
              ['F', 'G', 'H', 'I', 'J'],
              ['L', 'M', 'N', 'O', 'P'],
              ['Q', 'R', 'S', 'T', 'U'],
              ['V', 'W', 'X', 'Y', 'Z']];
  
    let out = '';
    const arr = [...text.toUpperCase()];
    arr.map( el => {
        if ( el === 'K' ) el = 'C';
        
        for ( let i = 0; i < dic.length; i++ ) {
            for ( let j = 0; j < dic.length; j++) {
                if ( dic[i][j] == el ) {
                    out += (`${'.'.repeat(i + 1)} ${'.'.repeat(j + 1)} `);
                    break;
                }
            }
        }
    })
    return out.trim();
}

// const chai = require("chai");
// const assert = chai.assert;

// describe("Tests", () => {
//   it("Fixed tests", () => {
//     assert.equal(tapCodeTranslation("test"), ".... .... . ..... .... ... .... ....", `Text: "test"`);
//     assert.equal(tapCodeTranslation("total"), ".... .... ... .... .... .... . . ... .", `Text: "total"`);
//     assert.equal(tapCodeTranslation("break"), ". .. .... .. . ..... . . . ...", `Text: "break"`);
//     assert.equal(tapCodeTranslation("something"), ".... ... ... .... ... .. . ..... .... .... .. ... .. .... ... ... .. ..", `Text: "something"`);
//     assert.equal(tapCodeTranslation("final"), ".. . .. .... ... ... . . ... .", `Text: "final"`);
//   });
// });
