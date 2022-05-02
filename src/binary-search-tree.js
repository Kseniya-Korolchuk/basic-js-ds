const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {

  constructor() {
    this._root = null;
  }

  root() {
    //throw new NotImplementedError('Not implemented');
    return this._root;
  }

  add(data) {
    //throw new NotImplementedError('Not implemented');

    let newNode = new Node(data);
    if (this._root === null) {
      this._root = newNode;
    }
    else {
      this.insertNode(this._root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      }
      else {
        this.insertNode(node.left, newNode);
      }
    }
    else {
      if (node.right === null) {
        node.right = newNode;
      }
      else {
        this.insertNode(node.right, newNode);
      }
    }
  }



  has(data) {
    //throw new NotImplementedError('Not implemented');
    return this.search(this._root, data) === null ? false : true;
  }

  search(node, data) {
    if (node === null) return null;
    if (data < node.data) return this.search(node.left, data);
    else if (data > node.data) return this.search(node.right, data);
    else return node;
  }

  find(data) {
    //throw new NotImplementedError('Not implemented');
    return this.search(this._root, data);
  }

  remove(data) {
    //throw new NotImplementedError('Not implemented');
    return this.removeNode(this._root, data);
  }

  removeNode(node, data) {
    if (node === null) return null;

    if (data === node.data) {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }

      if (node.left === null) {
        node = node.right;
        return node;
      }
      if (node.right === null) {
        node = node.left;
        return node;
      }

      let newNode = this.getMin(node.right);
      node.data = newNode.data;
      node.right = this.removeNode(node.right, newNode.data);
      return node;
    }

    if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    }
    if (data > node.data) {
      node.right = this.removeNode(node.right, data);
      return node;
    }
  }

  min() {
    //throw new NotImplementedError('Not implemented');
    return this.getMin(this._root).data;
  }

  getMin(node) {
    if (node.left === null) return node;
    return this.getMin(node.left);
  }

  max() {
    //throw new NotImplementedError('Not implemented');
    return this.getMax(this._root).data;
  }

  getMax(node) {
    if (node.right === null) return node;
    return this.getMax(node.right);
  }
}

module.exports = {
  BinarySearchTree
};