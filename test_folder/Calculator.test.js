import calculator from '../exercise_folder/Calculator';

test('Addition', () => {
  expect(calculator.add(2, 2)).toBe(4);
});

test('Subtraction', () => {
  expect(calculator.subtract(2, 2)).toBe(0);
});

test('Multiplication', () => {
  expect(calculator.multiply(2, 2)).toBe(4);
});

test('Division', () => {
  expect(calculator.divide(2, 2)).toBe(1);
});

test('Division By 0', () => {
  expect(calculator.divide(2, 0)).toBe(0);
});
