const catchSignChange = function(arr){
  var count=0;
  for (i=0; i<arr.length; i++){
    if ((arr[i]<0 && arr[i+1]>=0) || (arr[i]>=0 && arr[i+1]<0)){
    count++;
    }
  };
  return count;
};
