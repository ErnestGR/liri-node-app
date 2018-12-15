var axios = require("axios");
var fs = require("fs");

var omdb = function () {
    var divider = "\n-----------------------------------------------\n\n";

    this.movieThis = function (movieName) {
        var URL = "http://www.omdbapi.com/?apikey=50f4c52c&t=" + movieName;


        axios.get(URL).then(function (response) {
            var jsonData = response.data;
            
            var movieNameData = [
                "Movie: " + jsonData.Title,
                "Year: " + jsonData.Year,
                "Raiting: " + jsonData.Rated,
                "Country: " + jsonData.Country,
                "Language: " + jsonData.Language,
                "Plot: " + jsonData.Plot,
                "Actors: " + jsonData.Actors,
            ].join("\n\n");

            fs.appendFile("log.txt", movieNameData + divider, function (err) {
                if (err) throw err;
                console.log(movieNameData);
            });
        });
    };
};

module.exports = omdb;