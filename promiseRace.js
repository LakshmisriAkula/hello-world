let num1 = parseInt(500);
let num2 = parseInt(100);

const promise1 = new Promise(function (resolve, reject) {
  setTimeout(resolve, num1, "one")
})

const promise2 = new Promise(function (resolve, reject) {
  setTimeout(resolve, num2, "Two")
})

Promise.race([promise1, promise2]).then(function (value) {
  console.log(value)
})