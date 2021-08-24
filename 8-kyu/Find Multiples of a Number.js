function findMultiples(integer, limit) {
  //your code here
  const result=[]
  for(let i=integer;i<=limit;i+= integer){
    result.push(i);
  }
//   console.log(result);
  return result;
}
