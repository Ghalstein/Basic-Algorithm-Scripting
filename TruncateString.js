function truncateString(str, num) {
  if(str.length > num){
    let newStr = str.split('');
    str = '';
    for(let i = 0; i < num; i++)
      str += newStr[i];
    return str + '...'
  }
  else return str;
}