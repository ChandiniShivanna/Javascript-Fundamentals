const { log } = require("console");
let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// // let names = readLine();
// // console.log("Hello " + names);

// /* 5 Steps
// 1: understand the problem statement
// 2: come up with testcases
// 3: come up with logic
// 4: convert algo into code
// 5: dry run
// 6: execution
// */

// // let news = readLine();
// // console.log(`Hello ${news}`);

// // let names = readLine();
// // let or = readLine();
// // console.log(`Hello ${names} !!!`);
// // console.log(`You ordered ${or}.`);

// // let up = parseInt(readLine());
// // let gst = parseInt(readLine());
// // let per = parseInt((up * gst) / 100);
// // console.log(per + up);

// // let a1 = parseInt(readLine());
// // let a2 = parseInt(readLine());
// // let a3 = parseInt(readLine());
// // let a4 = a3 - a2 + a3;
// // console.log(a4);

// // let p = readLine();
// // let t = readLine();
// // let r = readLine();
// // let SI = (p * t * r) / 100;
// // console.log(parseInt(SI));

// // let num = readLine().split(" ").map(Number);
// // let mb = num[0] * num[1] * num[2];
// // console.log(mb);

// // let n = parseInt(readLine());
// // let sum = 0;
// // for (let i = 1; i <= n; i++) {
// //   sum = i * i + sum;
// // }
// // console.log(sum);

// // let a = parseInt(readLine());
// // let b = parseInt(readLine());
// // let t = 180 - (a + b);
// // console.log(parseInt(t));

// // let age = parseInt(readLine());
// // if (age > 60) {
// //   console.log("Eligible");
// // } else {
// //   console.log("not eligible");
// // }

// // let age = parseInt(readLine());
// // let gen = readLine();
// // if (age > 60) {
// //   console.log("Eligible");
// // } else if (age >= 58 && gen === "F") {
// //   console.log("ELligible");
// // } else {
// //   console.log("NOT Eligible");
// // }

// // let n = parseInt(readLine());
// // if (n % 2 === 0) console.log("Even");
// // else console.log("Odd");

// // let r = parseInt(readLine());
// // if (r < 1200) console.log("ABC");
// // else if (r < 2800) console.log("ARC");
// // else console.log("AGC");

// // let age = parseInt(readLine());
// // let gen = readLine();
// // if (age > 60) console.log("EL");
// // else if (age >= 60 && gen === "F") console.log("E");
// // else console.log("not ele");

// // let num = readLine().split(" ").map(Number);
// // let o = 0;
// // for (let i = 0; i < num.length; i++) {
// //   if (num[i] % 2 != 0) o++;
// // }
// // console.log(o);

// // let n = parseInt(readLine());
// // let num = parseInt(readLine());
// // let c = 1;
// // for (let i = 1; i <= n - 1; i++) {
// //   if (num == parseInt(readLine())) {
// //     c++;
// //   }
// // }
// // console.log(c);

// // let n = parseInt(readLine());
// // let o = 0,
// //   e = 0;
// // for (let i = 0; i < n; i++) {
// //   if (parseInt(readLine()) % 2 !== 0) o++;
// //   else e++;
// // }
// // console.log(o, e);

// // let c = parseInt(readLine());
// // let c1 = 0,
// //   c2 = 0,
// //   c3 = 0;
// // while (c != 0) {
// //   if (c === 1) c1++;
// //   else if (c === 2) c2++;
// //   else if (c === 3) c3++;
// //   c = parseInt(readLine());
// // }
// // console.log(c1, c2, c3);

// let qi = parseInt(readLine());
// let n = parseInt(readLine());
// let flag = "not present";
// for (let i = 0; i < n; i++) {
//   if (qi === parseInt(readLine())) {
//     flag = "present";
//     break;
//   }
// }
// console.log(flag);

// let m = parseInt(readLine());
// let n = parseInt(readLine());
// if (m < 0 && n < 0) {
//   console.log(-1);
// } else {
//   for (let i = m; i <= n; i++) {
//     if (i >= 0) console.log(i);
//   }
// }

// let n = parseInt(readLine());
// let sum = 0;
// for (let i = 0; i < n; i++) {
//   let q = parseInt(readLine());
//   if (q > 0) {
//     sum = sum + q;
//   }
// }
// console.log(sum);

let n = parseInt(readLine()),
  ec = 0;
for (let i = 0; i < n; i++) {
  if (parseInt(readLine()) <= 18) continue;
  else {
    ec++;
  }
}
console.log(ec);
