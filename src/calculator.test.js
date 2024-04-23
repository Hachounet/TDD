const calculator = require('./calculator');

test('Should return correct calculation', () => {
  expect(calculator.add(2, 7)).toBe(9);
  expect(calculator.substract(7, 2)).toBe(5);
  expect(calculator.multiply(7, 2)).toBe(14);
  expect(calculator.divide(6, 3)).toBe(2);
});
