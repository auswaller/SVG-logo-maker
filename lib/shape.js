class Shape {
    constructor(){
        this.color = "";
    }

    setColor(color){
        this.color = color;
    }

    render(){
        console.log("The render function was not overwritten in the child class!");
        return;
    }
}

module.exports = Shape;