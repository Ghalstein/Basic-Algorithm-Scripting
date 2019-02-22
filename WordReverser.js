// Reverses the string. Could have used the reverse and join method but wanted to actually code it out.
function reverseString(str) {
  let oldArr = str.split('');
  str = '';
  for(let i = oldArr.length-1; i >= 0; i--){
    str += oldArr[i];
  }
  console.log(str);
  return str;
}