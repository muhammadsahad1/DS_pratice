// Doubely linkedList

class Node {
  constructor(data) {
    this.prev = null;
    this.data = data;
    this.next = null;
  }
}

class DoubelyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  creatNode(data) {
    let newNode = new Node(data)
    if(this.head === null) {
      this.head = newNode
      this.tail = newNode
      this.head.prev = null
    }else {
      newNode.next = this.head
      this.head.prev = newNode
      this.head = newNode
    }
  }

  prepend(data) {
    let newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
    }
    this.tail = newNode;
  }
  // display
  display() {
    if (this.head === null) {
      console.log("isn empty");
      return;
    }
    let temp = this.head;
    while (temp != null) {
      console.log("node value", temp.data);
      temp = temp.next;
    }
  }
  // reverse display
  displayReverse() {
    if (this.head === null) {
      console.log("isn empty");
      return;
    }
    let temp = this.tail;
    while (temp != null) {
      console.log("node value", temp.data);
      temp = temp.prev;
    }
  }

  // delete

  delete(data) {
    let temp = this.head;

    // Traverse the list to find the node with the given data
    while (temp !== null && temp.data !== data) {
      temp = temp.next;
    }

    // If the node with the data is found
    if (temp !== null) {
      // If the node is the head
      if (temp === this.head) {
        this.head = temp.next;
        if (this.head !== null) {
          this.head.prev = null;
        }
      } else {
        // If the node is not the head
        temp.prev.next = temp.next;
      }

      // If the node is the tail
      if (temp === this.tail) {
        this.tail = temp.prev;
        if (this.tail !== null) {
          this.tail.next = null;
        }
      } else {
        // If the node is not the tail
        temp.next.prev = temp.prev;
      }
    }
  }
  // Insertion node
  append(data) {
    let newNode = new Node(data);

  if(this.head === null) {
    this.head = newNode
    this.tail = newNode
  }else{
    this.tail.next = newNode;
    newNode.prev = this.tail
    this.tail = newNode
  }
  }
  // InsertionAfterNode
  insertionAfter(nodeData,data){
    let newNode = new Node(data)
    let temp = this.head
    while( temp != null && temp.data != nodeData) {
      temp = temp.next
    }
    if(temp === null ) {
      console.log("is empty");
      return 
    }
    newNode.prev = temp
    newNode.next = temp.next
    if(temp.next != null) {
      
    }
  }

  insertionBefore(nodeData,data) {
    let newNode = new Node(data)
    let temp = this.head
    while(temp != null && temp.data != data) {
      temp = temp.next;
    }
    if(temp == null){
      console.log("is empty");
      return 
    }
  
  }
}

let list = new DoubelyLinkedList();
list.creatNode(19)
list.prepend(10);
list.prepend(90);
list.prepend(30);
// list.delete(30);
list.insertionAfter(90,2)
list.display();
// list.displayReverse()
