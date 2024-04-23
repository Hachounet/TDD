module.exports = caesarCipher;

function caesarCipher(string, shift) {
  const arrayString = convertString(string);
  const newArray = encrypted(arrayString, shift);
  const backToString = arrayToString(newArray);

  return backToString;
}

function convertString(string) {
  let stringToUpper = string.toUpperCase();
  let arrayString = stringToUpper.split('');

  return arrayString;
}

function arrayToString(array) {
  let string = array.join('');

  return string;
}

function encrypted(arrayString, shift) {
  const alpha = Array.from(Array(26)).map((e, i) => i + 65);
  const alphabet = alpha.map((x) => String.fromCharCode(x));

  let newArray = [];

  let puncRegex = /\p{P}/u;
  let accentedRegex = /([à-ü]|[À-Ü])/g;
  let whitespaceRegex = /\s\w*/;

  arrayString.forEach((element) => {
    if (puncRegex.test(element)) {
      newArray.push(element);
    } else if (accentedRegex.test(element)) {
      newArray.push(element);
    } else if (whitespaceRegex.test(element)) {
      newArray.push(element);
    } else {
      let actualPos = alphabet.indexOf(element);
      if (
        actualPos === alphabet.length - 1 ||
        actualPos + shift > alphabet.length - 1
      ) {
        let newShift = alphabet.length - actualPos;
        newArray.push(alphabet[0 + (shift - newShift)]);
      } else {
        newArray.push(alphabet[actualPos + shift]);
      }
    }
  });
  return newArray;
}

caesarCipher(
  "Voix ambiguë d'un coeur qui, au zéphyr, préfère les jattes de kiwis.",
  5
);
