const { computeNextGenerationCell } = require("./rules");
const rules = require("./answerRules.json");

function isLeftEdge(index) {
  return index === 0;
}

function isRightEdge(index, generationLength) {
  if (generationLength - 1 < index) {
    throw new Error("Bad index provided");
  }

  return index === generationLength - 1;
}

function getLeftEdgeParents(currentGeneration, index) {
  const firstIndex = index;
  const lastIndex = firstIndex + 2;
  return currentGeneration.slice(firstIndex, lastIndex);
}

function getRightEdgeParents(currentGeneration, index) {
  const firstIndex = index - 1;
  return currentGeneration.slice(firstIndex);
}

/**
 *
 * @param {number[]} currentGeneration
 * @param {number} pos index position to check
 */
function getParentCells(currentGeneration, index) {
  // Return middle edge
  firstIndex = index - 1;
  lastIndex = firstIndex + 3;
  return currentGeneration.slice(firstIndex, lastIndex);
}

function buildNextGeneration(currentGeneration, rules) {
  return currentGeneration.map((value, index) => {
    // Get the parents so we can build our rule
    if (isLeftEdge(index)) {
      const parents = getLeftEdgeParents(currentGeneration, index);
      return computeNextGenerationCell(parents, rules.leftEdgeRules);
    }

    if (isRightEdge(index, currentGeneration.length)) {
      const parents = getRightEdgeParents(currentGeneration, index);
      return computeNextGenerationCell(parents, rules.rightEdgeRules);
    }

    const parents = getParentCells(currentGeneration, index);
    const cell = computeNextGenerationCell(parents, rules.threeNeighbors);
    return cell;
  });
}

module.exports = {
  getLeftEdgeParents,
  getRightEdgeParents,
  getParentCells,
  buildNextGeneration,
};
