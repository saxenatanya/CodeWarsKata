// Write a function that receives two strings as parameter. This strings are in the following format of date: YYYY/MM/DD. Your job is: Take the years and calculate the difference between them.

// Examples:
// '1997/10/10' and '2015/10/10' -> 2015 - 1997 = returns 18 
// '2015/10/10' and '1997/10/10' -> 2015 - 1997 = returns 18
// At this level, you don't need validate months and days to calculate the difference.

var howManyYears = function(date1, date2){
  return Math.abs(date1.slice(0,4) - date2.slice(0,4));
}

const chai = require("chai");
const assert = chai.assert;
const _ = require("lodash");
chai.config.truncateThreshold = 0;

describe('Basic tests', () => {
  it("Tests", () => {
    assert.strictEqual(howManyYears('1997/10/10', '2015/10/10'), 18);
    assert.strictEqual(howManyYears('1990/10/10', '2015/10/10'), 25);
    assert.strictEqual(howManyYears('2015/10/10', '1990/10/10'), 25);
    assert.strictEqual(howManyYears('1992/10/24', '2015/10/24'), 23);
    assert.strictEqual(howManyYears('2018/10/10', '2000/10/10'), 18);
  })
});
