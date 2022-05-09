//Load the fs (filesystem) module
var fs = require("fs");

console.log("start readinf a file...");
//Read the content of the file into memory.
//these error-first callbacks are in the heart of Node js itself -
fs.readFile("phonebook.dat", function (err, contactData) {
  if (err) {
    console.log("ERROR!!! ${err}");
    return console.log(err); //throw err;
  }

  //contactData is a buffer,
  //convert to string.
  var text = contactData.toString();
  //console.log(text);

  let myfunc = function () {
    console.log("INSIDE readFILE");
  };
  setTimeout(myfunc, 3000);

  //Break up the file into lines.
  var lines = text.split("\n");
  lines.forEach(function (line) {
    var parts = line.split(" ");
    var name = parts[0];
    var phone = parts[2];
    console.log(name + "-" + phone);
  });
});
console.log("end of the file");
