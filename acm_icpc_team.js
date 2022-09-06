const topic = ["11101", "10101", "11001", "10111", "10000", "01110"];

function acmTeam(topic) {
  let maxTopics = 0;
  let teamsMaxTopics = 0;
  for (let i = 0; i < topic.length - 1; i++) {
    for (let j = i + 1; j < topic.length; j++) {
      let topics = 0;
      let playerA = topic[i].split("");
      let playerB = topic[j].split("");
      playerA.map((t, index) => {
        if (t === "1" || playerB[index] === "1") topics++;
      });
      if (topics > maxTopics) {
        maxTopics = topics;
        teamsMaxTopics = 1;
        continue;
      }
      if (topics === maxTopics) teamsMaxTopics++;
    }
  }
  return [maxTopics, teamsMaxTopics];
}

console.log(acmTeam(topic));
