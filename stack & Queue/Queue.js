
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
//     let newQueue = new Node(data)
//     if(this.front === null) {
//     this.front = this.rear = newQueue
//     }else{
//       this.rear.next = newQueue
//       this.rear = newQueue
//     }
//   }

//   Dequeue(){
//     if(this.front === null) {
//       console.log("ios empty");
//       return
//     }
// this.front = this.front.next
// if(this.front === null ) {
//   this.rear = null
// }
//   }

//   size () {
//     let count = 0;
//     let current = this.front;
//     while (current !== null) {
//       count++;
//       current = current.next;
//     }
//     return count;
//   }

//   toArray (){
//     let Array = []
//     let current = this.front
//     while(current != null) {
//       Array.push(current.data)
//       current = current.next
//     }
//     return Array
//   }

//   display(){
//     if(this.front === null) {
//       console.log("queue is empty");
//     return
//     }
//     let current = this.front
//     while(current != null) {
//       console.log("queue data",current.data);
//       current = current.next
//     }
//   }
// }

// let queue = new Queue()
// queue.Enqueue(100)
// queue.Enqueue(55)
// queue.Enqueue(30)
// console.log(queue.size())
// console.log(queue.toArray())
// queue.display()



class Node{
  constructor(data){
    this.data = data
    this.next = null
  }
}
class queue {
  constructor(){
    this.front = null
    this.rear = null
  }
  enqueue(data){
    let newNode = new Node(data)
    if(this.front == null){
      this.front = this.rear = newNode
    }else{
     this.rear.next = newNode
     this.rear = newNode
    }
  }
  dequeue(){
    if(this.front == null){
      console.log("is empty");
      return
    }
    this.front = this.front.next
    if(this.front == null){
      this.rear = null
    }
  }

  peek(data){
    if(this.front == null) {
      console.log("is empty");
      return
    }
    let current = this.front
    while (current != null && current.data != data) {
      current = current.next
    } 
    return console.log("searched data",current.data)
  }

  display(){
    if(this.front === null) {
      console.log("is empty");
      return
    }
    let current = this.front
    while(current != null){
      console.log(current.data);
      current = current.next
    }
  }
}

let Queue = new queue
Queue.enqueue(100)
Queue.enqueue(50)
Queue.enqueue(70)
Queue.enqueue(85)
Queue.dequeue()
Queue.peek(50)
// Queue.size()
// console.log(Queue.toArray())
Queue.display()