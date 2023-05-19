function CountingSort(arr, min, max) {
    let j = 0;
    let supplementary = [];


    // Making all the elements 0
    for (let i = min; i <= max; i++) {
        supplementary[i] = 0
    }


    for (let i = 0; i < arr.length; i++) {
        supplementary[arr[i]] = supplementary[arr[i]] + 1; // this will generate how many times a number is repeated and will be pushed into that elements room in supplementary array
    }


    for (let i = min; i <= max; i++) {
        while (supplementary[i] > 0) {
            arr[j++] = i // This will generate n times the same value inside arr
            supplementary[i] -= 1
        }
    }
    return arr;
}
var arr = [4, 4, 5, 1, 1, 7, 9, 9, 10, 3];
console.log(CountingSort(arr, 1, 10))

