function findLongestWordLength(str) {
  let strArr = str.split(' ');
  let n = '';
  for(let i = 0; i < strArr.length; i++){
    let comp = strArr[i].length > n.length;
    if(comp) n = strArr[i];
  }
  return n.length;
}