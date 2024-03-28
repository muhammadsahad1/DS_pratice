

// function selectionSort(arr){

// for(let i = 0;i < arr.length;i++) 
// {
//   let min = i
//   for(let j = i+1 ;j < arr.length; j++) 
//   {
//     if(arr[j] < arr[min]) 
//      {
//       min = j
//      }
//   }
//   let temp = arr[i]
//   arr[i] = arr[min]
//   arr[min] = temp
// }
// return arr
// }

// const array = [3,2,5,3,1,6,7,2]
// console.log(selectionSort(array))

function selectionSort(arr){

for(let i = 0 ;i < arr.length; i++){
  let min = i
  for(let j = i+1;j < arr.length;j++){
    if(arr[j] < arr[min]){
      min = j
    }
  }
  let temp = arr[i]
  arr[i] = arr[min]
  arr[min] = temp
}
return arr
}

const array = [34,23,5,12,1,55,43]
console.log(selectionSort(array))