// Write a function that doubles every second integer in a list starting from the left.

// Example:

// doubleEveryOther([1,2,3,4]) => [ 1, 4, 3, 8 ]

function doubleEveryOther(a) {
//   let newArr=[];
   a.map((val, index) => {
     if(index >= 0){
        if(index % 2 !==0 ){
     a[index] = a[index]*2;
    }
     }
    
  });
  return a;
}

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Double Every Other",()=>{
  it("example tests", ()=>{
    assert.deepEqual( doubleEveryOther([1,2,3,4]), [1,4,3,8] );
  });
});
