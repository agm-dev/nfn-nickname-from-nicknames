const splitIntoSegments = (nickname, numberOfSegments) => {
  if (nickname.length === numberOfSegments) {
    return nickname.split("");
  }

  if (nickname.length < numberOfSegments) {
    return [nickname];
  }

  let init = 0;
  let length = Math.floor(nickname.length / numberOfSegments);
  const segments = [];

  while (init < nickname.length) {
    const isLastOne = segments.length >= numberOfSegments - 1;
    if (isLastOne) {
      segments.push(nickname.substr(init))
      break;
    } else {
      segments.push(nickname.substr(init, length))
    }
    init += length;
  }

  return segments
};

exports.splitIntoSegments = splitIntoSegments

exports.generateNicknames = (users, options) => {
  const { numberOfSegments, numberOfResults, nicknameMinLength } = options;

  const data = users.reduce((final, nickname) => {
    const segments = splitIntoSegments(nickname, numberOfSegments);

    return segments.reduce((subFinal, segment) =>
      (typeof subFinal[segment] !== "undefined" ?
        {
          ...subFinal,
          [segment]: [...subFinal[segment].filter(i => i !== nickname), nickname],
        }:
        { ...subFinal, [segment]: [nickname] }
      ), final);
  }, {});

  const segments = Object.keys(data);
  return [...Array(numberOfResults || 10)].map(() => {
    let nick = "";
    const segmentsInfo = [];
    while (nick.length < (nicknameMinLength || 10)) {
      const segment = segments[Math.floor(Math.random() * segments.length)];
      nick = `${nick}${segment}`;
      segmentsInfo.push({ segment, users: data[segment] })
    }
    return { nick, segmentsInfo };
  });
};
