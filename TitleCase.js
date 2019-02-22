function titleCase(str) {
  let arr = str.split('');
  arr[0] = arr[0].toUpperCase();
  str = arr[0];
  for(let i = 1; i < arr.length; i++){
    //checks for a space before the string
    if(arr[i-1] == ' ') {
      arr[i] = arr[i].toUpperCase();
      str += arr[i];
    }else{
    arr[i] = arr[i].toLowerCase();
    str += arr[i];
    }
  }
  return str;
}