const { generateNicknames } = require("../src/nickname-from-nicknames");

const peopleInTheChat = [
  "g0ldstripes_",
  "nightbot",
  "tanya9psk",
  "eyren315",
  "iozul",
  "anaarry",
  "yuminita",
  "qraaam",
];

// main:
const generated = generateNicknames(peopleInTheChat, {
  numberOfSegments: 2,
  numberOfResults: 10,
  nicknameMinLength: 10,
});

console.log(generated);
