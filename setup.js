function getValidArgs(argv) {
  // Remove first 2 args
  const args = argv.slice(2);

  // Make sure args are all integers
  if (!Array.isArray(args) || args.length < 4 || args.length > 4) {
    throw new Error(`Please provide 4 arguments:
    gridSize: number
    x: number
    y: number
    binarySize: number
    `);
  }

  const numbers = args.map((arg) => {
    const parsed = Number.parseInt(arg, 10);

    if (Number.isNaN(parsed)) {
      throw new Error(`All arguments must be integers.
        The argument provided was a ${typeof arg}
       `);
    }

    return parsed;
  });

  return {
    gridSize: numbers[0],
    x: numbers[1],
    y: numbers[2],
    binarySize: numbers[3],
  };
}

function buildFirstGeneration(gridSize) {
  const generation1 = [1];
  for (let i = 1; i < gridSize; i++) {
    generation1.push(0);
  }

  return generation1;
}

function printSetupValues({ gridSize, x, y, binarySize }) {
  console.log(`
    Grid Size: ${gridSize}
    x start: ${x}
    y start: ${y}
    binarySize: ${binarySize}

  `);
}

function getMaxGenerationNumber(yPosition, binarySize) {
  return yPosition - 1 + binarySize;
}

module.exports = {
  getValidArgs,
  buildFirstGeneration,
  printSetupValues,
  getMaxGenerationNumber,
};
