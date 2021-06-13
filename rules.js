function computeLeftEdge(previous, rules) {
  return false;
}

function computeRightEdge(previous, rules) {
  return false;
}

/**
 *
 * @param {number[3]} previous
 * @param {object} rules
 * @returns
 */
function computeNextGenerationCell(previous, rules) {
  const cellNeighborRule = previous.join(",");
  return rules[cellNeighborRule];
}

const Rules = {
  computeLeftEdge,
  computeNextGenerationCell,
  computeRightEdge,
};

module.exports = Rules;
