//lood the fs (filesystem) module
var fs = require("fs");
let contactData;
try {
  // Read the contents of the file into memory.
  contactData = fs.readFileSync("phonebook.dat", "utf-8");
  // contactData is a Bufer,
  // convert to string.
  var text = contactData.toString();
  //console.log(text);
  //Break up the files into lines.
  var lines = text.split("\n");

  lines.forEach(function (lines) {
    var parts = line.split("");
    var name = parts[0];
    var phone = parts[2];
    console.log(name + " - " + phone);
  });
} catch (ex) {
  console.log(`ERROR!!!: ${ex}`);
}
console.log("Completed...");
//node readFiles.js
