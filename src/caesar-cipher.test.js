const caesarCipher = require('./caesar-cipher');

test('Must be encrypted', () => {
  expect(
    caesarCipher(
      "Voix ambiguë d'un coeur qui, au zéphyr, préfère les jattes de kiwis.",
      5
    )
  ).toMatch(
    "ATNC FRGNLZË I'ZS HTJZW VZN, FZ EÉUMDW, UWÉKÈWJ QJX OFYYJX IJ PNBNX."
  );
});
