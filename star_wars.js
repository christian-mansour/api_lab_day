var request = require('request');
var prompt = require('prompt');
var open = require('open');

  // * CLI prints welcome message
  // * CLI prompts the user for input
  prompt.start();
  prompt.get(['characterName'], function(err, result) {
    console.log('You picked ' + result.characterName + '!');
    console.log('Here are some giphy\'s with that character.  Pick one!');
  });
  // * CLI makes a simple call to *X* API using the user input
  // * CLI outputs results

