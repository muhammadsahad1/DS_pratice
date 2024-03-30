function mergSort(arr){
if(arr.length <= 1){
  return arr
}

let mid = Math.floor(arr.length/2)
let leftArr = arr.slice(0,mid)
let rightArr = arr.slice(mid)

return merge(mergSort(leftArr),mergSort(rightArr))
}

function merge(leftArr,rightArr){

let sortedArr = []
while(leftArr.length && rightArr.length){
if(leftArr[0] < rightArr[0]){
  sortedArr.push(leftArr.shift())
}else{
  sortedArr.push(rightArr.shift())
}
}
return [...sortedArr,...rightArr,...leftArr]

}


const array = [84,44,2,55,3,221,33]
console.log(mergSort(array));