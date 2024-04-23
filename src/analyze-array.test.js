const analyzeArray = require('./analyze-array');

test('Must return correct object', () => {
  expect(analyzeArray([0, 12, 52, 25, 8, 7, 3, 2, 5])).toMatchObject({
    min: 0,
    max: 52,
    length: 9,
    average: 12.666666666666666,
  });
});
