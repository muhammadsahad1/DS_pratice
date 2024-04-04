// class Node {
//   constructor(data) {
//     this.data = data;
//     this.left = null;
//     this.right = null;
//   }
// }

// class binarySearchTree {
//   constructor() {
//     this.root = null;
//   }

//   // insertNode
//   insert(data) {
//     let newNode = new Node(data);
//     if (this.root === null) {
//       this.root = newNode;
//     } else {
//       this.insertNode(this.root, newNode);
//     }
//   }

//   insertNode(root, node) {
//     if (node.data < root.data) {
//       if (root.left === null) {
//         root.left = node;
//       } else {
//         this.insertNode(root.left, node);
//       }
//     } else if (node.data > root.data) {
//       if (root.right === null) {
//         root.right = node;
//       } else {
//         this.insertNode(root.right, node);
//       }
//     }
//   }
//   // traversing

//   // DFS
//   preOrder(root) {
//     if (root) {
//       console.log(root.data);
//       this.preOrder(root.left);
//       this.preOrder(root.right);
//     }
//   }

//   inOrder(root) {
//     if (root) {
//       this.inOrder(root.left);
//       console.log(root.data);
//       this.inOrder(root.right);
//     }
//   }

//   postOrder(root) {
//     if (root) {
//       this.postOrder(root.left);
//       this.postOrder(root.right);
//       console.log(root.data);
//     }
//   }

// // BFS
// levelOrder(root){
//   if(root === null){
//     return null
//   }
//   let queue = []
//   if(root){
//     queue.push(root)
//     while(queue.length){
//       let curr = queue.shift()
//       console.log(curr.data);
//       if(curr.left){
//         queue.push(curr.left)
//       }
//       if(curr.right){
//         queue.push(curr.right)
//       }
//     }
//   }
// }

//   min(root) {
//     if (root === null) {
//       return null;
//     }
//     let node = root;
//     while (node.left != null) {
//       node = node.left;
//     }
//     return node.data;
//   }

//   max(root) {
//     if (root === null) {
//       return null;
//     }
//     let node = root;
//     while (node.right != null) {
//       node = node.right;
//     }
//     return node.data;
//   }

//   // deleting node
//   delete(data){
//     this.root = this.deleteNode(this.root,data)
//   }

//   deleteNode(root,data){
//     if(root === null){
//       return null
//     }
//     if(data < root.data){
//       root.left = this.deleteNode(root.left,data)
//     }else if(data > root.data){
//       root.right = this.deleteNode(root.right,data)
//     }else{
//       if(!root.left && !root.right){
//         return null
//       }else if(!root.left){
//         return root.right
//       }else if(!root.right){
//         return root.left
//       }
//       root.data = this.min(root.right)
//       root.right = this.deleteNode(root.right,root.data)
      
//     }
//     return root
//   }

//   findClosestValue(root,target){
//     if(root === null){
//       return null
//     }
//     let closest = root.data
//     while(root != null){
//       if(Math.abs(root.data - target) < Math.abs(closest - target)){
//         closest = root.data
//       }
//       if(target < root.data){
//         root = root.left
//       }else if(target > root.data){
//         root = root.right
//       }else {
//         return closest
//       }
//     }
//     return closest
//   }

//   contains(root,target){
//     if(root === null){
//       return false
//     }
//     while(root != null){
//       if(target == root.data){
//         return true
//       }else if(target < root.data){
//         root = root.left
//       }else if(target > root.data){
//         root = root.right
//       }
//     }

//     return false

//   }


//   search(data) {
//     return this.searchNode(this.root, data);
//   }
//   searchNode(node, data) {
//     if (node === null) {
//       return null;
//     } else if (data < node.data) {
//       return this.searchNode(node.left, data);
//     } else if (data > node.data) {
//       return this.searchNode(node.right, data);
//     } else {
//       console.log("your search data :", node.data);
//     }
//   }
// }

