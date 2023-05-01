function Rectangle(width, height) {
    this.width = "10";
    this.height = "20";
}

Rectangle.prototype.display = function () {
    return this.width * this.height

}

//child class
Square.prototype = new Rectangle()

function Square() {
    this.length = "30";
}

Square.prototype.displayDetails = function () {
    return (this.length * this.width * this.height) / 2
}


let squararea = new Square()
console.log(squararea.displayDetails())
console.log(squararea.display())