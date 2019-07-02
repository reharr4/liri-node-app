require("dotenv").config();

// gets keys from key file
var keys = require("./keys.js");
var spotify = new spotify(keys.spotify);


var command = process.argv[2];
var query = process.argv[3];

var axios = require("axios");

axios.get("http://www.omdbapi.com/?t=" + movieQuery +"&y=&plot=short&apikey=trilogy").then(
    function(response) {
        console.log("Movie Title: " + );
        console.log("Year of release: " + );
        console.log("IMDB rating: " + );
        console.log("Rotten Tomatoes release: " + );
        console.log("Country produced in: " + );
        console.log("Language: " + );
        console.log("Plot: " + );
        console.log("Actors: " + );
    })
    .catch(function(error) {
        if (error.request) {

        } else if (error.request) {
            console.log(error.request);
        } else {
            console.log("Movie Title is Mr. Nobody");

        }
    })
