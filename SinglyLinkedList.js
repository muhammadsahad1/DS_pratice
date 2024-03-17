// LINKED LIST

class Node {
  constructor(data){
    this.data = data
    this.next = null
  }
}

class Linkedlist{
  constructor(){
    this.head = null
    this.tail = null
  }

  prepend(data){
    let newNode = new Node(data)
    if(this.head === null) {
      this.head = newNode
    }else{
      this.tail.next = newNode
    }
    this.tail = newNode
  }
  display(){
    if(this.head == null) {
      console.log("is empty");
      return 
    }
    let temp = this.head
    while(temp!=null) {
      console.log("node value",temp.data);
      temp = temp.next
    }
  }

  // 3 cases of delete (first,middle,end)

  delete(data){
    let temp = this.head
    let prev = null 
    if(temp == !null && temp.data === data) {

      this.head = temp.next
    return 
    }
    while(temp != null && temp.data != data) {
      prev = temp
      temp = temp.next  
    }

    if(temp == null) {
      console.log("no data exists");
      return
    }

    if(temp == this.tail) {
      tail = prev
      this.tail.next = null
      return 

    }

    prev.next = temp.next
    
  }
  
  }

let list = new Linkedlist
list.prepend(10)
list.prepend(30)
list.prepend(50)
list.prepend(80)
list.delete(50)
list.display()

