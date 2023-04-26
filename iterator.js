let numbers = [11, 22, 33, 44, 55]
let items = numbers[Symbol.iterator]()
for (const i of items) {
    console.log(i)

}
