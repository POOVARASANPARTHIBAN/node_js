import * as readline from "node:readline";

import { stdin as input, stdout as output } from "node:process";
const r1 = readline.createInterface({ input, output, teminal: true });

r1.question("What do you think of Node.js?", (answer) => {
  console.log("Thank you for your valuable feedbak: ${answer}");
});
