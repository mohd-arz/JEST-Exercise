function reverseString(str) {
  if (str.length === 0) return '';

  let rev = '';
  for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
  }
  return rev;
}

export default reverseString;
