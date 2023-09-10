function capitalize(str) {
  if (str.length === 0) return '';
  return str[0].toUpperCase() + str.substring(1, str.length);
}

export default capitalize;
