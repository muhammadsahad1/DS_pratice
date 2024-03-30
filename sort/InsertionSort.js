

// finding the correct position of the element and put their



function InsertionSort(arr){
for(let i = 1;i < arr.length; i ++)
{
  let current = arr[i]
  let j = i - 1
  while(j >= 0 && arr[j] > current){
    arr[j+1] = arr[j]
    j--
  }
   arr[j+1] = current
}
return arr
}


const array = [50,3,2,15,21,3]
console.log(InsertionSort(array))