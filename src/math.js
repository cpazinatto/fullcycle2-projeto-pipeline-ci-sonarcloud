const squareRoot = (x) => {
  if (x < 0) {
    return NaN;
  }

  return Math.sqrt(x);
}

module.exports = { squareRoot };
