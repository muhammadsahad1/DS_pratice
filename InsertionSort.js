

// finding the correct position of the element and put their


// function InsertionSort (array){
//   for(let i = 0 ; i < array.length; i ++)
// {
//   let current = array[i]
//   let j = i-1
//   while (j >= 0 && array[j] > current) 
//   {
//     array[j+1] = array[j]
//     j--
//   }
//   array[j+1] = current
// }
//   return array

// }
// const array = [2,88,23,5,100]
// console.log(InsertionSort(array))



function InsertionSort(arr){
  for(let i = 1;i < arr.length; i++) 
  {
    let current = arr[i]
    let j = i - 1
    while(j>=0 && arr[j] < current){
      arr[j+1] = arr[j]
      j--
    }
    arr[j+1] = current
  }
  return arr
}


const array = [50,3,2,15,21,3]
console.log(InsertionSort(array))