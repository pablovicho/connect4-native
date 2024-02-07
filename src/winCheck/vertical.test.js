import vertical from "./vertical";

test("should return 0 if no win condition is met", () => {
  const matrix = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
  ];

  expect(vertical(matrix)).toBe(0);
});

test("should return 1 if x wins", () => {
  const matrix = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0],
  ];

  expect(vertical(matrix)).toBe(1);
});

test("should return 2 if o wins", () => {
  const matrix = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 2, 0, 0, 0],
    [0, 0, 0, 2, 0, 0, 0],
    [0, 0, 0, 2, 0, 0, 0],
    [0, 0, 0, 2, 0, 0, 0],
  ];

  expect(vertical(matrix)).toBe(2);
});