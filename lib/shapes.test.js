const Circle = require("./circle.js");
const Square = require("./square.js");
const Triangle = require("./triangle.js");

describe("Circle", ()=> {
    it("should be true when passed the color blue", ()=> {
        const circle = new Circle();
        circle.setColor("blue");
        expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
    });
});

describe("Square", ()=> {
    it("should be true when passed the color blue", ()=> {
        const square = new Square();
        square.setColor("blue");
        expect(square.render()).toEqual('<rect x="70" y="20" width="160" height="160" fill="blue" />');
    });
});

describe("Triangle", ()=> {
    it("should be true when passed the color blue", ()=> {
        const triangle = new Triangle();
        triangle.setColor("blue");
        expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });
});