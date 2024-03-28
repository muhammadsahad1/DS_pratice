function mergSort(arr){
  if(arr.length < 2){
    return arr
  }
  let middle = Math.floor(arr.length/2)
  let leftarr = arr.slice(0,middle)
  let rightarr = arr.slice(middle)
  return merge(mergSort(leftarr),mergSort(rightarr))
}

function merge(leftarr,rightarr){
let sortArr = []
while(leftarr.length && rightarr.length){
  if(leftarr[0] < rightarr[0]){
    sortArr.push(leftarr.shift())
  }else{
    sortArr.push(rightarr.shift())
  }
}
return [...sortArr,...leftarr,...rightarr]
}

const array = [84,44,2,55,3,221,33]
console.log(mergSort(array));