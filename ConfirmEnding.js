function confirmEnding(str, target) {
  let strArr = str.split(''); // array of the characters in the string
  let tgArr = target.split(''); // array of char in target string
  let flag = true; // flag for whether the end is the same as target
  for(let i = 0; i < tgArr.length; i++){
    console.log(tgArr[i]);
    // Testing the elements of the target string with elements of the string
    if(tgArr[i] !== strArr[strArr.length - tgArr.length + i]){
      flag = false;
      break;
    }
  }
  return flag;
}