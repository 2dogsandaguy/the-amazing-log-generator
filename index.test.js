const { promptUser } = require('./lib/userInput');
const { generateSVGFile } = require('./lib/shapes');


describe('Main Functionality', () => {

  test('promptUser function should be defined', () => {
    expect(promptUser).toBeDefined();
  });


  test('generateSVG function should be defined', () => {
    expect(generateSVGFile).toBeDefined();
  });
});