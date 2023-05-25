const inquirer = require("inquirer");
const fs = require("fs");
const Circle = require("./circle.js");
const Square = require("./square.js");
const Triangle = require("./triangle.js");

class SVG {
    constructor(){
        this.shape = "";
        this.shapeColor = "";
        this.text = "";
        this.textColor = "";
    }

    buildSVG(shape, text){
        return `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
   
            ${shape}
   
            ${text}
   
        </svg>`
    }

    renderText(text, color){
        return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
    }

    run(){
        return inquirer.prompt([
            {
                type: "input",
                name: "text",
                message: "Please enter up to three characters to display: ",
            },
            {
                type: "input",
                name: "textColor",
                message: "Please enter the color keyword or hexadecimal number for the text color: ",
            },
            {
                type: "list",
                name: "shape",
                choices: ["circle", "triangle", "square"],
                message: "Please choose the shape: ",
            },
            {
                type: "input",
                name: "shapeColor",
                message: "Please enter the color keyword or hexadecimal number for the shape color: ",
            }
        ]).then((input) => {
            this.shape = input.shape;
            this.shapeColor = input.shapeColor;
            this.text = input.text;
            this.textColor = input.textColor;
            let builtShape;
            let builtText;

            switch(this.shape){
                case "circle":
                    builtShape = new Circle();
                    builtShape.setColor(this.shapeColor);
                    builtShape.render();
                    break;
                case "triangle":
                    builtShape = new Triangle();
                    builtShape.setColor(this.shapeColor);
                    builtShape.render();
                    break;
                case "square":
                    builtShape = new Square();
                    builtShape.setColor(this.shapeColor);
                    builtShape.render();
                    break;
            }

            builtText = this.renderText(this.text, this.textColor);

            fs.writeFile(`./examples/${this.text}.svg`, this.buildSVG(builtShape.render(),builtText), (err) =>
            err ? console.error(err) : console.log('Success!'));
        });
    }
}

module.exports = SVG;