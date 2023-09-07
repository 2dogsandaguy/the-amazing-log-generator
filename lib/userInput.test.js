const { promptUser } = require('./userInput');
const inquirer = require('inquirer');
const { generateSVGFile } = require('./shapes');
jest.mock('inquirer');

test('promptUser handles valid shape color input', async () => {
    
    inquirer.prompt.mockResolvedValueOnce({
    text: 'Text',
    textColor: 'blue',
    shape: 'square',
    shapeColor: '#FF00FF', 
    });

    const userInput = await promptUser();
    expect(userInput).toEqual({
    text: 'Text',
    textColor: 'blue',
    shape: 'square',
    shapeColor: '#FF00FF', 
    });
});

test('promptUser handles invalid shape color input', async () => {
    inquirer.prompt.mockResolvedValueOnce({
    text: 'Text',
    textColor: 'green',
    shape: 'circle',
    shapeColor: 'invalid-color', 
    });
});