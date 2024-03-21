// function findUniqueValue(array) {
//   const uniqueValues = [];

//   for (let i = 0; i < array.length; i++ ) {
//     const element = array[i];
//     if (array.indexOf(element) === array.lastIndexOf(element)) {
//       uniqueValues.push(element);
//     }
//   }

//   return uniqueValues;
// }

// const array = [2, 2, 3, 3, 1];
// console.log(findUniqueValue(array)); 



// function findTargetValue(array,target1,target2){

// let findTarget1 = false
// let findTarget2 = false

// for(let i = 0;i<array.length;i++) {
//   if(array[i] === target1) {
//     findTarget1 = true
//   }
//   if(array[i] === target2) {
//     findTarget2 = true
//   }
//   if(findTarget1 && findTarget2) {
//     return true
//   }

// }
// return false
// }

// const arr = [2,4,5,6,1]
// console.log(findTargetValue(arr,5,1));