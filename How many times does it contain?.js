// Your task is to return how many times a string contains a given character.

// The function takes a string(inputS) as a parameter and a char(charS) which is the character that you will have to find and count.

// For example, if you get an input string "Hello world" and the character to find is "o", return 2.


function stringCounter(inputS, charS){
  let count=0;
  let len = inputS.split("");
  for(let i =0;i<len.length;i++){
    if(len[i] == charS)count++
  }
  return count;
}

//inputS.split("").filter(function(elem){return elem === charS}).length;
