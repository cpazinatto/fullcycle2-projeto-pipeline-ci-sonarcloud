const { squareRoot } = require('./math');

describe('Math', () => {
  it('should be able to compute the square number of non-negative real numbers', () => {
    expect(squareRoot(4)).toBe(2);
  });

  it('should return NaN to the square number of negative real numbers', () => {
    expect(squareRoot(-4)).toBe(NaN);
  });
});
