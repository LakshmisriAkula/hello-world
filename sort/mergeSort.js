function divide(arr) {
    const half = Math.floor(arr.length / 2);


    if (arr.length <= 1) {
        return arr;
    }


    const left = arr.splice(0, half);
    const right = arr;

    return merge(divide(left), divide(right))

}


function merge(left, right) {
    let sortedArr = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            sortedArr.push(left.shift())
        }
        else {
            sortedArr.push(right.shift())

        }


    }
    return [...sortedArr, ...left, ...right]
}

var data = [31, 21, 1, 67, 20]
console.log(divide(data))