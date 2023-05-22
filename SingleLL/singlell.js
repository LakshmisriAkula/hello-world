class Node {
    constructor(val) {
        this.value = val;
        this.tail = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }


    push(val) {
        let newNode = new Node(val)
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.head) {
            return;
        }
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
            this.length = 0;
            return;
        }

        let current = this.head;
        let newTail = null;

        while (current) {
            if (current.next) {
                newTail = current;
            }
            current = current.next;
        }

        const deletedNode = this.tail;
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        return deletedNode;
    }

    shift() {
        if (!this.head) {
            return;
        }

        if (this.length == 1) {
            this.head = null;
            this.tail = null;
            this.length = 0;
            return;
        }

        let current = this.head;
        let newHead = current.next;
        this.head = newHead;
        this.length--;
        return current;

    }

    unshift(val) {
        let newNode = new Node(val)
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
            this.length = 1;
            return;
        }

        let current = this.head;
        let newHead = newNode;
        this.head = newNode;
        newNode.next = current;
        this.length++;
        return newHead;
    }

    get(index) {
        if (index < 0 || index >= index.length) {
            return null;
        }
        let target = this.head;
        for (let i = 1; i <= index; i++) {
            target = target.next;
        }
        return target;
    }

    set(index, val) {
        let target = this.get(index)
        if (target) {
            this.value = val;
            return true;
        }
        return false;
    }

    printListData() {
        var n = this.head;
        while (n != null) {
            console.log(n.value + " ");
            n = n.next;
        }
    }

    reverse() {
        let movingNode = this.head;
        this.head = this.tail;
        this.tail = movingNode;

        let nextNode;
        let previousNode = null;
        for (let i = 0; i < this.length; i++) {
            nextNode = movingNode.next;
            movingNode.next = previousNode;
            previousNode = movingNode;
            movingNode = nextNode;
        }
    }

    insert(index, val){
        if(index < 0 || index >= this.length){
          return false;
        }
  
  
        // Inserting at the end
        if( index == this.length){
          this.push(val)
          return true
        }
  
  
        // inserting at beginning
        if( index == 0){
          this.unshift(val)
          return true
        }
  
  
        const newNode = new Node(val);
        const previous = this.get(index -1);
        const current = previous.next;
        previous.next = newNode;
        newNode.next = current;
        this.length++;
  
  
        return true
    }

    remove(index){


        if (index < 0 || index >= this.length) {
          return false;
        }
    
    
        // remove first node
        if (index === 0) {
          this.Shift();
          return true;
        }
    
    
        // remove last node
        if (index === this.length - 1) {
          this.pop();
          return true;
        }
    
    
        //remove in the middle
        const previous = this.get(index - 1);
        const after = previous.next.next;
        previous.next = after;
        this.length--;
        return true;
      }
    
    
    }
    
    let s1 = new SinglyLinkedList();


    s1.push(1);
    s1.push(2);
    s1.push(3);
    s1.push(5);
    console.log(s1)
    
    
    s1.pop() // 5 is removed
    console.log(s1)
    
    
    s1.shift() // 1 is removed
    console.log(s1)
    
    
    s1.unshift(8)
    console.log(s1)
    
    
    console.log("Node: ", s1.get(0))
    s1.set(1, 5);
    s1.printListData()
    
    
    s1.reverse()
    console.log(s1)
    s1.printListData()
    
    
    
    
    s1.insert(2, 11)
    console.log("Inserting")
    s1.printListData()
    console.log("After Inserting");
    
    
    s1.remove(2)
    console.log("Before Removing")
    s1.printListData()
    console.log("After Removing")


