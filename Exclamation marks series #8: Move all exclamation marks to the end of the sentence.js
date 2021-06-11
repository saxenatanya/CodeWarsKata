/*

Description:
Move all exclamation marks to the end of the sentence

Examples
remove("Hi!") === "Hi!"
remove("Hi! Hi!") === "Hi Hi!!"
remove("Hi! Hi! Hi!") === "Hi Hi Hi!!!"
remove("Hi! !Hi Hi!") === "Hi Hi Hi!!!"
remove("Hi! Hi!! Hi!") === "Hi Hi Hi!!!!"

*/

function remove(s){
  //coding and coding....
  let excla=[];
  for(let i =0;i<s.length;i++){
    if(s[i] === '!'){
      excla.push(s[i]);
    }
  }
  let newSS = s.replace(/!/g,"");
  return newSS.concat(...excla);
  
  
