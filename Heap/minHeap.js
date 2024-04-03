class minHeap {
 constructor(){
  this.heap = []
 }

 getParentIndex(i){
  return Math.floor((i-1)/2)
 }

 getLeftChildIndex(i){
  return 2 * i +1
 }
 getrightChildIndex(i){
  return 2 * i +2
 }
 
 swap(i,j){
  [this.heap[i],this.heap[j]] = [this.heap[j],this.heap[i]]
 }

 push(data){
  this.heap.push(data)
  this.heapifyUp()
 }

 heapifyUp(){
  let currentIndex = this.heap.length -1
  let parentIndex = this.getParentIndex(currentIndex)
  while(this.heap[currentIndex] < this.heap[parentIndex])
  this.swap(currentIndex ,parentIndex)
currentIndex = parentIndex
 }

 heapifyDown(){
  let currentIndex = 0
  while(this.getLeftChildIndex(currentIndex) < this.heap.length){
    let smallIndex = this.getLeftChildIndex(currentIndex)
    let rightIndex = this.getrightChildIndex(currentIndex)
    if(rightIndex < this.heap.length && this.heap[rightIndex] < this.heap[smallIndex]){
      smallIndex = rightIndex
    }
    if(this.heap[currentIndex] > this.heap[smallIndex]){
      this.swap(currentIndex,smallIndex)
      currentIndex = smallIndex
    }else{
      return 
    }
  }
 }
 poll(){

  if(this.heap.length === 0) return null

  let minValue = this.heap[0]
  this.heap[0] = this.heap.pop()
  this.heapifyUp()
  return minValue

 }
}

function heapSort(array){

  let heap = new minHeap()
  for(let i = 0 ;i < array.length;i++){
    heap.push(array[i])
  }
  let sortedArr = []
  for(let i = 0; i < array.length ;i ++){

    sortedArr.push(heap.poll())
  }
  
  return sortedArr
}

let heap = new minHeap()
heap.push(20)
heap.push(30)
heap.push(15)
heap.push(18)
heap.push(22)

// console.log(heap.heap)

// console.log(heap.poll()); 

let array = [12, 34, 55, 62, 12, 34, 44, -1, 223, 5, -3, 5];
const sorted = heapSort(array);
console.log(sorted);
