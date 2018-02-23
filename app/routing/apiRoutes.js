var results = require("../data/friends.js");
var submission = require("../data/submission.js");

module.exports = function(app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------
  
    app.get("/api/results", function(req, res) {
      res.json(results);
    });

    app.get("/api/submission", function(req, res) {
      res.json(submission);
    });
  
    // API POST Requests
    // Below code handles when a user submits a form and thus submits data to the server.
    // In each of the below cases, when a user submits form data (a JSON object)
    // ...the JSON is pushed to the appropriate JavaScript array
    // (ex. User fills out a reservation request... this data is then sent to the server...
    // Then the server saves the data to the tableData array)
    // ---------------------------------------------------------------------------
  
    app.post("/api/submission", function(req, res) {
      // req.body is available since we're using the body-parser middleware
      submission.sleepy = parseInt(req.body.sleepy);
      submission.adventurous = parseInt(req.body.adventurous);
      submission.thoughtful = parseInt(req.body.thoughtful);
      submission.goaloriented = parseInt(req.body.goaloriented);
      submission.ambitious = parseInt(req.body.ambitious);
      submission.curious = parseInt(req.body.curious);
      submission.selfpossessed = parseInt(req.body.selfpossessed);
      submission.social = parseInt(req.body.social);
      submission.frivolous = parseInt(req.body.frivolous);
      submission.generous = parseInt(req.body.generous);
  
      compareObj = {};
      for(var key in results){
        compareObj[results[key].name] = {};
        compareObj[results[key].name].compareValues = {};

        compareObj[results[key].name].need = results[key].need;
        compareObj[results[key].name].img = results[key].img;

        // console.log("compareObj: ", compareObj);
        compareObj[results[key].name].compareValues.sleepy = Math.abs(results[key].sleepy - submission.sleepy);
        compareObj[results[key].name].compareValues.adventurous = Math.abs(results[key].adventurous - submission.adventurous);
        compareObj[results[key].name].compareValues.thoughtful = Math.abs(results[key].thoughtful - submission.thoughtful);
        compareObj[results[key].name].compareValues.goaloriented = Math.abs(results[key].goaloriented - submission.goaloriented);
        compareObj[results[key].name].compareValues.ambitious = Math.abs(results[key].ambitious - submission.ambitious);
        compareObj[results[key].name].compareValues.curious = Math.abs(results[key].curious - submission.curious);
        compareObj[results[key].name].compareValues.selfpossessed = Math.abs(results[key].selfpossessed - submission.selfpossessed);
        compareObj[results[key].name].compareValues.social = Math.abs(results[key].social - submission.social);
        compareObj[results[key].name].compareValues.frivolous = Math.abs(results[key].frivolous - submission.frivolous);
        compareObj[results[key].name].compareValues.generous = Math.abs(results[key].generous - submission.generous);


        compareObj[results[key].name].compareTotal = compareObj[results[key].name].compareValues.sleepy +
        compareObj[results[key].name].compareValues.adventurous +
        compareObj[results[key].name].compareValues.thoughtful +
        compareObj[results[key].name].compareValues.goaloriented +
        compareObj[results[key].name].compareValues.ambitious +
        compareObj[results[key].name].compareValues.curious +
        compareObj[results[key].name].compareValues.selfpossessed +
        compareObj[results[key].name].compareValues.social +
        compareObj[results[key].name].compareValues.frivolous +
        compareObj[results[key].name].compareValues.generous;

      }
      console.log(compareObj);

      var lowestCompare = {
        compareTotal: 100,
        need: "",
        img: ""
      };

      for (var key in compareObj) {
        if (compareObj[key].compareTotal < lowestCompare.compareTotal){
          lowestCompare.compareTotal = compareObj[key].compareTotal;
          lowestCompare.need = compareObj[key].need;
          lowestCompare.img = compareObj[key].img;
        }
      }

      console.log("lowestCompare: ", lowestCompare);
      res.json(lowestCompare);
      res.end();
    });
  
    // ---------------------------------------------------------------------------
    // I added this below code so you could clear out the table while working with the functionality.
    // Don"t worry about it!
  
    // app.post("/api/clear", function() {
    //   // Empty out the arrays of data
    //   tableData = [];
    //   waitListData = [];
  
    //   console.log(tableData);
    // });
};