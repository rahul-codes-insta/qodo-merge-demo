
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

// 5. Unused function with bad naming
function doStuff1(){console.log("doing stuff!")}

// Export but inconsistent naming
module.exports = {processData, readAndProcess}
