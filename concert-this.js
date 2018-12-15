var axios = require("axios");
var fs = require("fs");
var moment = require('moment');

var concertThis = function () {
    var divider = "\n-----------------------------------------------\n\n";

    this.concertThis = function (artistName) {
        var URL = "https://rest.bandsintown.com/artists/" + artistName + "/events?app_id=codingbootcamp";
        axios.get(URL).then(function (response) {
            var jsonData = response.data;

            jsonData.map((concert) => {
                var concertData = [
                    "Name: " + concert.venue.name,
                    "Location: " + concert.venue.country,
                    "Date: " + moment(concert.datetime, "DD-MM-YYYY").toDate()
                ].join("\n\n");

                fs.appendFile("log.txt", concertData + divider, function (err) {
                    if (err) throw err;
                    console.log(concertData);
                });
            });
        });
    };
};

module.exports = concertThis;