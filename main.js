// Import the necessary modules 
const { promptUser } = require('./lib/userInput');
const { generateHTML } = require('./lib/svgGenerator');

// Main execution block
(async () => {
  // Prompt the user for input and store the responses in 'userInput'
  const userInput = await promptUser();

  // Generate the HTML file with the embedded SVG using the user's input
  generateHTML(userInput);
})();
