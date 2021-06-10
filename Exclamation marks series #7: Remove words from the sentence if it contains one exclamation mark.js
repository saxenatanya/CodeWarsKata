/*
Description:
Remove words from the sentence if it contains one exclamation mark. Words are separated by spaces in the sentence. Please remember, one.

Examples
remove("Hi!") === ""
remove("Hi! Hi!") === ""
remove("Hi! Hi! Hi!") === ""
remove("Hi Hi! Hi!") === "Hi"
remove("Hi! !Hi Hi!") === ""
remove("Hi! Hi!! Hi!") === "Hi!!"
remove("Hi! !Hi! Hi!") === "!Hi!"
*/
function remove(s){
  //coding and coding....
    return s.split(' ').map(val=>val.replace(/(^\w+!$|^!\w+$)/,'')).join(' ').trim()
      .replace(/\s+/g,' ');  
}

//without regex
// function remove(s){
//   return s.split(' ').filter(i => i.split('!').length != 2).join(' ');
// }

// function remove(s){
//   var arr=s.split(' ');
//   var ans=[];
//   for (var i=0; i<arr.length; ++i)
//   {
//     var c=0;
//     for (var j=0; j<arr[i].length; ++j)
//       if (arr[i][j]=='!')
//         c++;
//     if (c!=1)
//       ans.push(arr[i]);
//   }
//   return ans.join(' ');
// }
