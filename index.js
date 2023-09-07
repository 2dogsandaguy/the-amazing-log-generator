const { promptUser } = require('./lib/userInput');
const { generateSVGFile } = require('./lib/shapes'); // Update the import statement

// Main execution block
(async () => {
  // Prompt the user for input and store the responses in 'userInput'
const userInput = await promptUser();

  // Generate the SVG file with the embedded SVG using the user's input
  generateSVGFile(userInput); // Update this line
})();
