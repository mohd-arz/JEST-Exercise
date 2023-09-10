import reverseString from '../exercise_folder/reverseString';

test('Single word', () => {
  expect(reverseString('hello')).toBe('olleh');
});

test('Sentence', () => {
  expect(reverseString('Hello, World!')).toBe('!dlroW ,olleH');
});

test('Empty', () => {
  expect(reverseString('')).toBe('');
});
