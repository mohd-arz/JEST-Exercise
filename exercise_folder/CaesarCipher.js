function caesarCipher(str, num) {
  if (str.length == 0) return 0;
  str = smallerCaseFn(str);
  let cipher = '';
  const strArr = str.split('');
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] >= 'a' && strArr[i] <= 'z') {
      cipher += cipherConvertionFn(strArr[i], num);
    } else {
      cipher += strArr[i];
    }
  }
  return cipher;
}
function smallerCaseFn(str) {
  return str.toLowerCase();
}
function cipherConvertionFn(char, num) {
  const charCode = char.charCodeAt(0);
  const zCode = 'z'.charCodeAt(0);
  const aCode = 'a'.charCodeAt(0);

  let shifter = charCode + num;
  if (shifter > zCode) {
    shifter = (aCode - 1) + (shifter - charCode);
  } else if (shifter < aCode) {
    shifter = (zCode - 1) + (charCode - shifter);
  }

  return String.fromCharCode(shifter);
}

export default caesarCipher;
