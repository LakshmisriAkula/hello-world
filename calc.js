// program for a simple calculator
const prompt=require("prompt-sync")({sigint:true});

// multiple case switch program
let fruit = 'apple';
switch(fruit) {
    case 'apple':
    case 'mango':
    case 'pineapple':
        console.log(`${fruit} is a fruit.`);
        
    default:
        console.log(`${fruit} is not a fruit.`);
        break;
}