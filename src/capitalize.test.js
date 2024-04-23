const capitalize = require('./capitalize');

test('"one string" to be "One string"', () => {
  expect(capitalize('work for have good job later')).toMatch(
    'Work for have good job later'
  );
});
