
const prompt = require("prompt-sync")({ sigint: true });
let area;
const shape = prompt('Enter which area to calculate ( either Square, Rectangle, Triangle or Circle ): ');
switch (shape) {
    case 'Square':
        const side = parseFloat(prompt('Enter Side: '));
        area = side * side;
        console.log(area);
        break;
    case 'Rectangle':
        const length = parseFloat(prompt('Enter Length: '));
        const width = parseFloat(prompt('Enter Width: '));
        area = length * width;
        console.log(area);
        break;
    case 'Triangle':
        const base = parseFloat(prompt('Enter Base: '));
        const height = parseFloat(prompt('Enter Height: '));
        area = base * height / 2;
        console.log(area);
        break;
    case 'Circle':
        const radius = parseFloat(prompt('Enter Radius: '));

        area = Math.PI * radius * radius;
        console.log(area);
        break;

    default:
        console.log('Invalid shape');
        break;
}