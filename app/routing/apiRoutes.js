var results = require("../data/friends.js");

module.exports = function(app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------
  
    app.get("/api/friends", function(req, res) {
      res.json(results);
    });
  
    // API POST Requests
    // Below code handles when a user submits a form and thus submits data to the server.
    // In each of the below cases, when a user submits form data (a JSON object)
    // ...the JSON is pushed to the appropriate JavaScript array
    // (ex. User fills out a reservation request... this data is then sent to the server...
    // Then the server saves the data to the tableData array)
    // ---------------------------------------------------------------------------
  
    // app.post("/api/friends", function(req, res) {
      // req.body is available since we're using the body-parser middleware
      // if (tableData.length < 5) {
      //   tableData.push(req.body);
      //   res.json(true);
      // }
      // else {
      //   waitListData.push(req.body);
      //   res.json(false);
      // }

      

      
    // });
  
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