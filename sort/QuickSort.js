// function quickSort(arr, l = 0, h = arr.length - 1) {
//   if (l < h) {
//       // Partition the array and get the pivot index
//       const pivotIndex = partition(arr, l, h);

//       // Recursively sort the elements before and after the pivot
//       quickSort(arr, l, pivotIndex);
// //       quickSort(arr, pivotIndex + 1, h);
// //   }
// //   return arr;
// // }

// // function partition(arr, l, h) {
// //   let i = l;
// //   let j = h;
// //   let pivot = arr[l];

// //   while (i < j) {
// //       do {
// //           i++;
// //       } while (arr[i] <= pivot);

// //       do {
// //           j--;
// //       } while (arr[j] > pivot);

// //       if (i < j) {
// //           let temp = arr[i];
// //           arr[i] = arr[j];
// //           arr[j] = temp;
// //       }
// //   }

// //   // Swap the pivot element with the element at index j
// //   let temp = arr[l];
// //   arr[l] = arr[j];
// //   arr[j] = temp;

// //   // Return the index of the pivot element after partitioning
// //   return j;
// // }

// // // Example usage:
// // const array = [78,2,11,33,55,90]
// // console.log(quickSort(array)); // Output: The sorted array

// function quickSort(arr,l = 0,h = arr.length){
// if(l < h) {
//   let pivotIndex = partition(arr,l,h)
//   quickSort(arr,l,pivotIndex)
//   quickSort(arr,pivotIndex +1,h)
// }

// return arr
// }

// function partition(arr,l,h){
// let pivot = arr[l]
// let i = l
// let j = h

// while(i < j) {
//   do{
//     i++
//   }while(arr[i] <= pivot)
//   do {
//     j--
//   }while(arr[j] > pivot)
//   if(i < j) {
//     let temp = arr[i]
//     arr[i] = arr[j]
//     arr[j] = temp
//   }
// }
// let temp = arr[l]
// arr[l] = arr[j]
// arr[j] = temp
// return j
// }


function quickSort(arr,low = 0,high = arr.length){

  if(low < high){

    let pivotIndex = partition(arr,low,high)
    quickSort(arr,pivotIndex+1,high)
    quickSort(arr,low,pivotIndex)

  }
  return arr

}

function partition(arr,low,high){
  let pivot = arr[low]
  let i = low
  let j = high
  while(i < j){
  do{
    i++
  }while(arr[i] <= pivot)
  do{
    j--
  }while(arr[j] > pivot)
  if(i < j){
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }
}
let temp = arr[low]
arr[low] = arr[j]
arr[j] = temp
return j
}

const array = [12, 4, 5, 77, 32, 21];
console.log(quickSort(array));
