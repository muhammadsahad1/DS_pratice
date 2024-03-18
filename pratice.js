class Node {
  constructor(data) {
    this.prev = null;
    this.data = data;
    this.next = null;
  }
}

class DoubelyLinkedlist {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  append(data) {
    let newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
  }

  insertAfteNode(nodeData, data) {
    let newNode = new Node(data);
    let temp = this.head;
    while (temp != null && temp.data != nodeData) 
    {
      temp = temp.next;
    }
    if(temp == null) 
    {
      console.log("node not found");
      return 
    }
    newNode.prev = temp
    newNode.next = temp.next
    if(temp.next != null)
    {
      temp.next.prev = newNode
    }
    temp.next = newNode
    if(temp == this.tail) 
    {
      this.tail = newNode
    }
    if(temp == this.head) 
    {
      this.head = newNode
    }
  }
  delete (nodeData){
    let temp = this.head
   while(temp != null && temp.data != nodeData){

     temp = temp.next 
   }
  if(temp === this.head){
    temp.next = this.head
  }
  if(temp === this.tail) {
    temp.prev = this.tail
  }
  temp.prev = temp.next
  temp.next.prev = temp.prev
  }

  display() {
    let temp = this.head;
    if (this.head === null) {
      console.log("is empty");
      return;
    }
    while (temp != null) {
      console.log("nodes", temp.data);
      temp = temp.next;
    }
  }
  displayReverse() {
    let temp = this.tail
    if(this.tail === null) {
      console.log("is empty");
      return
    }
    while( temp != null) {
      console.log("reversed",temp.data);
      temp = temp.prev
    }
  }
}

let list = new DoubelyLinkedlist();
list.append(10);
list.append(50);
list.append(30);
list.insertAfteNode(10, 80);
list.displayReverse()
// list.display();
