import diagonal from './diagonal';

test('diagonal should return 1 if x wins', () => {
  const board = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 1, 0, 0, 1],
  ];

  expect(diagonal(board)).toBe(1);
});

test('diagonal should return 2 if O wins', () => {
  const board = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 2],
    [0, 0, 0, 0, 0, 2, 0],
    [0, 0, 0, 0, 2, 0, 0],
    [0, 0, 0, 2, 0, 0, 1],
  ];

  expect(diagonal(board)).toBe(2);
});