// Array implementation of stack

//? It uses push and pop method or shift and unshift

const stackArr = [];

stackArr.push("google");
stackArr.push("youtube");
stackArr.push("instagram");

stackArr.pop();

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // This method adds to the beginning of the list
  push(val) {
    let newNode = new Node(val);
    let currentHead = this.first;

    if (!this.first) {
      this.first = newNode;
      this.last = this.first;
    } else {
      //   this.first = newNode;
      //   this.first.next = currentHead;

      newNode.next = this.first;
      this.first = newNode;
    }

    this.size++;
    return this;
  }

  // This method removes fromthe beginning of the list
  pop() {
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

const list = new Stack();
list.push(1);
list.push(2);
list.push(3);

console.log(list.pop());
console.log(list.pop());
console.log(list.pop());
console.log(list.pop());
console.log(list.pop());
console.log(list.push(1));
console.log(list.push(2));

console.log(list);
