const Setup = require("./setup");
const Result = require("./result");
const rules = require("./answerRules.json");
const { buildNextGeneration } = require("./generation");

const setupArgs = Setup.getValidArgs(process.argv);
Setup.printSetupValues(setupArgs);

// Optimization, don't do more than needed
const maxGeneration = setupArgs.y - 1 + setupArgs.binarySize;
let currentGenerationNumber = 1;
console.log(`Optimization, don't go past generation: ${maxGeneration}`);

// Start running the program
const result = [];
let currentGeneration = Setup.buildFirstGeneration(setupArgs.gridSize);

// Now, check if the generation we have has a result
// Then build the next generation if needed
if (Result.containsResultPart(1, setupArgs)) {
  result.push(Result.getResultCell(setupArgs.x, currentGeneration));
}

while (currentGenerationNumber < maxGeneration) {
  currentGeneration = buildNextGeneration(currentGeneration, rules);
  currentGenerationNumber++;

  // Add the result if we should
  if (Result.containsResultPart(currentGenerationNumber, setupArgs)) {
    result.push(Result.getResultCell(setupArgs.x, currentGeneration));
  }
}

// reverse the elements of the array and convert to binary number from string
result.reverse();
const binaryString = result.join("");
const integerResult = Number.parseInt(binaryString, 2);

if (result.length !== setupArgs.binarySize) {
  throw new Error(`
  Result isn't the correct length...

   (-) (-)
     .-.    

    `);
}

// Print resulting numbers
console.log("Binary String: ", binaryString);
console.log("Result: ", integerResult);
