
class Node{
  constructor(data){
    this.data = data
    this.next = null
  }
}

class stack{
  constructor(){
    this.top = null
  }
  push(data){
    let newNode = new Node(data)
    if(this.top === null) {
      this.top = newNode
      this.top.next = null
    }else{
      newNode.next = this.top
      this.top = newNode
    }
  }
  pop(){
    if(this.top === null) {
      console.log("is empty");
      return 
    }
      this.top = this.top.next
    
    
  }
  display(){
  if(this.top === null) {
    console.log("empty");
    return
  }
  let current = this.top
  while(current != null) {
    console.log(current.data);
    current = current.next
  }
  }
}

let stackkk = new stack()
stackkk.push(50)
stackkk.push(70)
stackkk.push(90)
stackkk.push(44)
// // stackkk.peek(44)
// stackkk.display()
stackkk.pop()
stackkk.display()

// ARRAY BASED STACK


// class stack {
//   constructor(){
//     this.item = []
//   }
//   push(data){
//   this.item.push(data)
// }

// pop(){
//   if(this.item.length < 0) {
//     console.log("is empty");
//     return
//   }
//   return this.item.pop()
// }
// display(){
//   if(this.item.length < 0){
//     console.log("is empty");
//     return
//   }
//   let n = this.item.length-1
//   for(let i = n;i >=0;i--){
//     console.log(this.item[i]);
//   }
// }
// }


// let arrayStack = new stack()
// arrayStack.push(100)
// arrayStack.push(78)
// arrayStack.push(90)
// arrayStack.pop()
// arrayStack.display()


// class QueueWithTwoStacks{
//   constructor(){
//     this.stack1 = []
//     this.stack2 = []
//   }

//   enqueue(item){

//     this.stack1.push(item)
//   }

//   dequeue(){
//     if(this.stack2.length === 0){
//       while(this.stack1.length > 0){
//         this.stack2.push(this.stack1.pop())
//       }
//     }
//     return this.stack2.pop()
//   }


//   display(){
//     if(this.stack1.length > 0){
//       console.log(this.stack1);
//     }
//     if(this.stack2.length > 0){
//       console.log(this.stack2);
//     }
//   }

// }


// let stackss = new QueueWithTwoStacks();
// stackss.enqueue(10);
// stackss.enqueue(60);
// stackss.enqueue(77);
// stackss.enqueue(90);
// stackss.display(); // Display both stacks
// stackss.dequeue();
// stackss.display(); // Display both stacks after dequeue

