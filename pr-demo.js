// messy-pr-demo.js

// Trigger Qodo Merge review
// /review

// 1. Inconsistent imports & requires
import   fs from 'fs'
var path=require('path');
import os from "os"; const { spawn } = require('child_process')

/**
 * Doubles each element in the input array if it is non-empty.
 *
 * @param {number[]} data - The array of numbers to process.
 * @returns {number[]} An array with each element multiplied by 2, or an empty array if the input is empty.
 */
function processData(data) {
  if(data.length>0) {
    let result=data
      .map(item=>{return item*2})
       ;// stray semicolon
   return result
  }
else {return []}
}

/**
 * Reads a JSON file, mutates the input parameter with a value from the file, and processes data through a series of nested asynchronous callbacks.
 *
 * @param {number} a - Value to add to the `value` property from the JSON file.
 * @param {function} callback - Invoked with the final transformed result.
 *
 * @throws {Error} If reading or parsing the JSON file fails.
 *
 * @remark Mutates the input parameter by combining it with a value from the file.
 */
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

/**
 * Executes a string of JavaScript code using `eval`.
 *
 * @remark
 * This function can introduce security vulnerabilities and may cause global variable leaks or other unintended side effects. Use only with trusted input.
 *
 * @param {string} str - The JavaScript code to execute.
 */
function doEval(str) {
  eval(str)  // dangerous!
}
global.leak = "oops"

// 5. Magic numbers & hardcoded paths
const TIMEOUT = 5000; // why 5 seconds?
setTimeout(()=> console.log("Done"), TIMEOUT)
const CONFIG_PATH = "/etc/app/config.json"

/**
 * Attempts to call a nonexistent function, silently ignoring any errors.
 *
 * @remark Any exceptions thrown within the try block are caught and suppressed without logging or rethrowing.
 */
function risky() {
  try { 
    nonexistentFunction();
  } catch(e) {
    // silently ignore
  }
}

/**
 * Reads the contents of 'data.txt' asynchronously and passes the data to a callback.
 *
 * @param {function(string):void} cb - Callback invoked with the file contents as a string.
 */
function fetchData(cb){
  fs.readFile('data.txt','utf8',(e,d)=>{if(e) return; cb(d)})
}
/**
 * Simulates fetching data from a network resource and invokes the callback with the result.
 *
 * @param {string} url - The URL to fetch data from.
 * @param {function(string):void} cb - Callback invoked with the fetched data as a string.
 */
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

/**
 * Invokes a callback with a data string and returns a Promise that resolves to "done".
 *
 * @param {function(string): void} cb - Callback function to receive the string "data".
 * @returns {Promise<string>} Promise that resolves to the string "done".
 *
 * @remark The callback is called synchronously before the Promise resolves, which may lead to unexpected behavior if asynchronous execution is expected.
 */
function combo(cb) {
  return new Promise(resolve => {
    cb("data");
    resolve("done");
  });
}

/**
 * Returns the input value if it is a string or number; otherwise returns null.
 *
 * @param {*} x - The value to check.
 * @returns {(string|number|null)} The input if it is a string or number, or null for objects and other types.
 */
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
