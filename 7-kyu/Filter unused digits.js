// Given a list of integers, return the digits that are not present in any of them.

// Example:

// [12, 34, 56, 78]  =>  "09"
// [2015, 8, 26]     =>  "3479"
// Note: the digits in the resulting string should be sorted.

function unusedDigits(...args){
  // ...
  const numb=[0,1,2,3,4,5,6,7,8,9];
  const newArr= args.join();
  const result = numb.filter((val)=> !newArr.includes(val)).join('');
  return result;
}

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(unusedDigits(12, 34, 56, 78), "09")
Test.assertEquals(unusedDigits(2015, 8, 26), "3479")

  });
});
