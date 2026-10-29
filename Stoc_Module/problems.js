const { log } = require("console");
let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// let names = readLine();
// console.log("Hello " + names);

/* 5 Steps 
1: understand the problem statement
2: come up with testcases
3: come up with logic
4: convert algo into code
5: dry run
6: execution
*/

// let news = readLine();
// console.log(`Hello ${news}`);

// let names = readLine();
// let or = readLine();
// console.log(`Hello ${names} !!!`);
// console.log(`You ordered ${or}.`);