// let BST = new binarySearchTree();
// BST.insert(10);
// BST.insert(8);
// BST.insert(11);
// BST.insert(5);
// BST.insert(3);
// // BST.search(11);
// // console.log(BST.max(BST.root));
// // BST.delete()
// BST.levelOrder(BST.root);
// console.log("closest value :",BST.findClosestValue(BST.root,4))
// console.log(BST.contains(BST.root,10)); 

class Node {
  constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
  }
}

class BinaryTree {
  constructor() {
      this.root = null;
  }

  insert(data) {
      let newNode = new Node(data);
      if (this.root === null) {
          this.root = newNode;
      } else {
          this.insertNode(this.root, newNode);
      }
  }

  insertNode(root, newNode) {
      if (newNode.data < root.data) {
          if (root.left === null) {
              root.left = newNode;
          } else {
              this.insertNode(root.left, newNode);
          }
      } else {
          if (root.right === null) {
              root.right = newNode;
          } else {
              this.insertNode(root.right, newNode);
          }
      }
  }

  contains(data) {
      let node = this.root;
      while (node !== null) {
          if (data === node.data) {
              return true;
          } else if (data < node.data) {
              node = node.left;
          } else if (data > node.data) {
              node = node.right;
          }
      }
      return false;
  }

  min(root) {
      if (root === null) {
          return null;
      }
      let node = root;
      while (node.left !== null) {
          node = node.left;
      }
      return node.data;
  }

  max(root) {
      if (root === null) {
          return null;
      }
      let node = root;
      while (node.right !== null) {
          node = node.right;
      }
      return node.data;
  }

  delete(data) {
      if (data === undefined) {
          console.log("you didn't pass any data to delete");
      }
      this.root = this.deleteNode(this.root, data);
  }

  deleteNode(node, data) {
      if (node === null) {
          return null;
      }
      if (data < node.data) {
          node.left = this.deleteNode(node.left, data);
      } else if (data > node.data) {
          node.right = this.deleteNode(node.right, data);
      } else {
          if (!node.left && !node.right) {
              return null;
          } else if (!node.left) {
              return node.right;
          } else if (!node.right) {
              return node.left;
          }
          node.data = this.min(node.right);
          node.right = this.deleteNode(node.right, node.data);
      }
      return node;
  }

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
  
  levelOrder(root){
      if(root == null){
          return null
      }
      if(root){
          let queue = []
          queue.push(root)
          while(queue.length){
              let curr  = queue.shift()
              console.log(curr.data)
              if(curr.left) {
                  queue.push(curr.left)
              }if(curr.right){
                  queue.push(curr.right)
              }
          }
      }
  }

  findSecondLargest(node = this.root, result = { count: 0, secondLargest: null }) {
      if (node === null) {
          return result;
      }
      this.findSecondLargest(node.right, result);
      if (++result.count === 2) {
          result.secondLargest = node.data;
      }
      return result;
  }
  
  findSecondSmallest(node = this.root,result = { count : 0 , secondSmall : null }){
      if(node == null){
          return 
      }
      this.findSecondSmallest(node.left,result)
      if(++result.count === 2){
          result.secondSmall = node.data
      }
      return result
  }

      search(data){
          return this.searchNode(this.root,data)
      }
      
      searchNode(root,data){
          if(root == null){
              return null
          }
          while( root != null){
              if(data == root.data){
                  return root.data
              }else if(data < root.data){
                  this.searchNode(root.left,data)
              }else if(data > root.data){
                  this.searchNode(root.right,data)
              }else{
                  console.log("your searched data",root.data)
              }
          }
      }

  }
      
  let BST = new BinaryTree();
  BST.insert(30);
  BST.insert(35);
  BST.insert(25);
  BST.inOrder(BST.root);
  console.log(BST.findSecondLargest());
  console.log(BST.contains(35));
  BST.levelOrder(BST.root);
  