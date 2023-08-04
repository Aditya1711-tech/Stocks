const fs = require("fs");

let value = 500;

ind = 20;
let arr = [value];
let maxi = [];
let mini = [];
let last = value;
let min = 100000;
let max = 0;
for (let j = 0; j < 28800; j++) {
  let decide = Math.floor(Math.random() * 2);
  let count = Math.floor(Math.random() * 3);
  let frac = Math.random();
  count++;
  if (decide) {
    let decide2 = Math.floor(Math.random() * 2);
    if (!decide2) {
      let decide3 = Math.floor(Math.random() * 2);
      if (decide3) {
        last += last * ((count * frac) / 100);
      } else {
        last -= last * ((count * frac) / 100);
      }
    } else {
      let decide3 = Math.floor(Math.random() * 2);
      if (decide3) {
        last -= last * ((count * frac) / 100);
      } else {
        last += last * ((count * frac) / 100);
      }
    }
  } else {
    let decide2 = Math.floor(Math.random() * 2);
    if (decide2) {
      let decide3 = Math.floor(Math.random() * 2);
      if (decide3) {
        last += last * ((count * frac) / 100);
      } else {
        last -= last * ((count * frac) / 100);
      }
    } else {
      let decide3 = Math.floor(Math.random() * 2);
      if (decide3) {
        last -= last * ((count * frac) / 100);
      } else {
        last += last * ((count * frac) / 100);
      }
    }
  }
  arr.push(Number(last.toFixed(2)));
  max = Math.max(max, last);
  min = Math.min(min, last);
}
maxi.push(Number(max.toFixed(2)));
mini.push(Number(min.toFixed(2)));
let data = {
  price: arr,
  mn: mini,
  mx: maxi,
};
const jsonString = JSON.stringify(data);
fs.writeFile(`karan.json`, jsonString, (err) => {
  if (err) {
    console.log("Error writing file", err);
  } else {
    console.log("Successfully wrote file");
  }
});
