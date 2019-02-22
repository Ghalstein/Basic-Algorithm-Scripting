// Finds an element in the specified array that is true for the specified function
function findElement(arr, func) {
  for(let i = 0; i < arr.length; i++){
    if(func(arr[i])) return arr[i];
  }
}