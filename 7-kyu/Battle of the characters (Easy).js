// Description:
// Groups of characters decided to make a battle. Help them to figure out which group is more powerful. Create a function that will accept 2 strings and return the one who's stronger.

// Rules:
// Each character have its own power: A = 1, B = 2, ... Y = 25, Z = 26
// Strings will consist of uppercase letters only
// Only two groups to a fight.
// Group whose total power (A + B + C + ...) is bigger wins.
// If the powers are equal, it's a tie.
// Examples:
//   battle("ONE", "TWO"); // => "TWO"`
//   battle("ONE", "NEO"); // => "Tie!"

function battle(x, y) {
  let i = x.split('').reduce((a,b) => a+(b.charCodeAt() -  64),0);
  let j = y.split('').reduce((a,b) => a+(b.charCodeAt() - 64), 0);
  return i>j?x:j>i?y:'Tie!';
}

const assert = require('chai').assert;
describe("Basic Tests", () => {
  it('"AAA" vs. "Z"', () => assert.strictEqual(battle("AAA", "Z"), "Z", "Unfair fight!"));
  it('"ONE" vs. "TWO"', () => assert.strictEqual(battle("ONE", "TWO"), "TWO", "Unfair fight!"));
  it('"ONE" vs. "NEO"', () => assert.strictEqual(battle("ONE", "NEO"), "Tie!", "Unfair fight!"));
  it('"FOUR" vs. "FIVE"', () => assert.strictEqual(battle("FOUR", "FIVE"), "FOUR", "Unfair fight!"));
});
