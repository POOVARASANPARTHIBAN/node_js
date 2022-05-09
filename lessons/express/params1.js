const express = require("express");
const app = express();
const port = 8000;
var book = express.Router();
app.use("/book", book);
book.get("/fiction/:title/:author", function (request, response) {
  // var title = request.params["title"];
  var title = request.params.title;
  console.log(`Title ${title} `);
  // var noOfCopies = request.params["author"];
  var noOfCopies = request.params.author;
  console.log(author);
  response.send(`Book ordered ${title} . by author ${author}`);
});
app.get("/", (request, response) => {
  response.send("Welcome to Book world");
});
app.listen(port, (err) => {
  if (err) {
    return console.log("something bad happened", err);
  }

  console.log(`server is listening on http://localhost:${port}`);
});
//localhost:8000/book/fiction/starwars/10

book.get("/romance/:title/:", function (request, response) {
  var title = request.params["title"];
  console.log(`Title ${title} `);
  var noOfCopies = request.params["noofcopies"];
  console.log(noOfCopies);
  response.send(`Book ordered ${title} . No of Copies ${noOfCopies}`);
});
