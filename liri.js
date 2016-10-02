//require twitter npm
var twitter = require("twitter");
//require request npm
var request = require("request");

//require keys file with twitter info
var getTwitterKeys = require("./keys.js");

//make variable for user-entered search term
var searchTerm = process.argv[3];

//variable for movie search
var movieQueryURL;

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

//if user passes movie-this parameter
if (process.argv[2] === "movie-this") {

	//if there is no index 3, sub in this query
	if (!process.argv[3]) {
		searchTerm = "Mr. Nobody";
	}

	//add search term to url; specify url should return tomatoes info
	movieQueryURL = "http://www.omdbapi.com/?t=" + searchTerm + "&y=&plot=short&tomatoes=true&r=json";

	request(movieQueryURL, function(error, response, body) {
		if (!error && response.statusCode === 200) {

			console.log(body);
			console.log("Movie title: " + JSON.parse(body)["Title"]);
			console.log("Release year: " + JSON.parse(body)["Year"]);
			console.log("IMDB rating: " + JSON.parse(body)["imdbRating"]);
			console.log("Produced in: " + JSON.parse(body)["Country"]);
			console.log("Language: " + JSON.parse(body)["Language"]);
			console.log("Plot: " + JSON.parse(body)["Plot"]);
			console.log("Actors: " + JSON.parse(body)["Actors"]);
			console.log("Rotten Tomatoes rating: " + JSON.parse(body)["tomatoRating"]);
			console.log("Rotten Tomatoes URL: " + JSON.parse(body)["tomatoURL"]);
		}
	});
}