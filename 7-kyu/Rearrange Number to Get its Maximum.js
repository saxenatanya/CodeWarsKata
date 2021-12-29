// Create a function that takes one positive three digit integer and rearranges its digits to get the maximum possible number. Assume that the argument is an integer.

// Return -1 if the argument is not valid
// Return null (nil for Ruby, nothing for Julia) if the argument is not valid.

// maxRedigit(123); // returns 321

var maxRedigit = function(num) {
  // Do yor magic :)
 var numRev= (num).toString().split('').reverse().join('')
  return num <= 0 ? null : Number(numRev);
};

// Basic test
Test.assertEquals(maxRedigit(123), 321, "123 => 321");

// Edge cases test
Test.assertEquals(maxRedigit(-1), null, "-1 => null");
Test.assertEquals(maxRedigit(0), null, "0 => null");
