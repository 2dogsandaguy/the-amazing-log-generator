/* // Import the necessary modules
const fs = require('fs'); // File system module for reading/writing files
const inquirer = require('inquirer'); // Module for handling user prompts
const { shapes } = require('./svgGenerator'); // Import the 'shapes' object from svgGenerator.js

// Function to prompt the user for input
const promptUser = async () => {
    // Use the 'inquirer' module to prompt the user for input and store the responses in 'userInput'
    const userInput = await inquirer.prompt([
    {
        name: 'text',
        message: 'Enter up to three characters:',
        validate: (input) => {
        if (input.length <= 0) {
            return 'Please enter at least one character';
            }else if (input.length > 3) {
            return 'Please enter no more than three characters';
            }else {
                return true;
            };
        },
        filter: (input) => input.trim(),
    },
    {
        name: 'textColor',
        message: 'Enter text color (color keyword or hexadecimal number):',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape:',
        choices: Object.keys(shapes), // Use shape keys from the 'shapes' object
        
    },
    {
        name: 'shapeColor',
        message: 'Enter shape color (color keyword or hexadecimal number):',
    },
    ]); 
    return userInput; // Return the user's input as an object
};

module.exports = { promptUser }; */


// Import the necessary modules
const inquirer = require('inquirer');
const { shapes } = require('./shapes'); // Import the 'shapes' object from shapes.js

// Function to prompt the user for input
const promptUser = async () => {
  // Use the 'inquirer' module to prompt the user for input and store the responses in 'userInput'
  const userInput = await inquirer.prompt([
    {
      name: 'text',
      message: 'Enter up to three characters:',
      validate: (input) => {
        if (input.length <= 0) {
          return 'Please enter at least one character';
        } else if (input.length > 3) {
          return 'Please enter no more than three characters';
        } else {
          return true;
        }
      },
      filter: (input) => input.trim(),
    },
    {
      name: 'textColor',
      message: 'Enter text color (color keyword or hexadecimal number):',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: Object.keys(shapes), // Use shape keys from the 'shapes' object
    },
    {
      name: 'shapeColor',
      message: 'Enter shape color (color keyword or hexadecimal number):',
    },
  ]);
  return userInput; // Return the user's input as an object
};

module.exports = { promptUser };
