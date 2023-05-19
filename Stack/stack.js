class Stack {
    constructor() {
        this.item = []
    }


    add(ele) {
        return this.item.push(ele)

    }
    remove() {
        return this.item.pop()
    }

    getSize() {
        return this.item.length;
    }

    isEmpty(){
        return this.item.length===0
    }
    peek() {
        if (this.item.length === 0) {
            return "stack underflow"
        }
        return this.item[this.item.length - 1]
    }

    clear(){
        return this.item = []
    }

}

export default Stack;