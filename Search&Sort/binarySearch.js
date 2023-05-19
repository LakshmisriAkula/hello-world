let prompt = require("prompt-sync")();


let target = +prompt("Enter number to search : ");


function RecursiveBinarySearch(arr, target, start, end) {


    if (start > end) {
        return;
    }


    let mid = Math.floor((start + end) / 2);


    if (arr[mid] == target) {
        return mid
    }


    if (arr[mid] > target) {
        return RecursiveBinarySearch(arr, target, start, mid - 1)
    }


    else {
        return RecursiveBinarySearch(arr, target, mid + 1, end)
    }


}


var arr = [12, 65, 37, 43, 11];
arr = arr.sort();


var isPresent = RecursiveBinarySearch(arr, target, 0, arr.length - 1)


if (isPresent < 0) {
    console.log("Element Not Found")
}
else {
    console.log("Element found at Index : ", isPresent)
}
