const { computeNextGenerationCell } = require("../rules");
const rules = require("../answerRules.json");

describe("rule tests", () => {
  test("test rule 111 = 0", () => {
    const neighborCells = [1, 1, 1];
    expect(computeNextGenerationCell(neighborCells, rules.threeNeighbors)).toBe(
      0
    );
  });

  test("test rule 110 = 1", () => {
    const neighborCells = [1, 1, 0];
    expect(computeNextGenerationCell(neighborCells, rules.threeNeighbors)).toBe(
      1
    );
  });

  test("test rule 101 = 1", () => {
    const neighborCells = [1, 0, 1];
    expect(computeNextGenerationCell(neighborCells, rules.threeNeighbors)).toBe(
      1
    );
  });

  test("test rule 100 = 1", () => {
    const neighborCells = [1, 0, 0];
    expect(computeNextGenerationCell(neighborCells, rules.threeNeighbors)).toBe(
      0
    );
  });

  test("test rule 011 = 0", () => {
    const neighborCells = [0, 1, 1];
    expect(computeNextGenerationCell(neighborCells, rules.threeNeighbors)).toBe(
      0
    );
  });

  test("test rule 010 = 1", () => {
    const neighborCells = [0, 1, 0];
    expect(computeNextGenerationCell(neighborCells, rules.threeNeighbors)).toBe(
      1
    );
  });

  test("test rule 001 = 0", () => {
    const neighborCells = [0, 0, 1];
    expect(computeNextGenerationCell(neighborCells, rules.threeNeighbors)).toBe(
      0
    );
  });

  test("test rule 000 = 1", () => {
    const neighborCells = [0, 0, 0];
    expect(computeNextGenerationCell(neighborCells, rules.threeNeighbors)).toBe(
      1
    );
  });
});

describe("Right Edge Rules", () => {
  test("11 = 1", () => {
    const neighborCells = [1, 1];
    expect(computeNextGenerationCell(neighborCells, rules.rightEdgeRules)).toBe(
      1
    );
  });

  test("10 = 1", () => {
    const neighborCells = [1, 0];
    expect(computeNextGenerationCell(neighborCells, rules.rightEdgeRules)).toBe(
      1
    );
  });

  test("01 = 1", () => {
    const neighborCells = [0, 1];
    expect(computeNextGenerationCell(neighborCells, rules.rightEdgeRules)).toBe(
      1
    );
  });

  test("00 = 1", () => {
    const neighborCells = [0, 0];
    expect(computeNextGenerationCell(neighborCells, rules.rightEdgeRules)).toBe(
      1
    );
  });
});

describe("Left Edge Rules", () => {
  test("11 = 0", () => {
    const neighborCells = [1, 1];
    expect(computeNextGenerationCell(neighborCells, rules.leftEdgeRules)).toBe(
      0
    );
  });

  test("10 = 1", () => {
    const neighborCells = [1, 0];
    expect(computeNextGenerationCell(neighborCells, rules.leftEdgeRules)).toBe(
      1
    );
  });

  test("01 = 0", () => {
    const neighborCells = [0, 1];
    expect(computeNextGenerationCell(neighborCells, rules.leftEdgeRules)).toBe(
      0
    );
  });

  test("00 = 1", () => {
    const neighborCells = [0, 0];
    expect(computeNextGenerationCell(neighborCells, rules.leftEdgeRules)).toBe(
      1
    );
  });
});
