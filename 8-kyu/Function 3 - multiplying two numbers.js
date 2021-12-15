// Implement a function which multiplies two numbers.
// Write here your multiply-function
const multiply=(a,b) => a*b;

const chai = require('chai');
const assert = chai.assert;

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(multiply(2, 3), 6);
  });
});
