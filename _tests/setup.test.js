const { getValidArgs, buildFirstGeneration } = require("../setup");

describe("Setup tests", () => {
  test("check for correct args", () => {
    const argv = ["nodepath", "filepath", 8, 2, 5, 4];
    const result = getValidArgs(argv);
    const expectedArgObject = {
      gridSize: 8,
      x: 2,
      y: 5,
      binarySize: 4,
    };
    expect(result).toEqual(expectedArgObject);
  });

  test("check for correct args", () => {
    const argv = ["node/path", "filepath", 8, 2, "bad arg", 4];
    const testError = () => {
      getValidArgs(argv);
    };
    expect(testError).toThrow(Error);
  });

  test("gridSize 8 returns [1,0,0,0,0,0,0,0]", () => {
    const gridSize = 8;
    const expectedGeneration = [1, 0, 0, 0, 0, 0, 0, 0];
    const generation1 = buildFirstGeneration(gridSize);

    expect(generation1[0]).toBe(1);
    expect(generation1.length).toBe(gridSize);
    expect(generation1).toEqual(expectedGeneration);
  });
});
