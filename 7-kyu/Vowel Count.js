function getCount(str) {
 return (str.match(/[aeiou]/ig)||[]).length;
}

//with filter function
//  const newArr= str.split('').filter((val)=> 'aeiouAEIOU'.includes(val)).length;
//   console.log(newArr);

//with for loop
//   var vowelsCount = 0;
//   const vowels=['a','e','i','o','u'];
// for(let i=0;i<str.length;i++){
//   for(let j=0;j<vowels.length;j++){
//     if(str[i] === vowels[j]){
//       vowelsCount++;
//     }
//   }
// }
