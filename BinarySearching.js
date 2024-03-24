



// BINARY SEARCH

function BinarySearch(arr,target){

  let left = 0;
  let rightIndex = arr.length-1
  while( left < rightIndex) {
    const sum = arr[left] + arr[rightIndex]

    if(sum === target) {
      return [left,rightIndex]
    }
    else if(sum > target){
      rightIndex --

    }else{
      left ++
    }
  }
  return -1
}



const arr = [1, 3, 5, 7, 9, 11, 13];
const target = 10

console.log(BinarySearch(arr,target))