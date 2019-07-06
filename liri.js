require("dotenv").config();

// vars
var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var Spotify = new Spotify(keys.spotify);

// moment for Date with Bands in Town
var moment = require("moment");
moment().format();

// var request = require("request");

// to read random.txt for do-what-it-says
var fs = require("fs");

// get info from APIs for movie- and concert-this
var axios = require("axios");


// vars - user input
var command = process.argv[2]; //switch statment
var value = process.argv[3]; //send song/movie/concert to respective functions


switch (command) {
    case "concert-this":
        concertThis(value);
        break;
    case "spotify-this-song":
        spotifyThis(value);
        break;
    case "movie-this":
        movieThis(value);
        break;
    case "do-what-it-says":
        saysThis();
        break;
};

// };

// Bands in Town
function concertThis(value) {
    axios.get("https://rest.bandsintown.com/artists/" + value + "/events?app_id=codingbootcamp").then(
        function (response) {
            for (var i = 0; i < response.data.length; i++) {
                // dateTime response saved into variable
                var datetime = response.data[i].datetime;
                // split date and time in response
                var dateArr = datetime.split('T');

                var concertResults =
                    "---------------------------------------" +
                    "\nVenue Name: " + response.data[i].venue.name +
                    "\nVenue Location: " + response.data[i].venue.city +
                    "\nDate of Event: " + moment(dateArr[0]).format("MM-DD-YYYY");
                console.log(concertResults);
            }
        })
        .catch(function (error) {
            console.log(error);
        });
};


// // Spotify
function spotifyThis(value) {
    // if user doesn't enter a song, default to "The Sign" - Ace of Base
    if (value === undefined) {
        value = "The Sign";
    }
    Spotify.request({ type: "track", query: value })
        .then(function (response) {
            var songs = data.tracks.items;
            for (i = 0; i < songs.length; i++) {
                console.log("Artist(s): " + response.data.artist);
                console.log("Song name: " + response.data.Name);
                console.log("Preview from Spotify: ");
                console.log("Album: ");
            }

        })
        .catch(function (err) {
            console.log(err);
        });

};


// // OMDB
function movieThis(value) {
    // if user doesn't enter movie, default to Mr Nobody
    if (value === undefined) {
        value = "mr nobody";
        console.log("\nIf you haven't watched 'Mr. Nobody,' then you should: http://www.imdb.com/title/tt0485947/");
        console.log("It's on Netflix!");
    }
    axios.get("http://www.omdbapi.com/?t=" + value + "&y=&plot=short&apikey=trilogy").then(
        function (response) {
            console.log("Movie Title: " + response.data.Title);
            console.log("Year of release: " + response.data.Year);
            console.log("IMDB rating: " + response.data.imdbRating);
            console.log("Rotten Tomatoes rating: " + response.data.Ratings[1].Value);
            console.log("Country produced in: " + response.data.Country);
            console.log("Language: " + response.data.Language);
            console.log("Plot: " + response.data.Plot);
            console.log("Actors: " + response.data.Actors);
        }
    )
};

// Do What It Says
fs.readFile("random.txt", "utf8", function(error, value) {
    if(error) {
        return console.log(error);
    }
    console.log(value);

    var dataArr = value.split(",");
    
    console.log(dataArr);
});