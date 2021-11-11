function narcissistic(value) {
  // Code me to return true or false
  const arr = value.toString().split('');
  for (let i = 1; i <= 10; i++) {
    let result = 0;
    for (let j = 0; j < arr.length; j++) {
      result += Math.pow(parseInt(arr[j]), i);
    }
    if (result === value) {
      return true;
    }
  }
  return false;
}
