// class Node {
//   constructor(data) {
//     this.data = data
//     this.next = null
//   }
// }

// class Stack {
//   constructor(){
//     this.top = null

//   }

//   push(Data){
//     let newNode = new Node(Data)
//     if(this.top === null) {
//       this.top = newNode
//     }else{
//       newNode.next = this.top
//       this.top = newNode
//     }
//   }

//   pop(){
//     if(this.top === null) {
//       console.log("is empt");
//       return
//     }
//     console.log("deleted value", this.top.data);
//     this.top = this.top.next
//   }
//   display(){
//     let current = this.top
//     while(current != null)
//     {
//       console.log("node Data",current.data);
//       current = current.next
//     }
//   }

// }

// let stack = new Stack()
// stack.push(12)
// stack.push(10)
// stack.push(30)
// stack.pop()
// stack.display()



class Node{
  constructor(data){
    this.data = data
    this.next = null
  }
}

class Stack {
  constructor(){
    this.top = null
  }

  push(data) {
    let newNode = new Node(data)
    if(this.top === null) {
      this.top = newNode
    }else {
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

  peek(data) {
    if(this.top == null){
      console.log("is epmty");
      return
    }
    let current = this.top
    while(current.data != data){
      current = current.next
      if(current.data != data) {
        console.log("data is not exists in this stack");
        return
      }

    }
    console.log("data :" ,current.data);

  }

  display (){
    if(this.top === null) {
      console.log("is empty");
      return 
    }
    let current = this.top
    while(current != null) {
      console.log("data",current.data);
      current = current.next
    }
  }

}

let stack = new Stack()
stack.push(50)
stack.push(70)
stack.push(90)
stack.push(44)
stack.peek(44)
stack.pop()
stack.display()

// ARRAY BASED STACK

// class stack {
//   constructor(){
//     this.items = []
//   }

//   push(data){

//      this.items.push(data)
  
  
// }

// pop(){
//   if(this.items === null) {
//     return null
//   }
// return this.items.pop()
// }

// display(){
//   if(this.items === 0) {
//     console.log("is empty");
//     return
//   }
//   for(let i  = this.items.length-1 ;i >=0; i--)
//   {
//     console.log(this.items[i]);
//   }
// }
// }

// let arrayStack = new stack()
// arrayStack.push(100)
// arrayStack.push(78)
// arrayStack.push(90)
// arrayStack.pop()
// arrayStack.display()