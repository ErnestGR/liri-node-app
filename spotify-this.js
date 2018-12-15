var Spotify = require("node-spotify-api");
var fs = require("fs");
var keys = require("./keys");
var spotify = new Spotify(keys.spotify);

var spotifyThis = function () {
    var divider = "\n-----------------------------------------------\n\n";

    this.spotifyThis = function (trackName) {

        spotify.search({ type: 'track', query: trackName }, function(err, data) {
            if (err) {
              return console.log('Error occurred: ' + err);
            }
           
          console.log(data.tracks.items); 
          });
    };
};

module.exports = spotifyThis;