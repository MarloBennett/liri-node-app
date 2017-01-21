# LIRI Bot

LIRI (Language Interpretation and Recognition Interface) is a command line node app that takes in parameters and gives you back data.

LIRI accepts these commands and returns the following information:

* `node liri.js my-tweets` : Shows my last 20 tweets and when they were created at in the terminal window.
* `node liri.js spotify-this-song '<song name here>'` : Shows the song's artist, name, a preview link from Spotify, and the album the song is from in the terminal window. If no song is provided, this command defaults to "The Sign" by Ace of Base. 
* `node liri.js movie-this '<movie name here>'` : Shows the movie's title, release year, IMDB rating, country produced in, language, plot, actors, Rotten Tomatoes rating, and Rotten Tomatoes URL in the terminal window. If no movie is provided, this command defaults to "Mr. Nobody."
* `node liri.js do-what-it-says` : Uses the fs Node package to use information from a text file to call a command (in this case, it runs spotify-this-song for "I Want it That Way").

Technologies used:

* JavaScript
* Node.js

Video: https://www.screencast.com/t/kTWKr889j

*Created as part of the The Coding Bootcamp at UT Austin.*