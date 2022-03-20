// Write a function that takes a string and an an integer n as parameters and returns a list of all words that are longer than n.

// Example:

// * With input "The quick brown fox jumps over the lazy dog", 4
// * Return ['quick', 'brown', 'jumps']

function filterLongWords(sentence, n){
  return sentence.split(' ').filter((val) => val.length > n);
}

const chai = require("chai");
const assert = chai.assert;

describe("Test Cases", function() {
  it("basic example", function() {
     assert.deepEqual(filterLongWords("The quick brown fox jumps over the lazy dog", 4), ['quick', 'brown', 'jumps']);
  });
});
