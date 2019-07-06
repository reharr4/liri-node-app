require("dotenv").config();

// vars
var request = require("request");
var fs = require("fs");
var axios = require("axios");
var moment = require("moment");
moment().format();
var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var Spotify = new Spotify(keys.spotify);

// vars - user input
var command = process.argv[2];
var query = process.argv[3];

// execute function
userInput(command, query);

function userInput(command, query) {
    switch(command) {
        case "concert-this": 
            concertThis(query);
         break;
        case "spotify-this-song":
            songInfo(query);
            break;
        case "movie-this":
            movieInfo(query);
            break;
        case "do-what-it-says":
            someInfo();
            break;
    }

};

// Bands in Town
function concertThis(query){
    axios.get("https://rest.bandsintown.com/artists/" + query + "/events?app_id=codingbootcamp").then(
        function (response){
            for (var i = 0; i < response.data.length; i++) {
                var dateTime = response.data[i].dateTime;
                var dateArr = dateTime.split("T");

                var concertResults =
                    "---------------------------------------" +
                    "\nVenue Name: " + response.data[i].venue.name +
                    "\nVenue Location: " + response.data[i].venue.city +
                    "\nDate of Event: " + moment(dateArr[0], "MM-DD-YYYY");
                    console.log(concertResults);
            }
        })
        .catch(function (error){
            console.log(error);
        });
    }


// // Spotify
// axios.get("https://api.spotify.com/song/" + song);
//     console.log("Artist(s): ");
//     console.log("Song name: ");
//     console.log("Preview from Spotify: ");
//     console.log("Album: ");

// // OMDB
// function movieInfo(query){
// // if user doesn't enter movie, default to Mr Nobody
//      if(query === undefined) {
//          query = "mr nobody";
//          console.log("If you haven't watched 'Mr. Nobody,' then you should: http://www.imdb.com/title/tt0485947/", "\nIt's on Netflix!")
//      }
// axios.get("http://www.omdbapi.com/?t=" + movieQuery +"&y=&plot=short&apikey=trilogy")
//     function(response) {
//         console.log("Movie Title: ");
//         console.log("Year of release: ");
//         console.log("IMDB rating: ");
//         console.log("Rotten Tomatoes release: ");
//         console.log("Country produced in: ");
//         console.log("Language: ");
//         console.log("Plot: ");
//         console.log("Actors: ");
//     }
// }