const reverseString = require('./reverse-string');

test('String must be reversed', () => {
  expect(reverseString('Nopi')).toMatch('ipoN');
});
