//Load the http module to create a http server.
var http = require("http");

//Configure our HTTP server to repond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  console.log(request.url);
  response.writeHead(200, { "content-Type": "text/plain" });
  response.end("Hello World\n");
});
var port = 8000;
//listen on port 8000,IP defaults to 127.0.0.1
server.listen(port, (err) => {
  if (err) {
    return console.log("something bad happened", err);
  }
});
//put a friendly message on the terminal
console.log("Server reunning at http://127.0.0.1:8000/");
//node hello_Http.js
