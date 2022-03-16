// Write a function partlist that gives all the ways to divide a list (an array) of at least two elements into two non-empty parts.

// Each two non empty parts will be in a pair (or an array for languages without tuples or a structin C - C: see Examples test Cases - )
// Each part will be in a string
// Elements of a pair must be in the same order as in the original array.

function partlist(arr) {
  return arr.map((val,i) => [arr.slice(0,i).join(' '), arr.slice(i).join(' ')]).slice(1)
}

// function testing(actual, expected) {
//     Test.assertSimilar(actual, expected);
// }

// describe("partlist",function() {
//   it("1st Basic tests", function() {
//     testing(partlist(["I", "wish", "I", "hadn't", "come"]),
//         [["I", "wish I hadn't come"], ["I wish", "I hadn't come"], ["I wish I", "hadn't come"], ["I wish I hadn't", "come"]])
//     testing(partlist(["cdIw", "tzIy", "xDu", "rThG"]), 
//         [["cdIw", "tzIy xDu rThG"], ["cdIw tzIy", "xDu rThG"], ["cdIw tzIy xDu", "rThG"]])
//     testing(partlist(["vJQ", "anj", "mQDq", "sOZ"]), 
//         [["vJQ", "anj mQDq sOZ"], ["vJQ anj", "mQDq sOZ"], ["vJQ anj mQDq", "sOZ"]])
//   })
// })
