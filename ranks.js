function getRankName(rank) {
  if (0 <= rank && rank < 50) {
    return "Bronze 1";
  } else if (50 <= rank && rank < 100) {
    return "Bronze 2";
  } else if (100 <= rank && rank < 150) {
    return "Bronze 3";
  } else if (150 <= rank && rank < 200) {
    return "Bronze 4";
  } else if (200 <= rank && rank < 250) {
    return "Bronze 5";
  } else if (250 <= rank && rank <= 300) {
    return "Bronze 6";
  } else if (300 < rank && rank < 350) {
    return "Silver 1";
  } else if (350 <= rank && rank < 400) {
    return "Silver 2";
  } else if (400 <= rank && rank < 450) {
    return "Silver 3";
  } else if (450 <= rank && rank < 500) {
    return "Silver 4";
  } else if (500 <= rank && rank < 550) {
    return "Silver 5";
  } else if (550 <= rank && rank <= 600) {
    return "Silver 6";
  } else if (600 < rank && rank < 650) {
    return "Gold 1";
  } else if (650 <= rank && rank < 700) {
    return "Gold 2";
  } else if (700 <= rank && rank < 750) {
    return "Gold 3";
  } else if (750 <= rank && rank < 800) {
    return "Gold 4";
  } else if (800 <= rank && rank < 850) {
    return "Gold 5";
  } else if (850 <= rank && rank <= 900) {
    return "Gold 6";
  } else if (900 < rank && rank < 950) {
    return "Platinum 1";
  } else if (950 <= rank && rank < 1000) {
    return "Platinum 2";
  } else if (1000 <= rank && rank < 1050) {
    return "Platinum 3";
  } else if (1050 <= rank && rank < 1100) {
    return "Platinum 4";
  } else if (1100 <= rank && rank < 1150) {
    return "Platinum 5";
  } else if (1150 <= rank && rank <= 1200) {
    return "Platinum 6";
  } else if (1200 < rank && rank < 1250) {
    return "Diamond 1";
  } else if (1250 <= rank && rank < 1300) {
    return "Diamond 2";
  } else if (1300 <= rank && rank < 1350) {
    return "Diamond 3";
  } else if (1350 <= rank && rank < 1400) {
    return "Diamond 4";
  } else if (1400 <= rank && rank < 1450) {
    return "Diamond 5";
  } else if (1450 <= rank && rank <= 1500) {
    return "Diamond 6";
  } else if (1500 < rank) {
    return "Onyx";
  } else {
    return "Rank out of range";
  }
}

function getRanks(rankOne, rankTwo) {
  if (parseInt(rankOne) > parseInt(rankTwo)) {
    return [rankOne, rankTwo];
  } else {
    return [rankTwo, rankOne];
  }
}

const BASE_RANK = 900;
const HIGHEST_SPREAD = 600;

const calculateRank = document.querySelector("#calculate-rank");
if (calculateRank) {
  calculateRank.addEventListener("click", () => {
    let rankOne = document.querySelector("#rank-one");
    let rankTwo = document.querySelector("#rank-two");

    const [higherRank, lowerRank] = getRanks(rankOne.value, rankTwo.value);

    const parsedHigherRank = parseInt(higherRank);
    const parsedLowerRank = parseInt(lowerRank);

    let tightenedLimit;
    let diff = parsedHigherRank - BASE_RANK;
    let goal;

    if (diff > HIGHEST_SPREAD) {
      tightenedLimit = HIGHEST_SPREAD;
      goal = parsedHigherRank - HIGHEST_SPREAD;
    } else {
      tightenedLimit = diff / 2;
      goal = parsedHigherRank - (BASE_RANK - tightenedLimit);
    }

    console.log(
      `Higher rank: ${getRankName(parsedHigherRank)} (${parsedHigherRank})`
    );
    console.log(
      `Lower rank: ${getRankName(parsedLowerRank)} (${parsedLowerRank})`
    );
    console.log(`Tightened by: ${Math.floor(tightenedLimit)}`);

    let eloNeeded = goal - parsedLowerRank;

    console.log(`Goal: ${getRankName(goal)} (${Math.floor(goal)})`);
    const resultContainer = document.querySelector(".result-container");
    console.log("class list r", resultContainer.classList);
    resultContainer.classList.remove("hide");

    if (eloNeeded <= 0) {
      document.querySelector(
        "#result"
      ).innerHTML = `Already in range to play together. ${Math.abs(
        Math.floor(eloNeeded)
      )} over goal.`;
    } else {
      document.querySelector(
        "#result"
      ).innerHTML = `ELO needed to play together: ${Math.abs(eloNeeded)}`;
    }
  });
}
