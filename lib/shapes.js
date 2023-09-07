const fs = require('fs');

class Shape {
  constructor(type, points, dimensions) {
    this.type = type;
    this.points = points;
    this.dimensions = dimensions;
  }

  generateSVG(userInput) {
    return `
      <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
          <${this.type} fill="${userInput.shapeColor}" ${this.dimensions} ${this.points} />
          <text x="150" y="125" font-size="60" text-anchor="middle" fill="${userInput.textColor}">${userInput.text}</text>
      </svg>
    `;
  }
}

class Circle extends Shape {
constructor() {
    super('circle', '', 'cx="150" cy="100" r="80"');
}
}

class Triangle extends Shape {
constructor() {
    super('polygon', 'points="150,20 220,180 80,180"', '');
}
}

class Square extends Shape {
constructor() {
    super('rect', '', 'x="70" y="20" width="160" height="160"');
}
}

// Function to generate the SVG file with the embedded SVG
const generateSVGFile = (userInput) => {
  // Create an instance of the selected shape
const selectedShape = new shapes[userInput.shape]();

  // Generate the SVG content using the shape's 'generateSVG' method
const shapeSVG = selectedShape.generateSVG(userInput);

  // Write the SVG content to a file named 'logo.svg'
fs.writeFileSync('logo.svg', shapeSVG);
  console.log('Generated logo.svg'); // Display a message indicating that the SVG file has been generated
};

const shapes = {
circle: Circle,
triangle: Triangle,
square: Square,
};

module.exports = { generateSVGFile, shapes };
