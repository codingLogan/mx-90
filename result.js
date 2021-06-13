/**
 *
 * @param {number} generationNumber number of generation to check
 * @param {{gridSize, x, y, binarySize}} providedArgs
 * @returns {boolean}
 */
function containsResultPart(generationNumber, providedArgs) {
  // See if the current generation
  const minGen = providedArgs.y;
  const maxGen = providedArgs.y + providedArgs.binarySize - 1;
  return generationNumber >= minGen && generationNumber <= maxGen;
}

/**
 *
 * @param {number} xPosition
 * @param {number[]} generation Cells to pluck from
 * @returns
 */
function getResultCell(xPosition, generation) {
  // xPosition is based on a position first position, not 0
  // so x should always be 1 or greater
  if (xPosition <= 0) {
    throw new Error("provided x position is invalid");
  }

  return generation[xPosition - 1];
}

module.exports = {
  containsResultPart,
  getResultCell,
};
