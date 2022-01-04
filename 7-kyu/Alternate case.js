// Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD

function alternateCase(s) {
 return s.split('').map(value=>{if (value!=value.toUpperCase()) return value.toUpperCase();
  return value.toLowerCase()}).join('');
}

const _ = require('lodash')

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Alternate case", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(alternateCase("abc"), "ABC");
    assert.strictEqual(alternateCase("ABC"), "abc");
    assert.strictEqual(alternateCase("Hello World"), "hELLO wORLD"); 
  })
});
