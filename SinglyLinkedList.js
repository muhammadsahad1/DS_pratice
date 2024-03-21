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

}


//   prepend(data){
//     let newNode = new Node(data)
//     if(this.head === null) {
//       this.head = newNode
//     }else{
//       this.tail.next = newNode
//     }
//     this.tail = newNode
//   }
//   display(){
//     if(this.head == null) {
//       console.log("is empty");
//       return 
//     }
//     let temp = this.head
//     while(temp!=null) {
//       console.log("node value",temp.data);
//       temp = temp.next
//     }
//   }
  
//   // 3 cases of delete (first,middle,end)
  
//   delete(data){
//     let temp = this.head
//     let prev = null 
//     if(temp == !null && temp.data === data) {
      
//       this.head = temp.next
//       return 
//     }
//     while(temp != null && temp.data != data) {
//       prev = temp
//       temp = temp.next  
//     }
    
//     if(temp == null) {
//       console.log("no data exists");
//       return
//     }
    
//     if(temp == this.tail) {
//       this.tail = prev
//       this.tail.next = null
//       return 
      
//     }

//     // DELETED
//     prev.next = temp.next  
    
//   }

//   //FINDING MIDDLE 
  
//   FindMiddle(){
//     let slow = this.head;
//     let fast = this.head
//     while(fast && fast.next) {
//       slow = slow.next
//       fast = fast.next.next
//     }
//     console.log("middle node",slow.data);
//   }

//   // INSERTION NODE
//   insertionAfter(nextTo , data){

//        let newNode = new Node(data)
//        let temp = this.head 
//        while (temp != null && temp.data != nextTo) {
//         temp  = temp.next
//        }
//        if(temp == null) {
//         console.log("not found that nodeData");
//         return 
//        }
//        if(temp === this.tail) {
//         temp.next = newNode
//         this.tail = newNode
//         return 
//        }
//        newNode.next = temp.next
//        temp.next = newNode
//   }
// }
  
//   let list = new Linkedlist
//   list.prepend(10)
//   list.prepend(30)
//   list.prepend(50)
//   list.delete(80)
//   list.insertionAfter(50,600)
//   // list.delete(50)
//   list.display()
//   list.FindMiddle()

