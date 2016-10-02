//require twitter npm
var twitter = require("twitter");

//require keys file with twitter info
var getTwitterKeys = require("./keys.js");

//pull in twitter API keys
var getMyTweets = new twitter({
	consumer_key: getTwitterKeys.twitterKeys.consumer_key,
  	consumer_secret: getTwitterKeys.twitterKeys.consumer_secret,
  	access_token_key: getTwitterKeys.twitterKeys.access_token_key,
  	access_token_secret: getTwitterKeys.twitterKeys.access_token_secret
});

//if user passes my-tweets parameter
if (process.argv[2] === "my-tweets") {
	//find my twitter handle and put in a variable
	var params = {screen_name: "marloinaustin"};
	//access object with twitter keys and get entries from timeline
	getMyTweets.get("statuses/user_timeline", params, function(error, tweets, response) {
		  if (!error) {
		  	//loop through response and pull only two pieces of info. stop at 20.
		  	for (var t = 0; t < 20; t++) {
		  		console.log(tweets[t].created_at);
		  		console.log(tweets[t].text);
		  }
	  }
	});
}