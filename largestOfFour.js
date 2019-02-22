function largestOfFour(arr) {
  let lArr = [];
  for(let i = 0; i < arr.length; i++){
    let test = arr[i][0];
    for(let m = 1; m < arr[i].length; m++){
      if(arr[i][m] > test) test = arr[i][m];
      if(m == arr[i].length - 1) lArr.push(test);
    }
  }
  return lArr;
}