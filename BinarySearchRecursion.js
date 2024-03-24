

function BinarySearch(arr,target){
return search(arr,target,0,arr.length-1)
}

function search (arr,target,leftIndex,rightIndex){
  while(leftIndex <= rightIndex) {
    let middleIndex = Math.floor( (leftIndex + rightIndex) /2 )
    if(arr[middleIndex] === target) {
      return middleIndex
    }else if(arr[middleIndex] > target) {
       return search(arr,target,leftIndex,middleIndex-1)
    }else {
      return search(arr,target,middleIndex+1,rightIndex)
    }
  }
  return -1
}

const arr = [1, 3, 5, 7, 9, 11, 13];
const target = 11
console.log(BinarySearch(arr,target))