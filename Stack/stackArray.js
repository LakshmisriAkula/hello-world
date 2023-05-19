import stackArray from "./stack.js";

let stk = new stackArray();

stk.add("john")
stk.add("Ram")
stk.add("Ravi")
console.log(stk)

stk.remove()
console.log(stk)

console.log(stk.getSize())


console.log(stk.isEmpty())


console.log(stk.peek())

 
console.log(stk.clear())


