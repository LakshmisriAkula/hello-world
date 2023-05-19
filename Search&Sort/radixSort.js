function getDigit(num, place) {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10
}


function digitCount(num) {
    if (num === 0) {
        return 1
    }
    var count = Math.floor(Math.log10(Math.abs(num))) + 1;
    return count;
}


function maxDigitNumbersCount(arr) {
    let maxNumCount = digitCount(Math.max(...arr))
    return maxNumCount;
}


function radixSort(arr) {
    let maxDigitCount = maxDigitNumbersCount(arr)


    for (let k = 0; k < maxDigitCount; k++) {
        let digitBuckets = Array.from({ length: 10 }, () => [])


        for (let i = 0; i < arr.length; i++) {
            let digit = getDigit(arr[i], k)


            digitBuckets[digit].push(arr[i])
        }
        arr = [].concat(...digitBuckets)
    }


    /*
      Sample code to understand
  
  
      let arr2 = [234]
      let arr1 = [111]
      let main_arr = [arr1, arr2]
  
  
      let arr = [].concat(...main_arr)
      console.log(arr)
  
  
     */


    return arr;
}


var arr = [1, 33, 444, 0, 3, 2];
console.log(radixSort(arr));