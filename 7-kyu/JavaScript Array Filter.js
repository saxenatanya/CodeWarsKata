// JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

// The solution would work like the following:

// getEvenNumbers([2,4,5,6]) // should == [2,4,6]

function getEvenNumbers(numbersArray){
  // filter out the odd numbers
  return numbersArray.filter((val) => val%2===0 );
}

const assert = require("chai").assert;

describe("Fixed tests", () => {
    it('should return an empty array if there are no even numbers', function(){
      assert.deepEqual(getEvenNumbers([1,2,3,6,8,10]), [2,6,8,10])
      assert.deepEqual(getEvenNumbers([1,2]), [2])
      assert.deepEqual(getEvenNumbers([12,14,15]), [12,14])
      assert.deepEqual(getEvenNumbers([13,15]), [])
      assert.deepEqual(getEvenNumbers([1,3,9]), [])
    });
  })
