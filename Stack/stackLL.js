class Node {
    constructor(ele) {
        this.element = ele;
        this.next = null;
    }
}

class stackLL {
    constructor() {
        this.head = null;
        this.lenght = 0;
    }


push = (ele) => {
    let node = new Node(ele)
    let current;
    current = this.head;
    node.next = current;
    this.head = node
    this.length++

}

pop = () => {

    let current = this.head;

    if (current) {
        let ele = current.element;
        current = current.next;
        this.head = current;
        this.length--;
        return ele
    }

    return null;

}

size = () => {
    return this.lenght;
}

peek = () => {
    if (this.head) {
        return this.head.element;
    }

    return null
}

toArray = () => {
    let arr = []
    let current = this.head
    while (current) {
        arr.push(current.element);
        current = current.next;
    }
    return arr;
}

isEmpty = () => {
    return this.length === 0;
}

clear = () => {
    this.head = null;
    this.lenght = 0;
}
}
let stkll = new stackLL();

stkll.push("john")
stkll.push("Ram")
stkll.push("Ravi")
console.log(stkll.head)

stkll.pop()
console.log(stkll.head)

stkll.push("Jai")
console.log(stkll.head)

console.log(stkll.size())
console.log(stkll.peek())
console.log(stkll.toArray())



// console.log(stkll.isEmpty())




console.log(stkll.clear())

