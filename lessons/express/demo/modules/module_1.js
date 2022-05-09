// module_1.js
const items = ["item1", "item2", "item3", "item4"];

const addValues = (num1, num2) => {
  console.log(num1 + num2);
};

module.exports = { items, addValues };
// app.js
const module1 = require("./modules_01");

console.log(module1);
console.log("*************");
module1.addValues(2, 4);
for (var item in module1.items) {
  console.log(module1.items[item]);
}

//built-in modules (OS, Path, FS, HTTP)
//require a function to use modules.

// const httpServer = require('http'); //http modules

// const server = httpServer.createServer((req,res)=>{

//     if(req.url === '/')
//     {
//         res.end('welcome to our home page');
//     }
//     if(req.url === '/about')
//     {
//         res.end('Here is our about page');
//     }
//     else{
//         res.end(`<h1>oops</h1> <p>We can't seem to find the page your are</p>`)

//     }

// })

// server.listen(5000);

//after running, open y
