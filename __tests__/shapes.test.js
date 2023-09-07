const { Circle, Triangle, Square } = require('../lib/shapes');

describe('Circle Class', () => {
it('should instantiate a Circle', () => {
    const circle = new Circle();
    expect(circle).toBeInstanceOf(Circle);
});
});

describe('Triangle Class', () => {
it('should instantiate a Triangle', () => {
    const triangle = new Triangle();
    expect(triangle).toBeInstanceOf(Triangle);
});
});

describe('Square Class', () => {
it('should instantiate a Square', () => {
    const square = new Square();
    expect(square).toBeInstanceOf(Square);
});
});
