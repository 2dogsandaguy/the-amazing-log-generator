const { promptUser } = require('./userInput');
const { generateHTML } = require('./svgGenerator');



/* // Import the necessary modules
const fs = require('fs'); // File system module for reading/writing files
const inquirer = require('inquirer'); // Module for handling user prompts */

/* // Define shape data
const shapes = {
  circle: { type: 'circle', points: '', dimensions: 'cx="150" cy="100" r="80"' },
  triangle: { type: 'polygon', points: 'points="150,20 220,180 80,180"', dimensions: '' },
  square: { type: 'rect', points: '', dimensions: 'x="70" y="20" width="160" height="160"' },
};

// Function to generate the SVG content dynamically based on user input
const generateSVG = (userInput) => {
  // Get the selected shape's data from the 'shapes' object
  const selectedShape = shapes[userInput.shape];
  return `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <${selectedShape.type} fill="${userInput.shapeColor}" ${selectedShape.dimensions} ${selectedShape.points} />
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${userInput.textColor}">${userInput.text}</text>
    </svg>
  `;
}; */

/* // Function to generate the HTML file with the embedded SVG
const generateHTML = (userInput) => {
  // Generate the SVG content using the 'generateSVG' function
  const shapeSVG = generateSVG(userInput);

  // Create the HTML content with a logo
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Generated SVG</title>
    </head>
    <body>
      <h1>Generated SVG</h1>
      ${shapeSVG}
    </body>
    </html>
  `;

  // Write the HTML content to a file named 'index.html'
  fs.writeFileSync('index.html', htmlContent);
  console.log('Generated index.html'); // Display a message indicating that the HTML file has been generated
}; */

/* // Function to prompt the user for input
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
}; */

// Main execution block
(async () => {
  // Prompt the user for input and store the responses in 'userInput'
  const userInput = await promptUser();

  // Generate the HTML file with the embedded SVG using the user's input
  generateHTML(userInput);
})();
