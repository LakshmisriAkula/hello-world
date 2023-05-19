let prompt = require("prompt-sync")();


let num = +prompt("Enter number to search : ");


function LinearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == target) {
            return i;
        }
    }
    return -1
}


var arr = [12, 65, 37, 43, 11]


var isPresent = LinearSearch(arr, num);


if (isPresent !== -1) {
    console.log("Element Found at Index Position: ", isPresent)
}
else {
    console.log("element not present in the list")
}


