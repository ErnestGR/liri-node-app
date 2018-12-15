require("dotenv").config();
var movieThis = require("./movie-this");
var concertThis = require("./concert-this");
var spotifyThis = require("./spotify-this");

var command = process.argv[2];

switch(command) {
    case "movie-this":
        var movieName = process.argv[3];
        new movieThis().movieThis(movieName);
    break;
    case "concert-this":
        var concertName = process.argv[3];
        new concertThis().concertThis(concertName)
    break;
    case "spotify-this":
    var trackName = process.argv[3];
    new spotifyThis().spotifyThis(trackName);
    break;
}