/**
 * Implement these promise-returning functions.
 * Any successful value should be made available in the next `then` block chained
 * to the function invocation, while errors should be available in the `catch` block
 */

var fs = require('fs');
var request = require('request');
var Promise = require('bluebird');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFileAsync = function(filePath) {
  return new Promise(function(resolve, reject) {
    fs.readFile(filePath, 'utf8', function(err, contents) {
      if ( err ) {
        reject(err);
      } else {
        resolve(contents.split('\n')[0]);
      }
    })
  })

// fs.readFile(filePath, makeInformFunction(filePath))
// function makeInformFunction(filePath) {
//   return function(err, contents) {
//     console.log("Hey, I just read" + filePath)
//     if(err) 
//       console.log("There was an error reading the file.")
//     else
//       var file = callBackReview.pluckFirstLineFromFile(contents)
//       console.log("File contents are " + file)    
//   }
// }
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCodeAsync = function(url) {
  return new Promise(function(resolve, reject) {
    request.get(url, function(err, contents) {
      if( err ) {
        reject(err);
      } else {
        resolve(contents.statusCode);
      }
    })
  })
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCodeAsync: getStatusCodeAsync,
  pluckFirstLineFromFileAsync: pluckFirstLineFromFileAsync
};
