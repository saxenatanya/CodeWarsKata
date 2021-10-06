// You will be given a string with sets of characters, (i.e. words), seperated by between one and three spaces (inclusive).

// Looking at the first letter of each word (case insensitive-"A" and "a" should be treated the same), you need to determine whether it falls into the positive/first half of the alphabet ("a"-"m") or the negative/second half ("n"-"z").

// Return True/true if there are more (or equal) positive words than negative words, False/false otherwise.

// "A big brown fox caught a bad rabbit" => True/true
// "Xylophones can obtain Xenon." => False/false

function connotation(str) {
//   let letters =str.split('');
//   console.log(letters.length);
let pos = str.match(/\b[a-m]/ig) || [];
  console.log(pos);
  let neg = str.match(/\b[n-z]/ig) || [];
  return pos.length >= neg.length;
  
}
