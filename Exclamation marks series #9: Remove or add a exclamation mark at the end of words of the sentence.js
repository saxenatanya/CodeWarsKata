// Exclamation marks series #9: Remove or add a exclamation mark at the end of words of the sentence
/*

Description:
Remove or add a exclamation mark at the end of words of the sentence. Words are separated by spaces in the sentence. That is: If a word has one ! at the end, remove it; If a word has no ! at the end, add a ! to the end; If there are more than one ! at the end of word, keep it.

Examples
removeOrAdd("Hi!") === "Hi"
removeOrAdd("Hi! Hi!") === "Hi Hi"
removeOrAdd("Hi! Hi") === "Hi Hi!"
removeOrAdd("Hi! Hi Hi!!") === "Hi Hi! Hi!!"
removeOrAdd("!Hi! !Hi !Hi!!") === "!Hi !Hi! !Hi!!"

*/



function removeOrAdd(s){
  //coding and coding....
  return s.split(" ").map(val =>{
    if(val.match(/!{2,}$/)) return val
    if(!val.match(/!$/)) return `${val}!`
    return val.replace(/!$/,"")
  }).join(" ");
}
