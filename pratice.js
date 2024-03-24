// class Node {
//   constructor(data) {
//     this.prev = null;
//     this.data = data;
//     this.next = null;
//   }
// }



// class DoubelyLinkedlist {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//   }
//   append(data) {
//     let newNode = new Node(data);

//     if (this.head === null) {
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       this.tail.next = newNode;
//       newNode.prev = this.tail;
//       this.tail = newNode;
//     }
//   }

//   insertAfteNode(nodeData, data) {
//     let newNode = new Node(data);
//     let temp = this.head;
//     while (temp != null && temp.data != nodeData)
//     {
//       temp = temp.next;
//     }
//     if(temp == null)
//     {
//       console.log("node not found");
//       return
//     }
//     newNode.prev = temp
//     newNode.next = temp.next
//     if(temp.next != null)
//     {
//       temp.next.prev = newNode
//     }
//     temp.next = newNode
//     if(temp == this.tail)
//     {
//       this.tail = newNode
//     }
//     if(temp == this.head)
//     {
//       this.head = newNode
//     }
//   }
//   delete (nodeData){
//     let temp = this.head
//    while(temp != null && temp.data != nodeData){

//      temp = temp.next
//    }
//   if(temp === this.head){
//     temp.next = this.head
//   }
//   if(temp === this.tail) {
//     temp.prev = this.tail
//   }
//   temp.prev = temp.next
//   temp.next.prev = temp.prev
//   }

//   display() {
//     let temp = this.head;
//     if (this.head === null) {
//       console.log("is empty");
//       return;
//     }
//     while (temp != null) {
//       console.log("nodes", temp.data);
//       temp = temp.next;
//     }
//   }
//   displayReverse() {
//     let temp = this.tail
//     if(this.tail === null) {
//       console.log("is empty");
//       return
//     }
//     while( temp != null) {
//       console.log("reversed",temp.data);
//       temp = temp.prev
//     }
//   }
// }

// let list = new DoubelyLinkedlist();
// list.append(10);
// list.append(50);
// list.append(30);
// list.insertAfteNode(10, 80);
// list.displayReverse()
// // list.display();

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class singleyLinkedListt {
  constructor() {
    this.head = null;
    this.tail = null;
  }

createNode(data){
  let newNode = new Node(data)
  if(this.head === null ) {
    this.head = newNode
    this.tail = newNode
  }else {
    this.tail.next = newNode
    this.tail = newNode
  }
}

insertBegin(data){
let newNode = new Node(data)
if(this.head == null) {
    this.head = newNode;
    this.tail = newNode
}else {
  newNode.next = this.head
  this.head = newNode

}
}

insertAfterNode (ndoeData,data){
let newNode = new Node(data)
let temp = this.head;

while(temp != null && temp.data != ndoeData) {
  temp = temp.next
}
if(temp == null) {
  console.log("is empty");
  return
}
if(temp === this.tail) {
  this.tail = new Node
}
newNode.next = temp.next
temp.next = newNode

}

insertBeforeNode(nodeData,data){
  let newNode = new Node(data)
  let temp = this.head
  let prev = null
  while(temp != null && temp.data != nodeData) {
    prev = temp 
    temp = temp.next
  }
  if(temp === null) {
    console.log("ndoeData is not exists");
       return 
  }

  if(temp === this.tail) {
    prev.next = newNode
    newNode.next = temp
    return
  }

  newNode.next = temp
  prev.next = newNode
}

delete(nodeData) {
  let temp = this.head
  let prev = null
while(temp != null && temp.data != nodeData){
  prev = temp
  temp = temp.next
}
if(temp === null) {
  console.log("not found nodedata that you given");
  return
}

if(temp === this.tail) {
  this.tail = prev
  prev.next = null
  return
}

if(temp === this.head) {
  this.head = temp.next
  return
}

prev.next = temp.next

}

  toArray(){
    let result = []
    let temp = this.head
    if(this.head === null) {
      console.log("is empty");
    return
    }
    while( temp != null) {
      result.push(temp.data)
      temp = temp.next
    }

    return result

  }

    display() {
      let temp = this.head;
      if (this.head === null) {
        console.log("is empty");
      }
      while (temp != null) {
        console.log(temp.data);
        temp = temp.next;
      }
    }
}

let list = new singleyLinkedListt();
list.insertBegin(90);
list.createNode(20);
list.createNode(50);
list.createNode(40);
list.insertAfterNode(20,55)
list.insertBeforeNode(20,11)
list.delete(40)
list.display()
// console.log(list.toArray())





// console.log(list.toArray());
// // list.display();

// DOUBLEy LINKEDLIST

// class Node {
//   constructor(data){
//     this.prev = null
//     this.data = data;
//     this.next = null
//   }
// }

// class DoubleyLinkedList{
//   constructor(){
//     this.head = null
//     this.tail = null
//   }
//   createNode(newData){
//     let newNode = new Node(newData)
//     if(this.head == null) {
//       newNode.prev = null
//       newNode.next = null
//       this.head = newNode
//       this.tail = newNode
//     }
//     else{
//       newNode.prev = this.tail
//       newNode.next = null
//       this.tail.next = newNode
//       this.tail = newNode
//     }

//   }

//   insertAfterNode(nodeData,data) {
//     let newNode = new Node(data)
//     let temp = this.head
//     while(temp != null && temp.data !=  nodeData) {
//       temp = temp.next
//     }
//     if(temp == null) {
//       console.log("no data founded");
//       return
//     }
//     newNode.prev = temp
//     newNode.next = temp.next
//     if(temp.next != null) {

//     }
//   }

//   display(){
//     let temp = this.head
//     if(this.head == null) {
//       console.log("is empty");
//       return
//     }
//     while(temp != null) {
//       console.log("data",temp.data);
//       temp = temp.next
//     }
//   }

// }

// let list = new DoubleyLinkedList()
// list.createNode(10)
// list.createNode(50)
// list.createNode(50)
// list.createNode(80)
// list.insertAfterNode(50,90)
// list.display()
