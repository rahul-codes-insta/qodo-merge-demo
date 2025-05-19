// messy-pr-demo.js

// Trigger Qodo Merge review
// /review

// 1. Inconsistent imports (spaces vs. no-spaces), var vs. let/const
import   fs from 'fs'
var path=require('path');

const RAW_DATA = [1, 2, 3, 4];

// 2. Mixed indentation (tabs & spaces), mismatched braces
function processData(data) {
  if(data.length > 0){
    let result = data.map((item) => {
    return item * 2 }) 
      ;  // stray semicolon
   return result
  }
  else
  {
      return []
  }
}

// 3. Outdated callback pattern instead of Promise/async
function readAndProcess(filename, callback) {
  fs.readFile(filename, 'utf8', function(err, content) {
    if (err) throw err
     const parsed = JSON.parse(content);
     callback(parsed);
  })
}

// 4. Unclear variable names, inconsistent spacing
readAndProcess(path.join(__dirname, 'input.json'), function(d){
 let x=processData(d)
console.log("Processed:",x)
});

// 5. Unused function with terrible naming
function doStuff1(){console.log("doing stuff!")}

// 6. New: mixing ES modules & CommonJS, dynamic require
import os from 'os';
const version = require('child_process').execSync('node -v');

// 7. New: an old-style Promise with no catch
function oldPromiseStyle(){
    return new Promise((resolve, reject)=>{
resolve("ok")
})
}

// 8. New: a callback-based fetchData plus an unused var
function fetchData(cb){
  fs.readFile('data.txt', 'utf-8', (err, data) => {
    if(err){
      console.error("Error!", err)
      return
    }
    cb(data)
  })
}
let unusedVar = 42

// 9. New: C-style for loop with var
for(var i=0;i<3;i++){
    console.log("Loop index:",i)
}

// 10. New: inconsistent trailing commas, semicolons & quotes
const numbers = [1, 2, 3, 4,];
const message = "Hello" + ' World';

// 11. Mixed export syntax
module.exports = {processData, readAndProcess, fetchData, oldPromiseStyle};
