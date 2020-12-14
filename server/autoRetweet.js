var Twit = require("twit");

const {
  TWITTER_API_KEY,
  TWITTER_API_SECRET_KEY,
  TWITTER_ACCESS_TOKEN,
  TWITTER_ACCESS_TOKEN_SECRET,
} = process.env;

var T = new Twit({
  consumer_key: TWITTER_API_KEY,
  consumer_secret: TWITTER_API_SECRET_KEY,
  access_token: TWITTER_ACCESS_TOKEN,
  access_token_secret: TWITTER_ACCESS_TOKEN_SECRET,
  timeout_ms: 60 * 1000,
});

const autoRetweet = () => {
  const themes = [
    "#PotableWater",
    "#DrinkingWater",
    "#EauPotable",
    "#DrinkingFountain",
    "#GreenSpaces",
    "#SafeWaterForAll",
    "#MilieuxAquatiques",
    "#drinkwater",
    "#stayhydrated",
    "#eau_potable",
  ];

  const randomI = Math.floor(Math.random() * themes.length);
  let params = { q: `${themes[randomI]} since:2020-01-01` };

  const retweet = (tweetId) => {
    console.log("retweet", tweetId);
  };

  const gotData = (err, data, response) => {
    if (err) {
      console.log("error");
    } else {
      const randomI = Math.floor(Math.random() * data.statuses.length);
      const tweetId = data.statuses[randomI].id_str;
      T.post(`statuses/retweet/${tweetId}`, retweet(tweetId));
    }
  };

  T.get("/search/tweets", params, gotData);
};

module.exports = { autoRetweet };
