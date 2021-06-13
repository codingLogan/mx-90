const computeNextGenerationCell = require("../rules");
const {
  getLeftEdgeParents,
  getRightEdgeParents,
  getParentCells,
  buildNextGeneration,
} = require("../generation");
const rules = require("./answerRules.json");

describe("config tests", () => {
  const currentGeneration = [1, 2, 3, 4, 5, 6, 7, 8];
  test("Get parent cells", () => {
    const middleParents = getParentCells(currentGeneration, 3);
    expect(middleParents).toEqual([3, 4, 5]);
  });

  test("Get left parents", () => {
    const leftEdgeParents = getLeftEdgeParents(currentGeneration, 0);
    expect(leftEdgeParents).toEqual([1, 2]);
  });

  test("Get right parents", () => {
    const rightEdgeParents = getRightEdgeParents(currentGeneration, 7);
    expect(rightEdgeParents).toEqual([7, 8]);
  });

  test("Test that the system stores the input", () => {
    const currentGeneration = [1, 0, 0, 0, 0, 0, 0, 0];
    const expectedGeneration = [1, 0, 1, 1, 1, 1, 1, 1];
    const generation = buildNextGeneration(currentGeneration, rules);

    expect(generation).toEqual(expectedGeneration);
  });
});
