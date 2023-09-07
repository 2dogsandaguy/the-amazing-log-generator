/* const fs = require('fs'); // Import the 'fs' module
// Define shape data
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
};

// Function to generate the HTML file with the embedded SVG
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
    console.log('Generated logo.svg'); 
};

module.exports = { generateSVG, generateHTML, shapes }; */