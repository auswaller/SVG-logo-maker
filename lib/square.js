const Shape = require("./shape.js");

class Square extends Shape{
    render(){
        return `<rect x="70" y="20" width="160" height="160" fill="${this.color}" />`;
    }
}

module.exports = Square;