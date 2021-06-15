/*
Write a function that returns a string in which firstname is swapped with last name.

nameShuffler('john McClane'); => "McClane john"

*/


// One way
function nameSuffle(str){
  return str.split(' ').reverse().join(' ')
}
// second way
function nameShuffler(str){
  //Shuffle It
  let newArr=[];
 newArr= str.split(" ");
  return `${newArr[1]} ${newArr[0]}`;
}
