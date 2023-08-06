// With array
//? push and shift || unshift and pop
let queue = [];
queue.push(1);
queue.push(2);
queue.push(3);

console.log(queue.shift());

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // Add to the end
  enqueue(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = this.first;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.size++;
    return this;
  }

  //   remove from beginning
  dequeue() {
    if (!this.first) return null;

    let currentHead = this.first;
    this.first = currentHead.next;
    this.size--;

    if (this.size === 0) {
      this.last = null;
    }
    return currentHead;
  }
}

const list = new Queue();

list.enqueue(1);
list.enqueue(2);
list.enqueue(3);

console.log(list.dequeue());

console.log(list);
