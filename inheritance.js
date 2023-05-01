class Rectangle{
    constructor(width,height){
    this.width = width;
    this.height = height;
    }
    display(){
        return this.width * this.height

    }
}

let area = new Rectangle("10","20")
console.log(area.display())

class Square extends Rectangle{
    constructor(width,height,length){
        super(width,height);
        this.length = length;
    }

    displayDetails(){
        return (this.length * this.width * this.height) / 2
    }
}

let squararea = new Square("20","40","30")
console.log(squararea.displayDetails())
console.log(squararea.display())