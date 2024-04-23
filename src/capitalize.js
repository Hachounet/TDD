function capitalize(string) {
  let firstChar = string.slice(0, 1).toUpperCase();

  return firstChar.concat(string.slice(1));
}
module.exports = capitalize;
