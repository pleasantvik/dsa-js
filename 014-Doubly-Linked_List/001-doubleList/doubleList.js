//Node

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;

      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    let currentTail = this.tail;
    if (!this.tail) {
      return `No item on the list`;
    }
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = currentTail.prev;
      this.tail.next = null;
      currentTail.prev = null;
    }
    this.length--;
    return currentTail.val;
  }

  shift() {
    if (!this.head) {
      return `No item on the list`;
    }
    let currentHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = currentHead.next;
      this.head.prev = null;
      currentHead.next = null;
    }

    this.length--;
    return currentHead.val;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    let current;
    let count;
    if (index < 0 || index >= this.length) {
      return null;
    }

    if (index <= this.length / 2) {
      count = 0;
      current = this.head;

      while (count !== index) {
        console.log("Second");
        current = current.next;
        count++;
      }
    } else {
      count = this.length - 1;
      current = this.tail;
      while (current) {
        console.log("Second");
        if (count === index) {
          return current.val;
        } else {
          current = current.prev;
          count--;
        }
      }
    }
    return current;
  }

  set(index, val) {
    let foundNode = this.get(index);

    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    let newNode = new Node(val);

    if (index < 0 || index > this.length) return false;

    if (index === 0) {
      return this.unshift(val);
    }

    if (index === this.length) {
      return this.push(val);
    }

    // REFERENCE POINT
    let beforeNode = this.get(index - 1);
    let afterNode = beforeNode.next;
    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    newNode.next = afterNode;
    afterNode.prev = newNode;

    this.length++;

    return this;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return null;

    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let foundNode = this.get(index);
    let beforeNode = foundNode.prev;
    let afterNode = foundNode.next;
    // beforeNode.next = foundNode.next;
    // afterNode.prev = foundNode.prev;
    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;
    foundNode.next = null;
    foundNode.prev = null;

    this.length--;

    return foundNode;
  }
}

const first = new DoublyLinkedList();
first.push(12);
first.push(13);
first.push(14);

first.remove(1);

// console.log(first.set(1, "ade"));
console.log(first);

// console.log(first.unshift());

/**
 * console.log(first.pop());
console.log(first);
console.log(first.pop());
console.log(first);
console.log(first.pop());
console.log(first);
console.log(first.pop());
 */
/////////////////////////////////
///////////////******SHIFT */
/**
 * console.log(first.shift());
console.log(first);
console.log(first.shift());
console.log(first);
console.log(first.shift());
console.log(first);
console.log(first.shift());
console.log(first);
console.log(first.shift());
console.log(first);
 */

/**
 * // first.insert(0, "Adedayo");
first.insert(3, "Adedayo");
first.insert(2, "Inserted after 13 before 14");
 */
