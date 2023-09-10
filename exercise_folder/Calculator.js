const calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  multiply(a, b) {
    return a * b;
  },
  divide(a, b) {
    if ((a / b === Infinity) || (a / b === NaN)) return 0;
    return a / b;
  },
};

export default calculator;
