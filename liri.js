require("dotenv").config();

// vars
var request = require("request");
var fs = require("fs");
var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var Spotify = new Spotify(keys.spotify);

// vars - user input
var command = process.argv[2];
var query = process.argv[3];

// execute function
userInputs(command, query);

var movieThis = function(movieQuery) {
// if user doesn't enter movie, default to Mr Nobody
     if(movieQuery === undefined) {
         movieQuery = "mr nobody";
     }
}

axios.get("http://www.omdbapi.com/?t=" + movieQuery +"&y=&plot=short&apikey=trilogy")
    function(response) {
        console.log("Movie Title: " + );
        console.log("Year of release: " + );
        console.log("IMDB rating: " + );
        console.log("Rotten Tomatoes release: " + );
        console.log("Country produced in: " + );
        console.log("Language: " + );
        console.log("Plot: " + );
        console.log("Actors: " + );
    }
