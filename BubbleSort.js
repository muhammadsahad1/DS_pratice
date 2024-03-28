

// function BubbleSort(arr){

// for(let i = 0;i < arr.length-1;i++)
// {
//   let flag = 0
//   for(let j = 0 ; j < arr.length -1-i; j++) 
//   {
//     if(arr[j] > arr[j+1]) {
//       let temp = arr[j]
//       arr[j] = arr[j+1]
//       arr[j+1] = temp
//       flag = 1
//     }
//   }
//   if(flag === 0) {
//     break
//   }
// }

// return arr

// }

// const array = [4,40,23,2,1]
// console.log(BubbleSort(array))


function BubbleSort(arr){
  for(let i = 0; i < arr.length;i++){
    for(let j = 0; j < arr.length ;j++){
      if(arr[j] > arr[j+1]){
        let temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
      }
    }
  }
  return arr
}
const array = [4,40,23,2,1]
console.log(BubbleSort(array))
