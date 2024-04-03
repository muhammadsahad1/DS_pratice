// class maxHeap {
//   constructor(){
//     this.heap = []
//   }

//   getParentIndex(i){
//     return Math.floor((i-1)/2)
//   }

//   getLeftChildIndex(i){
//     return 2 * i + 1
//   }

//   getRightChildIndex(i){
//     return 2 * i + 2
//   }

//   swap(i,j){
//     [this.heap[i],this.heap[j]] = [this.heap[j],this.heap[i]]
//   }

//   push(value){
//     this.heap.push(value)
//     this.heapifyUp()
//   }

//   heapifyUp(){
//     let currIndex = this.heap.length -1
//     let parentIndex = this.getParentIndex(currIndex)

//     while(currIndex > 0 && this.heap[parentIndex] < this.heap[currIndex]){

//       this.swap(parentIndex,currIndex)
//       currIndex = parentIndex
//       parentIndex = this.getParentIndex(currIndex)
//     }
//   }

//   heapifyDown(){
//     let currentIndex = 0
//     while(this.getLeftChildIndex(currentIndex) < this.heap.length){
//       let smallIndex = this.getLeftChildIndex(currentIndex)
//       let rightIndex = this.getRightChildIndex(currentIndex)
//       if(rightIndex  < this.heap.length && this.heap[rightIndex] < this.heap[smallIndex]){
//          smallIndex = rightIndex
//       }

//       if(this.heap[currentIndex] > this.heap[smallIndex]){
//         this.swap(currentIndex,smallIndex)
//         currentIndex = smallIndex
//       }else{
//         return
//       }

//     }
//   }

// }

// let heap = new maxHeap()
// heap.push(10);
// heap.push(20);
// heap.push(4)
// heap.push(14)
// heap.push(6)
// heap.push(7)
// heap.push(17)
// heap.push(3)
// console.log(heap.heap);

class Heap {
  constructor() {
    this.heap = [];
  }
  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
  }
  getLeftChildIndex(i) {
    return 2 * i + 1;
  }
  getRightChildIndex(i) {
    return 2 * i + 2;
  }

  swap(i, j) {
    [this.heap[j], this.heap[i]] = [this.heap[i], this.heap[j]];
  }

  push(data) {
    this.heap.push(data);
    this.heapifyDown();
  }

  heapifyUp() {
    let currentIndex = this.heap.length - 1;
    let parentIndex = this.getParentIndex(currentIndex);
    while (
      currentIndex > 0 &&
      this.heap[parentIndex] < this.heap[currentIndex]
    ) {
      this.swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
      parentIndex = this.getParentIndex(currentIndex);
    }
  }

  heapifyDown() {

  let currentIndex = 0
  while(this.getLeftChildIndex(currentIndex) < this.heap.length){
  let biggestIndex = this.getLeftChildIndex(currentIndex)
  let rightIndex = this.getRightChildIndex(currentIndex)
  if(rightIndex < this.heap.length && this.heap[rightIndex] > this.heap[biggestIndex]){
    biggestIndex = rightIndex
    
  }
  if(this.heap[currentIndex] < this.heap[biggestIndex]){
    this.swap(currentIndex,biggestIndex)
    currentIndex = biggestIndex
  }else{
    return
  }
  
}
  }


  poll() {
    if (this.heap.length === 0) return null;

    let maxValue = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return maxValue;
  }
}

function heapSort(array) {

  let heap = new Heap()
  for(let i = 0 ; i < array.length; i++){
    heap.push(array[i])
  }

  let sortedArr = []
  for(let i = 0;i < array.length;i ++){
    sortedArr.unshift(heap.poll())
  }
  return sortedArr
}



let heap = new Heap();
heap.push(10);
heap.push(20);
heap.push(4);
heap.push(14);
heap.push(6);
heap.push(7);
heap.push(17);
heap.push(3);

// console.log(heap.heap);
// console.log( heap.poll()); 
// console.log(heap.poll(),
//     heap.poll(),
//     heap.poll(),
//     heap.poll(),
//     heap.poll(),
//     heap.poll(),
//     heap.poll(),
//     heap.poll());
// console.log(heap.heap);

let array = [12, 34, 55, 62, 12, 34, 44, -1, 223, 5, -3, 5];
const sorted = heapSort(array);
console.log(sorted);
