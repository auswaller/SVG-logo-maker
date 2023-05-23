const inquirer = require("inquirer");
const fs = require("fs");

class SVG {
    constructor(){
        this.shape = "";
        this.shapeColor = "";
        this.text = "";
        this.textColor = "";
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
        })
    }
}

module.exports = SVG;