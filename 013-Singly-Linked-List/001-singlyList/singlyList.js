// Node store piece of data
// Reference to next node

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// let first = new Node("Hi");
// first.next = new Node("There");
// first.next.next = new Node("how");
// first.next.next.next = new Node("are");
// first.next.next.next.next = new Node("you");

// console.log(first);

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    // Create a new node
    let newNode = new Node(val);

    // If there is no head//
    /**
     * Set head to newNode and tail to newNode, then increment the length
     */
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  transvers() {
    let current = this.head;

    // while (current) {
    //   console.log(current.val);
    //   if (current.val === "hi") {
    //     console.log("Found the ite");
    //     return 1;
    //   }
    //   current = current.next;
    // }

    let count = 0;

    for (let i = 0; i < this.length; i++) {
      count++;
      current = current.next;
    }

    return count;
  }

  pop() {
    if (!this.head) return undefined;

    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
    // console.log(current.val);
    // console.log(newTail.val);
  }

  // Remove sth from the beginning
  shift() {
    if (!this.head) return undefined;
    let current = this.head;

    this.head = current.next;

    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return current;
  }

  // Add to the beginning
  unshift(val) {
    let newnode = new Node(val);
    if (!this.head) {
      this.head = newnode;
      this.tail = this.head;
    } else {
      newnode.next = this.head;
      this.head = newnode;
    }

    this.length++;
    return this;
  }

  //Retrieve item base on an index
  get(index) {
    if (index < 0 || index > this.length) return null;
    let current = this.head;
    let counter = 0;

    while (counter !== index) {
      current = current.next;
      counter++;
    }

    // while()
    return current;
  }

  set(index, val) {
    let foundNode = this.get(index);

    if (foundNode) {
      foundNode.val = val;

      return true;
    }

    return false;

    /**
   *   if (index < 0 || index > this.length) return null;
    let current = this.head;
    let counter = 0;

    while (counter !== index) {
      current = current.next;
      counter++;
    }

    let foundNode = current;

    if (foundNode) {
      foundNode.val = val;

      return true;
    }
    return false;
   */
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;

    if (index === this.length) return !!this.push(val);

    if (index === 0) {
      this.unshift(val);

      return true;
    }

    let newNode = new Node(val);
    let prev = this.get(index - 1);
    let temp = prev.next;

    newNode.next = temp;

    this.length++;

    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;

    if (index === this.length - 1) return this.pop();

    if (index === 0) return this.shift();

    //This retriev the value of the node beforre the one we want to remove
    let prevNode = this.get(index - 1);
    let removed = prevNode.next;
    prevNode.next = removed.next;

    this.length--;

    return removed;
  }

  reverse() {
    //Swap head and tail
    let currentNode = this.head;
    this.head = this.tail;
    this.tail = currentNode;
    let prevNode = null;
    let nextNode;

    for (let i = 0; i < this.length; i++) {
      nextNode = currentNode.next;
      currentNode.next = prevNode;
      prevNode = currentNode;
      currentNode = nextNode;
    }
    return this;
  }

  add() {
    let sum = 0;
    if (this.length === 0) return 0;

    let current = this.head;

    while (current && current !== null) {
      sum += current.val;
      current = current.next;
    }

    return sum;
  }
}

const list = new SinglyLinkedList();
console.log(list);
list.push(-1);
console.log(list);
list.push(4);
console.log(list);
list.push(6);
console.log(list.add());

// console.log(list.shift());

// console.log(list.reverse());
// list.unshift("*");

// console.log(list);
// console.log(list.get(3));
// console.log(list.set(0, "Ade"));
// console.log(list);

// list.insert(0, "First");
// console.log(list);
// console.log(list.remove(1));
// console.log(list);

// // list.push("how are you");
// console.log(list);
// console.log(list.pop());
// console.log(list);
// console.log(list.pop());
// console.log(list);

// console.log(list.pop());
// console.log(list);

console.log(list.transvers());
