const { promptUser } = require('./lib/userInput');
const { generateHTML } = require('./lib/svgGenerator');


describe('Main Functionality', () => {

  test('promptUser function should be defined', () => {
    expect(promptUser).toBeDefined();
  });


  test('generateHTML function should be defined', () => {
    expect(generateHTML).toBeDefined();
  });
  
});