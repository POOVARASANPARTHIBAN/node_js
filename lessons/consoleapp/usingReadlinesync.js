//npm install --save readline-sync
var readlineSync = requiredSync.question("May I have your name?");
//wait for user's for user's response.
var userName = readlineSync.question("May I have your name?");
console.log("Hi" + username + "!");

//handle the secret text (e.g.password).
var favFood = readlineSync.question("What is your favorite food?", {
  hideEchoBack: true, // the typed text on screen is hidden by `*`(default).
});
console.log(" oh," + userName + " loves " + favFood + " ! ");

console.log("After");
// node 3_usingReadlinesync.js
