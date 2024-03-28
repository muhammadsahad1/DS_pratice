// class HashTable {
//   constructor(size){
//      this.table = new Array(size)
//      this.size = size
//   }

//   hash(key){
//     let total = 0
//     for(let i = 0;i<key.length;i++){

//       total += key. charCodeAt(i)
//     }
//     return total % this.size
//   }

//   set(key,value){
//     const index = this.hash(key)
//     this.table[index] = value
//   }

//   get(key){
//     const index = this.hash(key)
//     return this.table[index]
//   }

//   remove(key){
//     const index = this.hash(key)

//       this.table[index] = undefined

//   }

//   display (){
//     if(this.table=== null){
//       console.log("is empty");
//       return
//     }
//     for(let i = 0 ;i < this.table.length;i++){
//       if(this.table[i]){

//         console.log("index",i , "value :", this.table[i]);
//       }

//     }
//   }

// }

// let table = new HashTable(50)
// table.set("name","sahad")
// table.set("age",55)

// console.log(table.get("name"))
// table.display()


class HashTable {
constructor(size){
  this.table = new Array(size)
  this.size = size
}

hash(key){
let hash = 0
for(let i = 0 ; i < key.length;i++)
{
  hash += key.charCodeAt(i)
}
return hash % this.size
}

set(key,value){

let index = this.hash(key)
const bucket = this.table[index]
if(!bucket){
  this.table[index] = [[key,value]]
}else{
// linear probing
  const sameKeyItem = bucket.find(( item ) => item[0] === key)
  if(sameKeyItem){
    bucket[1] = value
  }else {
    bucket.push([key,value])
  }
}
}
get(key){
  let index = this.hash(key)
  let bucket = this.table[index]
  if(bucket){
    const sameKeyItem = bucket.find(( item ) => item[0] === key)
    if(sameKeyItem){
       console.log(sameKeyItem[1])
    }
  }
  return undefined
}

delete(key){
  let index = this.hash(key)
  // this.table[index] = undefined
  const bucket = this.table[index]
  if(bucket){
    const sameKeyItem = bucket.find((item) => item[0] === key)
    if(sameKeyItem){
      bucket.splice(bucket.indexOf(sameKeyItem),1)
      
    }
}
return true

}
display(){
  for(let i = 0; i < this.table.length; i++)
  {
    if(this.table[i]){
      console.log(i , this.table[i]);
    }
  }
}
}

const table = new HashTable(50);
table.set("name", "sahad");
table.set("age", 66);
table.set("palce", "killy");
table.set("housename", "bismihouse");
// table.delete("housename");
table.display();
table.get("age")

