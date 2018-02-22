var path = require("path");

var results = require("../data/friends.js");


module.exports = function(app) {

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

//   // If no matching route is found default to home
//   app.get("*", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/reserve.html"));
//   });
};