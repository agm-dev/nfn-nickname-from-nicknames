# NFN - Nickname from nicknames

NFN is a simple library that exports a method to generate random nicknames by using substrings from provided nicknames.

### Installation:

```
npm install nfn --save
```

### Usage:

There is a whole example on examples folder.

```javascript
const { generateNicknames } = require("nfn");

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
```

### Options for nicknames generation:

```javascript
const options = {
  numberOfSegments: 2, // the number of sections each provided nickname will be splitted to
  numberOfResults: 10, // the number of randomly generated nicknames
  nicknameMinLength: 10, // the minimun length of the generated nicknames
};
```
