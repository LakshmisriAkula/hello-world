class Queue{
    constructor(){
        this.item = [];
    }

    enqueue(ele){
        return this.item.push(ele)
    }

    dequeue(){
        return this.item.shift()
    }

    peek(){
        if(this.item.length===0){
            return "should have atleadt one ele";
        }

        return this.item[0];
    }

    getSize() {
        return this.item.length;
      }

      isEmpty() {
        return this.getSize() == 0;
      }
    
    
}

let q = new Queue();
console.log("\nENQUEUE PROCESS\n");
q.enqueue("ravi");

q.enqueue(2);

q.enqueue(3);
console.log(q);

console.log("\nDEQUEUE PROCESS\n");
q.dequeue()
console.log(q);

console.log(q.peek())

console.log(q.getSize())

console.log(q.isEmpty())




