// PRIME NUMBER

//  function prime(n){
//   if(n < 2){
//     return false
//   }
//   for(let i = 2; i < Math.sqrt(n) ; i ++){
//     if(n%i ==0){
//       return false
//     }
//   }
//   return true
//  }
//  console.log(prime(5));
//  console.log(prime(4)); console.log(prime(1));

// Big-O = O(sqrt(n))
// ========================

// FEBINACCI NUMBER

// function febbi(n){
//   let febbi = [0,1]
//   for( let i = 2;i < n ;i ++){
//       febbi[i] = febbi[i-1] + febbi[i - 2]
//   }
//   return febbi
// }
// console.log(febbi(3))
// console.log(febbi(7))

// ========================

// POWER OF TWO

// function isPowerof2(n){

//   if(n < 1){
//     return false
//   }

//   while(n > 1)
//   {
//     if(n%2 !== 0){
//       return false
//     }
//     n = n/2
//   }

//   return true
// }

// console.log(isPowerof2(5))
// Big-O = O(logn)

//      input size reduced by half - O(logn)   //

// ========================

// RECURSIVE FINONACCI

// function recursiveFibonacc(n){
//   if(n < 2){
//     return n
//   }
//   return recursiveFibonacc(n-1) + recursiveFibonacc(n-2)
// }

//   console.log(recursiveFibonacc(3))

// O(n) - Iterative
// O(2^n) - Recursive

// ==========================

// RECURSIVE FACTORIAL

// function recursiveFactorial(n){
//   if(n === 0 ){
//    return 1
//   }
//   return n * recursiveFactorial(n-1)
// }

// console.log(recursiveFactorial(5)) 

// Big O - O(n)

// ==========================

// LINEAR SEARCH

// const array = [1,2,3,4,5,6]
// const target = 4

// function findIndex(array,target){

//   for(let i = 0;i < array.length;i++)
//   {
//     if(array[i]===target)
//     {

//      return i

//   }
// }
// return -1
// }
// console.log(findIndex(array,target))

// Big O - O(n)

// ==========================

// BINARY SEARCH

// function BinarySearch(arr,target){
//   let leftIndex = 0;
//   let rightIndex = arr.length-1
//   while(leftIndex <= rightIndex)
//   {
//     let middlexIndex = Math.floor((leftIndex + rightIndex) / 2 )
//     if(target === middlexIndex){
//       return middlexIndex
//     }if(target < middlexIndex){
//       leftIndex = middlexIndex-1
//     }else {
//       leftIndex = middlexIndex+1
//     }
//   }
//   return -1
// }
// console.log(BinarySearch([-5,0,2,3,4],2)) 
// console.log(BinarySearch([1,2,3,4,5],2)) 
// console.log(BinarySearch([2,3,4,5,6],4)) 

// Big O - O(logn)

// ==========================

// RECURSIVE BINARY SEARCH

// function recursiveBinarySearch(arr,target){
//   return search (arr,target,0,arr.length-1)
// }

// function search(arr,target,leftIndex,rightIndex){
// if(leftIndex > rightIndex){
//   return -1
// }
// let middlexIndex = Math.floor((leftIndex + rightIndex)/2)
// if(target === arr[middlexIndex]) {
//   return middlexIndex
// }if(target > arr[middlexIndex]){
//   return search(arr,target,middlexIndex+1,rightIndex)
// }else{
//   return search(arr,target,leftIndex,middlexIndex-1)
// }
// }

// console.log(recursiveBinarySearch([-4,1,3,4,5,6],5)) 4
// console.log(recursiveBinarySearch([1,2,3,4,5,6],2)) 1
// console.log(recursiveBinarySearch([2,3,4,5,6,7],6)) 4

// Big-O = O(logn)

// =============================

// BUBBLE SORT

// function BubbleSort(arr) {
//   let swapped;
//   do {
//     swapped = false
//     for (let i = 0; i < arr.length - 1; i++) {
//       if (arr[i] < arr[i + 1]) {
//         let temp = arr[i];
//         arr[i] = arr[i + 1];
//         arr[i + 1] = temp;
//         swapped = true
//       }
//     }
//   } while (swapped);
// }
// const arr = [-6, 8, 20, -2, 4];
// BubbleSort(arr)
// console.log("arr", arr);

// Big-O = O(n^2)

// =================================
