class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let newNode = new Node(val);

    if (this.root === null) {
      this.root = newNode;
    } else {
      let current = this.root;
      if (val === current.value) return undefined;

      while (true) {
        if (val < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (val > current?.value) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  find(val) {
    let current = this.root;
    let found = false;
    if (this.root === null) return false;

    while (current && !found) {
      if (val < current.value) {
        current = current.left;
      } else if (val > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }

  BFS() {
    let data = [];
    let queue = [];
    let node = this.root;

    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      data.push(node.value);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return data;
  }

  DFSPreOrder() {
    let data = [];
    let current = this.root;

    function transverse(node) {
      data.push(node.value);
      if (node.left) transverse(node.left);
      if (node.right) transverse(node.right);
    }

    transverse(current);

    return data;
  }
  DFSPostOrder() {
    let data = [];
    let current = this.root;
    function transverse(node) {
      if (node.left) transverse(node.left);
      if (node.right) transverse(node.right);
      data.push(node.value);
    }
    transverse(current);
    return data;
  }
  DFSInOrder() {
    let data = [];
    let current = this.root;
    function transverse(node) {
      if (node.left) transverse(node.left);
      data.push(node.value);
      if (node.right) transverse(node.right);
    }
    transverse(current);
    return data;
  }
}

let tree = new BST();

tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
console.log(tree);

console.log(tree.find(3));

console.log(tree.BFS());
console.log(tree.DFSPreOrder());
console.log(tree.DFSPostOrder());
console.log(tree.DFSInOrder());
