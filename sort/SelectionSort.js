
// first find the min value of this array this put correct position of that value

function selectionSort(arr){

for(let i = 0 ; i < arr.length;i++)
{
  let min = i
  for(let j = i+1;j < arr.length ;j++)
  {
    if(arr[j] < arr[min]){
      min = j
    }
  }
  let temp = arr[min]
  arr[min] = arr[i]
  arr[i] = temp
}
return arr
}

const array = [34,23,5,12,1,55,43]
console.log(selectionSort(array))