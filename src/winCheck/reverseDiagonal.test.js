import reverseDiagonal from './reverseDiagonal';

test('should return 1 if x wins', () => {
  const matrix = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0],
  ];

  expect(reverseDiagonal(matrix)).toBe(1);
});

test('should return 2 if O wins', () => {
  const matrix = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [2, 0, 0, 0, 0, 0, 0],
    [0, 2, 0, 0, 0, 0, 0],
    [0, 0, 2, 0, 0, 0, 0],
    [0, 0, 0, 2, 0, 0, 0],
  ];

  expect(reverseDiagonal(matrix)).toBe(2);
});

test('should return 0 if no one wins', () => {
  const matrix = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
  ];

  expect(reverseDiagonal(matrix)).toBe(0);
});