/*
Should be easy, begin by looking at the code. Debug the code and the functions should work.

There are three functions: Multiplication (x) Addition (+) and Reverse (!esreveR)

*/



function multi(arr) {
  return arr.reduce((acc,val)=> acc*val);
}
function add(arr) {
  return arr.reduce((acc,val)=> acc+val);
}
function reverse(str) {
  return str.split('').reverse().join('');
}
