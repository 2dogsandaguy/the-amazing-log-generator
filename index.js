const fs = require('fs');
const inquirer = require('inquirer');

// Define shape data
const shapes = {
  circle: { type: 'circle', points: '', dimensions: 'cx="150" cy="100" r="80"' },
  triangle: { type: 'polygon', points: 'points="150,20 220,180 80,180"', dimensions: '' },
  square: { type: 'rect', points: '', dimensions: 'x="70" y="20" width="160" height="160"' },
};
// Function to generate SVG content dynamically
const generateSVG = (userInput) => {
  const selectedShape = shapes[userInput.shape];
  return `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <${userInput.shape} cx="150" cy="100" r="80" fill="${userInput.shapeColor}" />
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${userInput.textColor}">${userInput.text}</text>
    </svg>
  `;
};

// Function to generate the HTML file with the embedded SVG
const generateHTML = (userInput) => {
  const shapeSVG = generateSVG(userInput);

  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Generated SVG</title>
    </head>
    <body>
      <h1>Generated SVG:</h1>
      ${shapeSVG}
      <!-- Your HTML content here -->
    </body>
    </html>
  `;

  fs.writeFileSync('index.html', htmlContent);
  console.log('Generated index.html');
};

const promptUser = async () => {
  const userInput = await inquirer.prompt([
    {
      name: 'text',
      message: 'Enter up to three characters:',
      validate: input => input.length <= 3 || 'Please enter up to three characters.',
    },
    {
      name: 'textColor',
      message: 'Enter text color (color keyword or hexadecimal number):',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: Object.keys(shapes),
    },
    {
      name: 'shapeColor',
      message: 'Enter shape color (color keyword or hexadecimal number):',
    },
  ]);

  return userInput;
};

(async () => {
  const userInput = await promptUser();
  generateHTML(userInput);
})();
