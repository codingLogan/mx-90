const { containsResultPart, getResultCell } = require("../result");

describe("Result functions", () => {
  const rules = {
    gridSize: 8,
    x: 2,
    y: 2,
    binarySize: 4,
  };

  const generation = [0, 0, 1, 1, 0, 0, 1, 1];

  /** Example result of y2 size of 4
   * Generations are counted starting at 1
   *
   * gen1: 0
   * gen2: 1
   * gen3: 1
   * gen4: 1
   * gen5: 1
   * gen6: 0
   */

  test("Before the min", () => {
    const generationNumber = 1;
    const result = containsResultPart(generationNumber, rules);
    expect(result).toBe(false);
  });

  test("First binary is found", () => {
    const generationNumber = 2;
    const result = containsResultPart(generationNumber, rules);
    expect(result).toBe(true);
  });

  test("Last binary is found", () => {
    const generationNumber = 5;
    const result = containsResultPart(generationNumber, rules);
    expect(result).toBe(true);
  });

  test("Past the max", () => {
    const generationNumber = 6;
    const result = containsResultPart(generationNumber, rules);
    expect(result).toBe(false);
  });

  test("getResult pulls result from generation", () => {
    const xPosition = 2;
    expect(getResultCell(xPosition, generation)).toBe(0);
  });

  test("Throws Error when x is invalid", () => {
    const xPosition = 0;
    const testFunc = () => getResultCell(xPosition, generation);
    expect(testFunc).toThrow(Error);
  });
});
