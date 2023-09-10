import capitalize from '../exercise_folder/capitalize';

test('Single word', () => {
  expect(capitalize('hello')).toBe('Hello');
});

test('Sentences', () => {
  expect(capitalize('hello world')).toBe('Hello world');
});

test('Empty', () => {
  expect(capitalize('')).toBe('');
});
