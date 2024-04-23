function reverseString(string) {
  const split = string.split('');
  const reverseArray = split.reverse();
  const join = reverseArray.join('');
  return join;
}

module.exports = reverseString;
