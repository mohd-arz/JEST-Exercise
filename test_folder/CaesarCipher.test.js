import caesarCipher from '../exercise_folder/CaesarCipher';

test('Single Char', () => {
  expect(caesarCipher('a', -1)).toBe('z');
});

test('Single word', () => {
  expect(caesarCipher('hello', 1)).toBe('ifmmp');
});

test('Single word with punctuation', () => {
  expect(caesarCipher('hello.', 1)).toBe('ifmmp.');
});

test('Single word with number', () => {
  expect(caesarCipher('hello 3!', 1)).toBe('ifmmp 3!');
});
