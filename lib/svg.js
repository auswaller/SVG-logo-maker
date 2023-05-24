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
            console.log(this);
            return input;
        }).then((data) => {
            let builtShape;
            let builtText;

            switch(data.shape){
                case "circle":
                    builtShape = new Circle();
                    builtShape.setColor(data.shapeColor);
                    builtShape.render();
                    break;
                case "triangle":
                    builtShape = new Triangle();
                    builtShape.setColor(data.shapeColor);
                    builtShape.render();
                    break;
                case "square":
                    builtShape = new Square();
                    builtShape.setColor(data.shapeColor);
                    builtShape.render();
                    break;
            }

            builtText = this.renderText(data.text, data.textColor);

            fs.writeFile(`./examples/${data.text}.svg`, this.buildSVG(builtShape.render(),builtText), (err) =>
            err ? console.error(err) : console.log('Success!'));
        });
    }
}

module.exports = SVG;