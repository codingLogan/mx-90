describe("known results", () => {
  test("solvePuzzle(8, 2, 3, 5) = 7", () => {
    const result = solvePuzzle(8, 2, 3, 5);
    expect(result).toBe(7);
  });

  test("solvePuzzle(16, 3, 7, 8) = 53", () => {
    const result = solvePuzzle(16, 3, 7, 8);
    expect(result).toBe(53);
  });
});
