class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class binarySearchTree {
  constructor() {
    this.root = null;
  }

  // insertNode
  insert(data) {
    let newNode = new Node(data);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(root, node) {
    if (node.data < root.data) {
      if (root.left === null) {
        root.left = node;
      } else {
        this.insertNode(root.left, node);
      }
    } else if (node.data > root.data) {
      if (root.right === null) {
        root.right = node;
      } else {
        this.insertNode(root.right, node);
      }
    }
  }
  // traversing

  // DFS
  preOrder(root) {
    if (root) {
      console.log(root.data);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }

  inOrder(root) {
    if (root) {
      this.inOrder(root.left);
      console.log(root.data);
      this.inOrder(root.right);
    }
  }

  postOrder(root) {
    if (root) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.data);
    }
  }

// BFS
levelOrder(root){
  if(root === null){
    return null
  }
  let queue = []
  if(root){
    queue.push(root)
    while(queue.length){
      let curr = queue.shift()
      console.log(curr.data);
      if(curr.left){
        queue.push(curr.left)
      }
      if(curr.right){
        queue.push(curr.right)
      }
    }
  }
}

  min(root) {
    if (root === null) {
      return null;
    }
    let node = root;
    while (node.left != null) {
      node = node.left;
    }
    return node.data;
  }

  max(root) {
    if (root === null) {
      return null;
    }
    let node = root;
    while (node.right != null) {
      node = node.right;
    }
    return node.data;
  }

  // deleting node
  delete(data){
    this.root = this.deleteNode(this.root,data)
  }

  deleteNode(root,data){
    if(root === null){
      return null
    }
    if(data < root.data){
      root.left = this.deleteNode(root.left,data)
    }else if(data > root.data){
      root.right = this.deleteNode(root.right,data)
    }else{
      if(!root.left && !root.right){
        return null
      }else if(!root.left){
        return root.right
      }else if(!root.right){
        return root.left
      }
      root.data = this.min(root.right)
      root.right = this.deleteNode(root.right,root.data)
      
    }
    return root
  }

  findClosestValue(root,target){
    if(root === null){
      return null
    }
    let closest = root.data
    while(root != null){
      if(Math.abs(root.data - target) < Math.abs(closest - target)){
        closest = root.data
      }
      if(target < root.data){
        root = root.left
      }else if(target > root.data){
        root = root.right
      }else {
        return closest
      }
    }
    return closest
  }

  contains(root,target){
    if(root === null){
      return false
    }
    while(root != null){
      if(target == root.data){
        return true
      }else if(target < root.data){
        root = root.left
      }else if(target > root.data){
        root = root.right
      }
    }

    return false

  }


  search(data) {
    return this.searchNode(this.root, data);
  }
  searchNode(node, data) {
    if (node === null) {
      return null;
    } else if (data < node.data) {
      return this.searchNode(node.left, data);
    } else if (data > node.data) {
      return this.searchNode(node.right, data);
    } else {
      console.log("your search data :", node.data);
    }
  }
}

let BST = new binarySearchTree();
BST.insert(10);
BST.insert(8);
BST.insert(11);
BST.insert(5);
BST.insert(3);
// BST.search(11);
// console.log(BST.max(BST.root));
// BST.delete()
BST.levelOrder(BST.root);
console.log("closest value :",BST.findClosestValue(BST.root,4))
console.log(BST.contains(BST.root,10)); 
