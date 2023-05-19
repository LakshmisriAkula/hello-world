class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


class queueLL {
    constructor() {
        this.head = null;
        this.tail = null;
        this.lenght = 0;
    }

    enqueue = (ele) => {
        const node = new Node(ele);

        if (this.head) {
            this.tail.next = node;
            this.tail = node;
        }
        else {
            this.head = node;
            this.tail = node;
        }

        this.length++;
    }

    dequeue = () => {

        const current = this.head;
        this.head = this.head.next;
        this.length--;
        return current.value;

    }

    print = () => {

        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }

    isEmpty() {
        return this.length === 0;
    }

    getLength() {
        return this.length;
    }

    getHead() {
        return this.head.value;
    }
}

const queue = new queueLL();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(4);
console.log(queue.head);
console.log(queue.tail);

queue.dequeue();
console.log(queue.head);
console.log(queue.tail);

console.log(queue.isEmpty())
console.log(queue.getHead())
console.log(queue.getLength())


console.log(queue.print());

