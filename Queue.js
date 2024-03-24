// class Node{
//   constructor(data){
//     this.data = data
//     this.next = null
//   }
// }

// class Queue {
//   constructor(){
//     this.front = null
//     this.rear = null
//   }

//   Enqueue(data){
//     let newNode = new Node(data)
//     if(this.front === null) {
//       this.front = this.rear = newNode
//     }else{
//       this.rear.next = newNode
//       this.rear = newNode
//     }
//   }

//   Dequeue(){
//     if(this.front === null){
//       console.log("is Empty");
//       return
//     }
//       this.front = this.front.next

//       if(this.front === null){
//         this.rear = null
//       }
//   }

//   display(){
//     if(this.front === null){
//       console.log("is empty");
//       return
//     }
//     let temp = this.front
//     while( temp != null) {
//       console.log("data",temp.data);
//       temp = temp.next
//     }
//   }
// }

// let queue = new Queue()
// queue.Enqueue("dislashad")
// queue.Enqueue(70)
// queue.Enqueue(90)
// queue.Enqueue(10)
// queue.Dequeue()
// queue.display()


class Node{
  constructor(data){
    this.data = data
    this.next = null
  }
}

class Queue {
  constructor(){
    this.front = null
    this.rear = null
  }

  Enqueue(data){
    let newQueue = new Node(data)
    if(this.front === null) {
    this.front = this.rear = newQueue
    }else{
      this.rear.next = newQueue
      this.rear = newQueue
    }
  }

  Dequeue(){
    if(this.front === null) {
      console.log("ios empty");
      return
    }
this.front = this.front.next
if(this.front === null ) {
  this.rear = null
}
  }

  size () {
    let count = 0;
    let current = this.front;
    while (current !== null) {
      count++;
      current = current.next;
    }
    return count;
  }

  toArray (){
    let Array = []
    let current = this.front
    while(current != null) {
      Array.push(current.data)
      current = current.next
    }
    return Array
  }

  display(){
    if(this.front === null) {
      console.log("queue is empty");
    return
    }
    let current = this.front
    while(current != null) {
      console.log("queue data",current.data);
      current = current.next
    }
  }
}

let queue = new Queue()
queue.Enqueue(100)
queue.Enqueue(55)
queue.Enqueue(30)
console.log(queue.size())
console.log(queue.toArray())
queue.display()