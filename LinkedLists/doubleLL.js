//DOUBLY LINKED
class Node {
    constructor(value) {
      this.value = value;
      this.prev = null;
      this.next = null;
    }
  }
  class DoublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
  
  
    push(val) {
      const newNode = new Node(val);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
      }
      this.length++;
      return this;
    }
  
  
    printList() {
      // console.log(list)
      if (this.head) {
        let current = this.head;
        while (current.next) {
          console.log(current.value);
          current = current.next;
        }
        console.log(current.value);
      } else {
        console.log("empty list")
      }
    }
  
  
    pop() {
      //in case of empty list
      if (this.length === 0) {
        return false;
      }
      //get popped node
      const popped = this.tail;
      //save newTail to a variable (could be null)
      const newTail = this.tail.prev;
      //if newTail is not null
      if (newTail) {
        //sever connection to popped node
        newTail.next = null;
        //sever connection from popped node
        this.tail.prev = null;
        //in case of 1 length list
      } else {
        //make sure to edit head in case newTail is null
        this.head = null;
      }
      //assign new tail (could be null)
      this.tail = newTail;
      // subtract length
      this.length--;
  
  
      return popped;
    }
  
  
    shift() {
      //in case list is empty
      if (!this.head) {
        return false;
      }
      //save shifted node to variable
      const shiftedNode = this.head;
      //make the new head the next (might be null)
      const newHead = this.head.next; //might be null
      //if list is more than 1
      if (this.head !== this.tail) {
        newHead.prev = null;
        shiftedNode.next = null;
      } else {
        this.tail = null;
      }
      this.head = newHead;
      this.length--;
      return shiftedNode;
    }
  
  
    unshift(val) {
      const newNode = new Node(val);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
      }
      this.length++;
      return this;
    }
  
  
    insertAtIndex(index, val) {
      //if index doesn't exist
      if (index > this.length) {
        return false;
      }
      if (index === 0) {
        this.unshift(val);
      } else if (index === this.length) {
        this.push(val);
      } else {
        const newNode = new Node(val);
        const after = this.getNodeAtIndex(index);
        const before = after.prev;
        after.prev = newNode;
        before.next = newNode;
        newNode.next = after;
        newNode.prev = before;
        this.length++;
      }
      return this;
    }
  
  
    removeAtIndex(index) {
      let removedNode;
      if (index >= this.length) {
        return false;
      }
      if (index == 0) {
        removedNode = this.shift();
      } else if (index == this.length - 1) {
        removedNode = this.pop();
      } else {
        removedNode = this.getNodeAtIndex(index);
        const after = removedNode.next;
        const before = removedNode.prev;
        removedNode.next = null;
        removedNode.prev = null;
        before.next = after;
        after.prev = before;
        this.length--;
      }
      return removedNode;
    }
  
  
    getNodeAtIndex(index) {
      if (index >= this.length || index < 0) {
        return false;
      }
      let currentIndex = 0;
      let currentNode = this.head;
      while (currentIndex !== index) {
        currentNode = currentNode.next;
        currentIndex++;
      }
      return currentNode;
    }
  
  
    setNodeAtIndex(index, val) {
      const foundNode = this.getNodeAtIndex(index)
      if (foundNode) {
        foundNode.value = val
        return foundNode;
      }
      return null;
    }
  
  
  
  
  }
  
  
  let s1 = new DoublyLinkedList();
  s1.push(11)
  s1.push(12)
  s1.push(13)
  s1.push(14)
  
  
  s1.printList()
  
  
  s1.insertAtIndex(2,55)
  console.log("after insertion")
  s1.printList()
  
  