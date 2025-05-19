// messy-pr-demo.js

// Trigger Qodo Merge review
// /review

// 1. Inconsistent imports & requires
import   fs from 'fs'
var path=require('path');
import os from "os"; const { spawn } = require('child_process')

// 2. Mixed indentation, brace styles, stray semicolons
function processData(data) {
  if(data.length>0) {
    let result=data
      .map(item=>{return item*2})
       ;// stray semicolon
   return result
  }
else {return []}
}

// 3. Deeply nested callbacks & parameter reassignment
function deepNest(a, callback) {
  fs.readFile('input.json', 'utf8', function(err, raw){
    if(err) throw err
    let obj = JSON.parse(raw)
    obj.value = a + obj.value  // parameter mutation
    fetchData(function(text){
          parse(text, function(parsed){
             transform(parsed, function(final){
                  callback(final)
             })
          })
    })
  })
}

// 4. eval usage & global variable leak
function doEval(str) {
  eval(str)  // dangerous!
}
global.leak = "oops"

// 5. Magic numbers & hardcoded paths
const TIMEOUT = 5000; // why 5 seconds?
setTimeout(()=> console.log("Done"), TIMEOUT)
const CONFIG_PATH = "/etc/app/config.json"

// 6. Try/catch swallowing errors
function risky() {
  try { 
    nonexistentFunction();
  } catch(e) {
    // silently ignore
  }
}

// 7. Duplicate function names
function fetchData(cb){
  fs.readFile('data.txt','utf8',(e,d)=>{if(e) return; cb(d)})
}
function fetchData(url, cb){  // overload that never gets called
  // pretend to fetch over network
  cb("fetched:"+url)
}

// 8. Inconsistent variable scopes & missing declarations
for(i=0;i<3;i++){  // i is global
   console.log(i)
}
if (true) {
  let hidden = "secret";
}
console.log(hidden)  // ReferenceError

// 9. Mixed string quotes & template vs concatenation
const greeting = "Hello " + 'World'
const info = `User: ${process.env.USER}`

// 10. Unused imports & variables
import unused from 'unused-module';
const temp = 12345;

// 11. Mixed export styles
export { processData };
module.exports.deepNest = deepNest;

// 12. Callback + Promise misuse
function combo(cb) {
  return new Promise(resolve => {
    cb("data");
    resolve("done");
  });
}

// 13. Spaghetti switch with fallthrough
function getType(x) {
  switch(typeof x) {
    case 'string':
    case 'number':
      return x;
    case 'object':
      // no break
    default:
      return null;
  }
}

// 14. Anonymous IIFE and leftover debugger
(function(){
    debugger;
    console.log("IIFE ran");
})();

// 15. Unnecessary semicolons and commas
;;;,
