

// function stringReverse(string){
// return reversing(string)
// }

// function reversing(string){
//   let reveredSrting = ''
// for(let i = string.length-1;i>=0;i--){
//  reveredSrting += string[i]
// }
// return reveredSrting
// }

// const string = 'hellow'
// console.log(stringReverse(string))

// finding the index of target

function binarySearch(arr,target){
let left = 0;
let right = arr.length-1

while(left <= right) {
  let middle = Math.floor((left+right)/2)
  if(arr[middle] === target){
    return middle
  }
  else if(arr[middle] > target) {
    right = middle-1
  }else {
    left = middle +1
  }
}  
return -1

}




const arr = [1,2,3,4,5,6,7]
console.log(binarySearch(arr,7))